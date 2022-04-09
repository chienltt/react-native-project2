import React, {useContext} from "react";
import {View, Image,Text,TouchableOpacity,StyleSheet} from "react-native";
import {movie} from "../../mockData";
import AppContext from "../AppContext";

const FilmItem = ({filmInfo,navigation}) => {
    const {setSelectedFilm} = useContext(AppContext)
    const onPressFilm=()=>{
        navigation.navigate('FilmDetail')
        setSelectedFilm(filmInfo)
    }
    return (
        <View style={style.container}>
            <Image style={style.poster} source={{uri: filmInfo.Poster}}/>
            <View style={style.info}>
                <TouchableOpacity onPress={()=>onPressFilm()}>
                    <Text style={style.filmTitle}>
                        {filmInfo.Title}
                    </Text>
                </TouchableOpacity>
                <Text>
                    {filmInfo.Year} ({filmInfo.Type})
                </Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        height:70,
        flexDirection: "row",
        borderColor: '#1589C0',
        borderWidth: 1,
        borderRadius: 3,
    },
    poster: {
        height: '100%',
        width: '15%'
    },
    info:{
        paddingHorizontal:10,
        justifyContent:"center",
        maxWidth:'85%'
        // height:'100%',backgroundColor:'#000000'
    },
    filmTitle :{
        color: '#1589C0',
        fontWeight:'700'
    }
})
export default FilmItem
