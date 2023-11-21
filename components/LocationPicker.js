import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Pressable, Image} from "react-native";
import { useNavigation, 
         useIsFocused,
         useRoute } from "@react-navigation/native";

import { getCurrentPositionAsync, 
         useForegroundPermissions,
         PermissionStatus } from "expo-location";

// import components
import OutlineBtn from "./OutlineBtn";


// import helper functions
import { getMapPreviewFunction } from "../utils/location";

const LocationPicker = () => {
    
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [location, setLocation] = useState({});
    const navigation = useNavigation();
    const [image , setImage] = useState(false);
    const isFocused = useIsFocused();
    const routes = useRoute();

    const ifLocationAllowed = async () => {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }
        if(locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Oops can't access location", "You must grand permission");
            locationPermissionInformation.status = PermissionStatus.UNDETERMINED;
            return false;
        }
        return true;
    } 

    useEffect(() => {
        if(routes.params) {
            setLocation({
                         lat: routes.params.pickedLat, 
                         lng: routes.params.pickedLng
                        });
            
        }
    }, [isFocused, setLocation]);

    const getLocationHandler = async () => {
        try {

            const isAllowed = await ifLocationAllowed();
            if(!isAllowed) return;
            const response = await getCurrentPositionAsync();

            // set location lat and long
            const {longitude, latitude} = response.coords;
            const image = await getMapPreviewFunction(longitude, latitude);
            setImage(image);
            // get the map
        } catch {
            console.log('oops... request faild');
        }
    }

    const pickLocationHandler = () => {
        navigation.navigate("Map");
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapPre}>
                {image && <Image source={require("../assets/tajMahal.jpeg")} />}
            </View>
            <View style={styles.btnContainer}>
                <OutlineBtn pressHandler={getLocationHandler} title="Get Location" color="white" size={24} icon="location" />
                <OutlineBtn pressHandler={pickLocationHandler} title="Pick Location" color="white" size={24} icon="map" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      marginTop: 20,
    },
    mapPre: {
        backgroundColor: "red",
        height: 250,
        justifyContent: "center",
        alignItems: "center"
    },
    placeHolder: {
        fontSize: 24,
        color: "white"
    },
    btnContainer: {
        marginTop: 5
    }
});

export default LocationPicker;