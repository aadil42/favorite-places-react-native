import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import constans
import { Colors } from "./constants/Colors";

// import components
import IconBtn from "./components/IconBtn";

// import navigation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import PlaceDetail from './screens/PlaceDetail';

// import inbuilt components
import AppLoading from "expo-app-loading";

// import databse function
import { init } from "./utils/database";

const Stack = createNativeStackNavigator();


export default function App() {

  const [dbInitialized, setDbInitialized]  = useState(false);

  useEffect(() => {
      init().then(() => {
        setDbInitialized(true);
      }).catch((err) => {
        console.log(err);
      })
  }, []);


  if(!dbInitialized) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          }
        }}
        >
          <Stack.Screen
            options={({navigation}) => ({
              title:"All Places",
              headerRight: () => {
                return <IconBtn 
                          icon="add" 
                          size={24} 
                          color="black" 
                          pressHandler={() => {
                            navigation.navigate("AddPlace");
                          }} 
                />
              }
            })}
            
            name="AllPlaces" 
            component={AllPlaces}  
          />

          <Stack.Screen
           options={{
            title: "Add Favorite Place"
           }}

           name="AddPlace" component={AddPlace}  />
           
           <Stack.Screen
           options={{
            title: "Map"
           }}

           name="Map" component={Map}  />

           <Stack.Screen 
           options={{
            title: "Loading..."
           }}
           name="PlaceDetail"
           component={PlaceDetail}
           />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
