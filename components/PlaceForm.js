import { useState } from "react";

import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

// import constants
import { Colors } from "../constants/Colors";

// helper functions
import { getAddress } from "../utils/location";

// import classes
import { Place } from "../models/Place";

// import components
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Btn from "../components/Btn";

// get navigation stuff.

import { useNavigation } from "@react-navigation/native";

const PlaceForm = () => {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState({});
    const [imageUri, setImageUri] = useState(null);

    const navigation = useNavigation();

    const titleChangeHandler = (val) => {
        setTitle(val);
    }

    const onSubmit = () => {
        console.log('submits...');
        try {
            const gettingAddress = async () => {
                const response = await getAddress(location.lat,  location.lng);
                const county = response["county"];
                const state = response["state"];
                const country = response["country"];
    
                const address = `${county} ${state} ${country}`;
                // console.log(address, "this is the address");
                navigation.navigate("AllPlaces", {
                    data:  new Place(title, imageUri, address, location)
                });
    
                setLocation((preState) => {
                    return {...preState, address: address}
                });
            }
            gettingAddress();
        }  catch {
            console.log('something went wrong in PlaceForm component');
        }
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
                <ImagePicker imageUri={imageUri} setImageUri={setImageUri} />
                <LocationPicker setLocation={setLocation}   />
                <Btn title="Submit" pressHandler={onSubmit} /> 
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