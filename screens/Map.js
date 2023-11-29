import { useState, useLayoutEffect, useCallback, useEffect } from "react";

import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconBtn from "../components/IconBtn";


const Map = ({ navigation, route }) => {

    const initialLocation = route && route.params && {
        lat: route.params.location['lat'],
        lng: route.params.location['lng']
    };
    
    const region = {
        latitude: (initialLocation && initialLocation.lat) || 23.022505,
        longitude: (initialLocation && initialLocation.lng) || 72.571365,
        latitudeDelta: 0.5123,
        longitudeDelta: 0.9185,
    };

    const [location, setLocation] = useState(initialLocation);

    const locationSaveHandler = useCallback(() => {
        if(!location) {
            Alert.alert("Please Pick Location", "Can't proceed  without picking location");
            return;
        }  
        
        navigation.navigate("AddPlace", {
            pickedLat: location.lat,
            pickedLng: location.lng
        }); 
    }, [location, navigation]);

    useLayoutEffect(() => {
        if(initialLocation) return;

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
    }, [navigation, locationSaveHandler, initialLocation]);


    const selectLocationHandler = (event) => {
        if(initialLocation) return;
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
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
