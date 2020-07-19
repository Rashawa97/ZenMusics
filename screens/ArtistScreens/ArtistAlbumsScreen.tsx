import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export default function ArtistAlbumsScreen(props:{
    navigation:StackNavigationProp<ArtistParamList,"ArtistAlbumsScreen">,
    route:RouteProp<ArtistParamList,"ArtistAlbumsScreen">
}) {
    //props.route.params.artistId;
    
    return (
        <View>
            <Text>ArtistAlbumsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
