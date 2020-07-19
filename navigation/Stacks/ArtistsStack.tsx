import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ArtistsScreen from '../../screens/ArtistScreens/ArtistsScreen';
import ArtistAlbumsScreen from '../../screens/ArtistScreens/ArtistAlbumsScreen';
import ArtistTracksScreen from '../../screens/ArtistScreens/ArtistTracksScreen';


const ArtistsTab = createStackNavigator<ArtistParamList>();

export default function ArtistsStack() {
   
    return (
        <ArtistsTab.Navigator>
            <ArtistsTab.Screen
                name="ArtistsScreen"
                component={ArtistsScreen}
                options={{ headerTitle: 'Artists' }}
            />
            <ArtistsTab.Screen
                name="ArtistAlbumsScreen"
                component={ArtistAlbumsScreen}
                options={{ headerTitle: 'Albums' }}
            />
            <ArtistsTab.Screen
                name="ArtistTracksScreen"
                component={ArtistTracksScreen}
                options={{ headerTitle: 'Tracks' }}
            />
            <ArtistsTab.Screen
                name="ArtistLyricsScreen"
                component={ArtistTracksScreen}
                options={{ headerTitle: 'Lyrics' }}
            />
        </ArtistsTab.Navigator>
    );

}

const styles = StyleSheet.create({})
