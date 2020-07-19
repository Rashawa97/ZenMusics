import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Text, useThemeColor } from '../Themed'
import { Ionicons } from '@expo/vector-icons';

export default function ArtistComponent(props: { artist: Artist, onPress: (artistId: number) => void }) {
    let { artist, onPress } = props;
    const [pressed, setPressed] = useState(false);

    const styles = StyleSheet.create({

        container: {
            borderColor: useThemeColor({}, "accentColor"),
            borderStyle: "solid",
            borderWidth: 0.5,
            padding: 15,
            margin: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: pressed ? useThemeColor({}, "accentColor") : useThemeColor({}, "background"),
        },
        text: {
            color: pressed ? useThemeColor({}, "background") : useThemeColor({}, "text"),
        }

    })

    const changeColor = () => {
        setPressed(true);
    }

    const revertColor = () => {
        setPressed(false)
    }

    return (
        <TouchableWithoutFeedback onPressIn={changeColor} onPressOut={revertColor} onPress={() => onPress(artist.id_artist)}>
            <View style={styles.container} >

                <View >
                    <Text style={styles.text}>
                        {artist.artist}
                    </Text>
                </View>
                <View >
                    <Ionicons name="ios-headset" size={24} color={pressed ? useThemeColor({}, "background") : useThemeColor({}, "accentColor")} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


