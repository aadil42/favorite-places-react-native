import { useState, useLayoutEffect, useCallback } from "react";

import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconBtn from "../components/IconBtn";

const Map = ({ navigation }) => {

    const [location, setLocation] = useState();

    const locationSaveHandler = useCallback(() => {
        if(!location) {
            Alert.alert("Please Pick Location", "Can't proceed  without picking location");
            return;
        }  
        
        navigation.navigate("AddPlace", {
            pickedLat: location.lat,
            pickedLng: location. lng
        }); 

    }, [location, navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconBtn 
                        icon="save" 
                        size={24} 
                        color="white" 
                        pressHandler={locationSaveHandler} 
                        />
            }
        });
    }, [navigation, locationSaveHandler]);

    
    const region = {
        latitude: 23.022505,
        longitude: 72.571365,
        latitudeDelta: 0.5123,
        longitudeDelta: 0.9185,
    };

    const selectLocationHandler = (event) => {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        console.log(lat, lng)
        setLocation({lat: lat, lng: lng});
    }
    
    return (
        <MapView onPress={selectLocationHandler} style={styles.map} initialRegion={region}>
            {location && <Marker 
                title="Picked Location"
                coordinate={{
                    latitude: location["lat"], 
                    longitude: location["lng"]
                }}
            />}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default Map;
