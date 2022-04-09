import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import AboutScreen from "./AboutScreen";
import StackRouter from "./StackRouter";
const TabRouter=(props)=>{
    const tab = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <tab.Navigator screenOptions={{
                tabBarLabelPosition: "beside-icon",
                tabBarLabelStyle: {
                    fontWeight: "700",
                    fontSize: 15
                },
                tabBarIconStyle: {display:'none'}
            }} initialRouteName="StackRouter">
                <tab.Screen name="Search" component={StackRouter}/>
                <tab.Screen name="About App" component={AboutScreen}/>
            </tab.Navigator>
        </NavigationContainer>
    )
}
export default TabRouter
