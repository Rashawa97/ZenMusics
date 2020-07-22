import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeColor } from '../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../services/GetArtistsPageService'
import ArtistComponent from '../components/Artists/ArtistComponent'
import ThemedButton from '../components/ThemedButton'
import { Ionicons } from '@expo/vector-icons'
import { FontSizes } from '../constants/FontSizes'

export default function ThemedNoLyrics() {

    
    const styles = StyleSheet.create({
        mainContainer: { flex: 1 },
        container: {

            padding: 45,
            margin: 5,
            alignItems: "center",
            flexDirection: "row",

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
            flex: 1,
            margin: 10,
            alignItems: "center"
        }

    })



    return (
        <View style={styles.mainContainer}>
            <View style={styles.container} >

                <View style={styles.name} >
                    <Text style={styles.text}> No Lyrics found for this Track</Text>

                </View>
                <View style={styles.icon} >
                    <Ionicons name={'ios-sad'} size={FontSizes.xxxLarge} color={useThemeColor({}, "accentColor")} />
                </View>
            </View>


     

        </View>
    )
}

