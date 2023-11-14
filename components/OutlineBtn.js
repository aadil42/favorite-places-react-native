import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const OutlineBtn = ({pressHandler, icon, color, size, title}) => {

    return (
        <Pressable onPress={pressHandler}  style={styles.btnContainer}>
            <Ionicons name={icon} color={color} size={size} />
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        marginTop: 10,
        padding: 8,
        borderRadius: 8,
        backgroundColor: Colors.primary400,
    },
    text: {
        color: "white",
        marginLeft: 5
    }
});

export default OutlineBtn;