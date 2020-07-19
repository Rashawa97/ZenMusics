import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, useThemeColor } from './Themed'
import { Foundation } from '@expo/vector-icons'; 
export default function ThemedButton(props: { title: string, onPress: () => void, disabled?: boolean }) {
    let { title, onPress, disabled } = props;
    const styles = StyleSheet.create({
  
        icon:{
            color:!!disabled?useThemeColor({},"tabIconDefault"):useThemeColor({},"accentColor"),
        },

    })

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} >
            <View >
            <Foundation name={title} size={40} style={styles.icon} />
            </View>
        </TouchableOpacity>
    )
}

