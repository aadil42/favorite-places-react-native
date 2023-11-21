import { Pressable, StyleSheet, Text } from "react-native"

// get the styles
import { Colors } from "../constants/Colors";

const Btn = ({pressHandler, title}) => {

    return (
        <Pressable style={styles.container} onPress={pressHandler}>
           <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        paddingVertical:10,
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10
    }
});

export default Btn;