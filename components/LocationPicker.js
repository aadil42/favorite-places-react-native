import { Text, View, StyleSheet, ScrollView } from "react-native";

// import components
import OutlineBtn from "./OutlineBtn";

const LocationPicker = () => {

    const getLocationHandler = () => {
        console.log('getting location');
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