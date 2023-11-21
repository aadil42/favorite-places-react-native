import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
    const region = {
        latitude: 23.022505,
        longitude: 72.571365,
        latitudeDelta: 0.5123,
        longitudeDelta: 0.9185,
    };

    const selectLocationHandler = (event) => {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
    }

    return (
        <MapView onPress={selectLocationHandler} style={styles.map} initialRegion={region}>
            <Marker />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default Map;
