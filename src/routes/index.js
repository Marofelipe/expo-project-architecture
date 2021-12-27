import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "../screen/Services";
import ShoppingCart from "../screen/ShoppingCart";
import { cores } from "../styles/global.styles";

export default function Routes() {
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            textAlignVertical: 'center',
            height: '95%',
            width: '100%',
            backgroundColor: cores.laranja,
          },
          tabBarStyle: {
            width: '100%',
            height: 70,
            lineHeight: 21,
          },
          tabBarIconStyle:{
            display: 'none',
          },
          keyBoarHidesTabBar: true,
        }}
      >
        <Tabs.Screen name="Services" component={Services} options={{ headerShown: false }}/>
        <Tabs.Screen name="Shopping Cart" component={ShoppingCart} options={{ headerShown: false }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};