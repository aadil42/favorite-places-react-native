import { View, Image, Text, Pressable, StyleSheet } from "react-native";

// import constants
import { Colors } from "../constants/Colors";

const PlaceItem = () => {
    return (
        <Pressable>
            <View>
                <Image source={require('../assets/tajMahal.jpeg')}/>
                <Text style={styles.text}>This is PlaceItem</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.primary200
    }
});

export default PlaceItem;