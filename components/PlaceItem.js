import { View, Image, Text, Pressable, StyleSheet } from "react-native";

// import constants
import { Colors } from "../constants/Colors";

// import navigation stuff
import { useNavigation } from "@react-navigation/native";


const PlaceItem = ({title, imageUri, address, location}) => {
    // '../assets/tajMahal.jpeg'
    const navigation = useNavigation();

    // console.log(location, 'from parent parent');

    const pressHandler = () => {
        // console.log(location, 'from item');
        navigation.navigate("PlaceDetail", {
            title,
            imageUri,
            address,
            location  
        });
    }

    return (
        <View style={styles.containerContainer}>
            <Pressable style={styles.container} onPress={pressHandler}>
                <Image style={styles.image} source={{uri: imageUri}}/>
                <View style={styles.info}>
                    <Text style={styles.text}>{title}</Text>
                    <Text>{address}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    containerContainer: {
        alignItems: "center"
    },
    text: {
        color: "black",
        fontSize: 20,
        marginBottom: 5
    },
    image: {
        width: 100,
        height: "100%"
    },
    info: {
        backgroundColor: Colors.primary500,
        paddingLeft: 10,
        width: "100%"
    },
    container: {
        height: 100,
        overflow: "hidden",
        width: "93%",
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: "row",
    }
});

export default PlaceItem;