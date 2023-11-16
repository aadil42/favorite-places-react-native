import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
    const region = {
        latitude: 23.022505,
        longitude: 72.571365,
        latitudeDelta: 0.5123,
        longitudeDelta: 0.9185,
    };

    return <MapView style={styles.map} initialRegion={region}/>
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default Map;
