import { View, Image, StyleSheet } from "react-native";

import OutlineBtn from "./OutlineBtn";

const ImagePicker = () => {

    const imagePickerHandler = () => {
        console.log('image picking...');
    }

    return (
        <View>
            <View>
                {/*  this is where the preview will go */}
                <Image style={styles.image}/>
            </View>
            <View>
                <OutlineBtn 
                pressHandler={imagePickerHandler}
                icon="camera"
                color="white"
                size={24}
                title="TAKE IMAGE"
                />
                {/* this is where button will go */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        borderWidth: 2,
        borderColor: "black",
        marginVertical: 15,
        borderRadius: 8
    }
});

export default ImagePicker;