import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/Homescreen";

const {Navigator,Screen} = createStackNavigator();
const NavigationView = () => {
    const routes = () =>(
        <Screen name="Home" component={Homescreen} />
    )
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator>
          {routes()}
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default NavigationView;
