import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBarBit=()=>{
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search" style={styles.searchbar}/>
        </View>
    )
}

const styles=StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        borderColor: '#1A3DED',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 30,
        flexDirection: 'row'
    },
    searchbar: {
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBarBit;