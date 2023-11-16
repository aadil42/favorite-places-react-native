import { useState } from "react";

import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

// import constants
import { Colors } from "../constants/Colors";


// import components
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";


const PlaceForm = () => {

    const [title, setTitle] = useState("");

    const titleChangeHandler = (val) => {
        setTitle(val);
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.lable}> 
                    Title
                </Text>
                <TextInput 
                    keyboardType="ascii-capable"
                    value={title}
                    onChangeText={titleChangeHandler}
                    style={styles.input}
                />
                <ImagePicker />
                <LocationPicker />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        paddingHorizontal: 25
    },
    lable: {
        marginBottom: 8,
        color: Colors.primary500,
        fontSize: 18
    },
    input: {
       borderWidth: 2,
       borderColor: "black",
       paddingVertical: 5,
       paddingHorizontal: 3,
       borderRadius: 8,
       fontSize: 18,
       backgroundColor: "white"
    }
});
export default PlaceForm;