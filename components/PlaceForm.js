import { useState } from "react";

import {View, Text, TextInput, StyleSheet} from "react-native";

// import constants
import { Colors } from "../constants/Colors";

const PlaceForm = () => {

    const [title, setTitle] = useState("");

    const titleChangeHandler = (val) => {
        setTitle(val);
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.lable}> 
                    Title
                </Text>
                <TextInput 
                    keyboardType="ascii-capable"
                    value={title}
                    onChangeText={titleChangeHandler}
                    style={styles.input}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        alignItems: "center",
        marginTop: 25,
        flex: 1
    },
    formContainer: {
        // borderWidth: 2,
        width: "80%"
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