import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, useThemeColor, ViewProps } from './Themed'
import { Foundation, Ionicons } from '@expo/vector-icons';
import { FontSizes } from '../constants/FontSizes';
export default function IconButton(props: { icon: string, color?:string, onPress: () => void }) {
    let { icon,color,  onPress } = props;
    const styles = StyleSheet.create({

        icon: {
            margin: 20,
        }

    })

    return (

        <Ionicons name={icon} style={styles.icon} size={FontSizes.xLarge * 1.5} onPress={onPress} color={color??useThemeColor({}, "accentColor")} />


    )
}

