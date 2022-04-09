import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import Search from "./Search";
import FilmDetail from "./FilmDetail";
import AppContext from "./AppContext";
// import {createSwitchNavigator} from "react-navigation-switch";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AboutScreen from "./AboutScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
// const MainStack = createNativeStackNavigator(
//     {
//         Search,
//         FilmDetail,
//     },
//     {
//         initialRouteName: 'Search',
//         navigationOptions: {
//             headerShown: false,
//         }
//     }
// );
// const MainTab = createBottomTabNavigator(
//     {
//         Search:MainStack,
//         About: AboutScreen
//     }
// )
// const AppNavigator = createSwitchNavigator({
//     Home:Search,
//     Main:MainTab,
// })
const StackRouter = (props) => {
    return (
        // <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName="Search">
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="FilmDetail" component={FilmDetail}/>
            </Stack.Navigator>
        // </NavigationContainer>
        // <MainStack/>
    )
}
export default StackRouter
