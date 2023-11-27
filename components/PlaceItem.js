import { View, Image, Text, Pressable, StyleSheet } from "react-native";

// import constants
import { Colors } from "../constants/Colors";

const PlaceItem = ({title, imageUri, address, location}) => {
    // '../assets/tajMahal.jpeg'
    return (
        <Pressable>
            <View>
                <Image style={styles.image} source={{uri: imageUri}}/>
                <Text style={styles.text}>{title}</Text>
                <Text>{address}</Text>
                <Text>{location.lat} and {location.lng}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.primary200
    },
    image: {
        width: 300,
        height: 300
    }
});

export default PlaceItem;