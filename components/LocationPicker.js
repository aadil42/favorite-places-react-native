import { useState } from "react";
import { Text, View, StyleSheet, Alert, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

    const getLocationHandler = async () => {
        try {

            const isAllowed = await ifLocationAllowed();
            if(!isAllowed) return;
            const response = await getCurrentPositionAsync();

            // set location lat and long
            const {longitude, latitude} = response.coords;
            getMapPreviewFunction(longitude, latitude);
            // get the map
        } catch {
            console.log('oops... request faild');
        }
    }

    const pickLocationHandler = () => {
        console.log('picking location');
    }

    const mapClickHandler  = () => {
        navigation.navigate("Map");
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={mapClickHandler} style={styles.mapPre}>
                <Text style={styles.placeHolder}>There will be Map!</Text>
            </Pressable>
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