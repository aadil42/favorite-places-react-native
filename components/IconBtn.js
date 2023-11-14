import { Pressable } from "react-native"

import { Ionicons } from "@expo/vector-icons";

const IconBtn = ({icon, size, color, pressHandler}) => {

    return (
        <Pressable onPress={pressHandler}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}

export default IconBtn;