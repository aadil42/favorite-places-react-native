import { View, Image, Text, Pressable } from "react-native";


const PlaceItem = () => {
    return (
        <Pressable>
            <View>
                <Image source={require('../assets/tajMahal.jpeg')}/>
                <Text>This is PlaceItem</Text>
            </View>
        </Pressable>
    );
}

export default PlaceItem;