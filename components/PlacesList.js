import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";


const PlacesList = ({list}) => {

    const renderer = (itemData) => {
        const item = itemData.item;
        console.log(item);
        return <PlaceItem title={item.title} 
                          imageUri={item.imageUri}
                          address={item.address}
                          location={item.location} />
    }
    return (
        // <>
        //     <PlaceItem text="this is place item 1" />
        //     <PlaceItem text="this is place item 2" />
        //     <PlaceItem text="this is place item 3" />
        // </>
        <FlatList 
        data={list}
        renderItem={renderer}
        keyExtractor={(item) =>  item.id}
        />
    );
}

export default PlacesList;