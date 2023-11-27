import { useState } from "react";

import { View, Image, StyleSheet, Alert } from "react-native";

import OutlineBtn from "./OutlineBtn";


// import imagetaking functions
import { launchCameraAsync, 
         useCameraPermissions, 
         PermissionStatus } from "expo-image-picker";

const ImagePicker = ({imageUri, setImageUri}) => {

    // const [imageUri, setImageUri] = useState(null);
    const [camaraPermissionInformation, requstPermission] = useCameraPermissions();
    
    const varifyPermission = async () => {

        if(camaraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requstPermission();
            return response.granted;
        }

        if(camaraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert("Permission Denied", "You  must grant permission to your storage to use this feature");
            return false;
        }
        
    }

    const imagePickerHandler = async () => {

        // check permission
        const isAllowed = varifyPermission();
        if(!isAllowed) return;

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: .5
        });

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