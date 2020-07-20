import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useThemeColor } from '../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../services/GetArtistsPageService'
import ArtistComponent from '../components/Artists/ArtistComponent'
import ThemedButton from '../components/ThemedButton'
import { Ionicons } from '@expo/vector-icons'
import { FontSizes } from '../constants/FontSizes'

export default function ThemedLyrics(props: { lyrics: string }) {

    let { lyrics } = props;
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
            fontSize: FontSizes.large,
        }, name: {
            flex: 4,


        },
        icon: {
            flex: 1,
            margin: 10,
            alignItems: "center"
        },
        socialMedia: {
            alignItems: "flex-start",

            flexDirection: "row",

            justifyContent: 'space-between',


        },
        SocialIcon: {
            flex: 1,
            margin: 5,
            alignItems: "flex-start"

        }

    })



    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container} >

                <View style={styles.name} >
                    <Text style={styles.text}> {lyrics}</Text>

                </View>

            </ScrollView>




        </View>
    )
}

