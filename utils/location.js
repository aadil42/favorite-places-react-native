
import axios from "axios";

const makeUrl = (lat, long) => {
    const urlBody = "https://api.geoapify.com/v1/geocode/reverse";
    const API_KEY = "9d5f47fda0c04b17833606a7dc848e30";
    return `${urlBody}?lat=${lat}&lon=${long}&format=json&apiKey=${API_KEY}`;
}

export const getMapPreviewFunction = async (latitude, longitude) => {
    console.log(latitude, longitude);
    try {
        const url = makeUrl(latitude, longitude);
        console.log(url);
        const response = await axios.get(url);
        console.log(response, 'success'); 
        // the above data is not enough to get the location image  
        // so for now just return true
        return true;
    } catch {
        console.log('Opps.. something went wrong from locations in utils.')
        return false;
    }
}

export const getAddress = async (latitude, longitude) => {
    try{
        const url = makeUrl(latitude, longitude);
        const response = await axios.get(url);

        // console.log('hehe reaching');
        // console.log(response["data"]["results"][0], 'this is response');
        return response["data"]["results"][0];
    }catch {
        console.log('something went wrong in getAddress');
    }
}

