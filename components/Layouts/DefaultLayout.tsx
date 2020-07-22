import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeColor } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../../services/GetArtistsPageService'
import ArtistComponent from '../../components/Artists/ArtistComponent'
import ThemedButton from '../../components/ThemedButton'
import { Ionicons } from '@expo/vector-icons'
import { FontSizes } from '../../constants/FontSizes'

export default function DefaultLayout(props:
    {
        children: JSX.Element|JSX.Element[];
        title: string[];


    }) {

    let { children, title } = props;

    const styles = StyleSheet.create({
        mainContainer: { flex: 1 },
        container: {

            padding: 45,
            margin: 5,
            alignItems: "center",
            flexDirection: "row",

            justifyContent: 'space-between',
            backgroundColor: useThemeColor({}, "accentColor"),
        },
        text: {
            color: useThemeColor({}, "background"),
            fontWeight: 'bold',
            fontSize: FontSizes.large,
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

                    {title.map((text:string,index:number) => (

                        <Text key={`${text}${index}`} style={styles.text}>
                            {text}
                        </Text>
                    ))}


                </View>
                <View style={styles.icon} >
                    <Ionicons name={'ios-heart'} size={FontSizes.xxxLarge} color={useThemeColor({}, "background")} />
                </View>
            </View>


            {children}

        </View>
    )
}

