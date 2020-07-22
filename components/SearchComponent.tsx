import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useThemeColor } from '../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../services/GetArtistsPageService'
import ArtistComponent from '../components/Artists/ArtistComponent'
import ThemedButton from '../components/ThemedButton'
import { Ionicons } from '@expo/vector-icons'
import { FontSizes } from '../constants/FontSizes'
import ThemedTextInput from './ThemedTextInput'

export default function SearchComponent(props: { onPress: (query: string) => void }) {
    let { onPress } = props;

    const [query, setQuery] = useState("");


    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
        },
        container: {
            borderLeftColor: useThemeColor({}, "accentColor"),
            margin: 5,
            alignItems: "center",
            flexDirection: "row",
            borderLeftWidth: 5,
            justifyContent: 'space-between',
            backgroundColor: useThemeColor({}, "background"),
        },
        text: {
            color: useThemeColor({}, "accentColor"),
            fontWeight: 'bold',
            fontSize: FontSizes.xLarge,
        }, name: {
            flex: 4,


        },
        icon: {

            paddingRight:55 ,
            alignItems: "center"
        }

    })



    return (
        <View style={styles.mainContainer}>
            <View style={styles.container} >

                <ThemedTextInput placeHolder={'Search Word'} value={query} onValueChanged={(value) => setQuery(value)} />

                <View style={styles.icon} >
                    <Ionicons name={'ios-search'} size={FontSizes.xxLarge * 2} color={useThemeColor({}, "accentColor")} onPress={() => onPress(query)} />
                </View>
            </View>




        </View>


    )
}

