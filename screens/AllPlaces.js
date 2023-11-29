import { useEffect, useState } from "react";
import PlaceList from "../components/PlacesList";
import { useIsFocused } from "@react-navigation/native";

// get helper functions
import { fetchPlaces } from "../utils/database";

const AllPlaces = ({route}) => {
    
    const [list, setList] = useState([]);

    const isFocused = useIsFocused();
    const result = route.params;

    useEffect(() => {

        if(isFocused && result) {
            // console.log(result.data, 'this is suppose to be the data');
            setList((preList) => [...preList, result.data]);
        }
    }, [isFocused]);

    useEffect(() => {
        const getStoredPlaces = async () => {
            const result = await fetchPlaces();
            setList(result);
        }
        getStoredPlaces();
    }, []);

    return (
        <PlaceList list={list} />
    );
}

export default AllPlaces;