import React, {useContext, useState} from "react";
import {View, ScrollView, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";
import {searchData} from "../mockData";
import FilmItem from "./component/FilmItem";
import {searchFilmFromAPI} from "./API";
import AppContext from "./AppContext";

const Search = ({navigation}) => {
    const {searchValue,setSearchValue} = useContext(AppContext)
    const [data,setData] = useState([])
    const onChangeTextValue = async (searchInput) => {
        setSearchValue(searchInput)
        const data = await searchFilmFromAPI(searchInput)
        if(data){
            if(data.Response === 'False') setData([])
            else{
                setData(data.Search)
            }
        }
    }
    return (
        <View style={style.component}>
            <View style={style.header}>
                <Text>Search</Text>
            </View>
            <View style={style.body}>
                <SafeAreaView style={style.wrapSearch}>
                    <TextInput
                        style={style.textInput}
                        value={searchValue}
                        onChangeText={(value) => onChangeTextValue(value)}
                        placeholder={'search film ...'}
                    />
                </SafeAreaView>
                <ScrollView>
                    {data.length!== 0? data.map((film,index)=>{
                        return <FilmItem navigation={navigation} key={index} filmInfo={film}/>
                        }
                    ) : <View/>}
                </ScrollView>
            </View>
            <View style={style.footer}>

            </View>

        </View>
    )
}
const style = StyleSheet.create({
    component: {
        backgroundColor: '#ffffff',
        height: '100%',
        flex: 1,
    },
    header: {
        backgroundColor: '#1589C0',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 8,
    },
    wrapSearch: {
        // backgroundColor:'#000000'  ,
        height: '10%',
        alignItems: 'center',
        justifyContent:'center'
    },
    textInput: {
        height:'60%',
        width: '80%',
        borderWidth: 1,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:10
    },
    footer: {
        flex: 1,
    },
    searchInput: {},
    listFilm: {}
})
export default Search
