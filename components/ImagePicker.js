import { useState } from "react";

import { View, Image, StyleSheet } from "react-native";

import OutlineBtn from "./OutlineBtn";


// import imagetaking functions
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";

const ImagePicker = () => {

    const [imageUri, setImageUri] = useState(null);

    const imagePickerHandler = async () => {
        const image = await launchCameraAsync();
        const {uri} = image.assets[0];
        setImageUri(uri);
    }

    return (
        <View>
            <View>
                {/*  this is where the preview will go */}
                <Image source={{uri: imageUri}} style={styles.image}/>
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