import { FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";


const PlacesList = ({list}) => {

    const renderer = (itemData) => {
        const item = itemData.item;
        return <PlaceItem title={item.title} 
                          imageUri={item.imageUri}
                          address={item.address}
                          location={item.location} />
    }
    return (
       <View style={styles.container}>
            <FlatList 
            data={list}
            renderItem={renderer}
            keyExtractor={(item) =>  item.id}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    }
});

export default PlacesList;