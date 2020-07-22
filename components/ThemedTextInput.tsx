import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View, useThemeColor } from './Themed'
import { FontSizes } from '../constants/FontSizes';

export default function ThemedTextInput(props: { value: string, placeHolder?: string, onValueChanged: (value: string) => void }) {
    let { value, placeHolder, onValueChanged } = props;


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 5,
            margin: 5,
        },
        text:{
            fontSize:FontSizes.large
        }
    })

    return (
        <View style={styles.container}>
            <TextInput style={styles.text} value={value} placeholder={placeHolder} onChangeText={onValueChanged} />
        </View>
    )
}

