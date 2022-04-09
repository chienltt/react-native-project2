import React from "react";
import {View,Text,StyleSheet} from "react-native";

const AboutScreen = (props)=>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Chào các bạn </Text>
            <Text style={style.text}>Ứng dụng này giúp các bạn tra cứu thông tin về phim nhé </Text>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:"space-evenly",
        alignItems:"center",
        // backgroundColor:''
    },
    text:{
        color:'#23A2D8',
        fontSize:20,
        fontWeight:'700',
        textAlign:"center"
    }
})
export default AboutScreen
