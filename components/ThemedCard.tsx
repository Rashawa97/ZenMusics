import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Text, useThemeColor } from './Themed'
import { Ionicons } from '@expo/vector-icons';

export default function ThemedCard(props: { texts: string[], icon: string, onPress: () => void }) {
    let { texts, icon, onPress } = props;
    const [pressed, setPressed] = useState(false);

    const styles = StyleSheet.create({

        container: {
            borderColor: useThemeColor({}, "accentColor"),
            borderStyle: "solid",
            borderWidth: 0.5,
            padding: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: pressed ? useThemeColor({}, "accentColor") : useThemeColor({}, "background"),
        },
        text: {
            color: pressed ? useThemeColor({}, "background") : useThemeColor({}, "text"),
       
        },
        name: {
            flex:5,


        },
        icon: { 
            flex:1,
            margin: 10 ,
            alignItems:"center"
        }

    })

    const changeColor = () => {
        setPressed(true);
    }

    const revertColor = () => {
        setPressed(false)
    }

    return (
        <TouchableWithoutFeedback onPressIn={changeColor} onPressOut={revertColor} onPress={onPress}>
            <View style={styles.container} >

                <View style={styles.name} >
                    {texts.map(text => (

                        <Text key={text} style={styles.text}>
                            {text}
                        </Text>
                    ))}
                </View>
                <View style={styles.icon}>
                    <Ionicons name={icon} size={24} color={pressed ? useThemeColor({}, "background") : useThemeColor({}, "accentColor")} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


