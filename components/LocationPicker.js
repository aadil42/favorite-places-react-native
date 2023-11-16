import { Text, View, StyleSheet, Alert} from "react-native";

import { getCurrentPositionAsync, 
         useForegroundPermissions,
         PermissionStatus } from "expo-location";

// import components
import OutlineBtn from "./OutlineBtn";

const LocationPicker = () => {
    
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    
    const ifLocationAllowed = async () => {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }
        if(locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Oops can't access location", "You must grand permission");
            return false;
        }
        return true;
    } 

    const getLocationHandler = async () => {
        try {

            const isAllowed = await ifLocationAllowed();
            if(!isAllowed) return;
            // console.log('hehe');

            console.log("allowed");
            const response = await getCurrentPositionAsync();
            console.log(response);
        } catch {
            console.log('oops... request faild');
        }
    }

    const pickLocationHandler = () => {
        console.log('picking location');
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapPre}>
                <Text style={styles.placeHolder}>There will be Map!</Text>
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