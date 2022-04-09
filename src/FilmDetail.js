import React, {useContext, useEffect, useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {getFilmById} from "./API";
import {movie} from "../mockData";
import AppContext from "./AppContext";


const FilmDetail = ({navigation}) => {
    const {selectedFilm} = useContext(AppContext)
    const filmInfo = selectedFilm
    const [movie, setMovie] = useState(null)
    useEffect(async () => {
        const initData = await getFilmById(filmInfo.imdbID)
        setMovie(initData)
    }, [])
    return (

        movie !== null ? <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={style.header_item} onPress={() => {
                    navigation.navigate('Search')
                }}>
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 15,
                    }}>Search</Text>
                </TouchableOpacity>
                <Text style={style.header_item}>{movie.Type}</Text>
                <Text style={style.header_item}></Text>
            </View>
            <View style={style.body}>
                <Image style={style.poster} source={{uri: movie.Poster}}/>
                <Text style={style.title}>{movie.Title} ({movie.Year})</Text>
                <Text style={style.time_and_genre}> {movie.Runtime} | {movie.Genre}</Text>
                <View style={style.rating_wrap}>
                    {movie.Ratings.map((rating, index) => {
                        return (
                            <View key={index} style={style.rating}>
                                <Text>{rating.Value}</Text>
                                <Text style={style.rating_source}>{rating.Source}</Text>
                            </View>
                        )
                    })}
                </View>
                <Text>{movie.Plot}</Text>
                <View style={style.more_info_wrap}>
                    <View style={style.more_info}>
                        <Text style={{fontWeight: '700'}}>Release date :</Text>
                        <Text>{movie.Released}</Text>
                    </View>
                    <View style={style.more_info}>
                        <Text style={{fontWeight: '700'}}>Director :</Text>
                        <Text>{movie.Director}</Text>
                    </View>
                    <View style={style.more_info}>
                        <Text style={{fontWeight: '700'}}>Box office :</Text>
                        <Text>{movie.BoxOffice}</Text>
                    </View>
                    <View style={style.more_info}>
                        <Text style={{fontWeight: '700'}}>Production :</Text>
                        <Text>{movie.Production}</Text>
                    </View>
                </View>
            </View>
        </View> : <View/>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: '100%',
        flex: 1,
    },
    header: {
        // paddingHorizontal: 10,
        width: '100%',
        backgroundColor: '#1589C0',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header_item: {
        width: '20%',
        alignItems: "center",
        color: '#ffffff',
        fontSize: 15,
        textAlign: "center"
    },
    body: {
        flex: 9,
        alignItems: "center"
    },
    poster: {
        marginTop: 20,
        marginBottom: 5,
        height: '40%',
        width: '70%'
    },
    title: {
        color: '#1589C0',
        fontSize: 15,
        fontWeight: '800',
        marginVertical: 5,
    },
    time_and_genre: {
        color: '#D8B423',
        fontSize: 12,
        marginVertical: 5,
    },
    rating_wrap: {
        width: '100%',
        // backgroundColor:'#000000',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    rating: {
        width: '30%',
        alignItems: "center",
        marginHorizontal: 10
    },
    rating_source: {
        color: '#D8B423',
        fontSize: 12,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    plot: {
        maxWidth: '100%',
        marginHorizontal: 12
    },
    more_info_wrap: {
        width: '100%',
        marginVertical: 15,
    },
    more_info: {
        flexDirection: "row",
        paddingVertical: 0,
    }


})
export default FilmDetail
