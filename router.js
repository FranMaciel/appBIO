import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/pages/Home";
import Itens from "./src/pages/Itens";
import Details from "./src/pages/Details";



const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                 <Stack.Screen
                    name="Itens"
                    component={Itens}
                    options={{
                        headerTintColor: "#F05742",
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{ 
                        headerTintColor: "#F05742",
                     }}
                />

             
            </Stack.Navigator>
        </NavigationContainer>
    )
}