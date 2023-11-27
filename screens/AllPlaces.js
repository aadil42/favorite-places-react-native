import { useEffect, useState } from "react";
import PlaceList from "../components/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({route}) => {
    
    const [list, setList] = useState([]);

    const isFocused = useIsFocused();
    const result = route.params;

    useEffect(() => {

        if(result) {
            console.log(result.data, 'this is suppose to be the data');
            setList((preList) => [...preList, result.data]);
        }
        // const data = routes.data;
        // console.log(data);
    }, [isFocused]);

    return (
        <PlaceList list={list} />
    );
}

export default AllPlaces;