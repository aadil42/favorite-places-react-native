import { useEffect } from "react";

import { Text, StyleSheet, View, Image } from "react-native";

// components
import OutlineBtn from "../components/OutlineBtn";
const PlaceDetail = ({navigation, route}) => {
    
    // console.log(route);
    const title = route.params.title;
    const imageUri = route.params.imageUri;
    const address = route.params.address;
    const location = route.params.location;

    // console.log(location, 'this is from parent');

    useEffect(() => {
        navigation.setOptions({
            title: title
        });
    }, []);

    const pressHandler = () => {
        navigation.navigate("Map", {
            location: location
        });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Title: {title}</Text>
            <Text style={styles.text}>
                Appddress: {address}
            </Text>
            <Image 
                source={{uri: imageUri}}
                style={styles.image}
            />
            <OutlineBtn 
            icon="map" 
            color="white"
            size={20}
            title="View on Map"
            pressHandler={pressHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    image: {
        width: 300,
        height: 200,
        marginTop: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: "white",
        textAlign:  "center"
    }
});

export default PlaceDetail;