import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TracksScreen from '../../screens/TrackScreens/TracksScreen';
import LyricsScreen from '../../screens/TrackScreens/TracksScreen';


const TracksTab = createStackNavigator<TrackParamList>();

export default function TracksStack() {
   
    return (
        <TracksTab.Navigator>
            <TracksTab.Screen
                name="TracksScreen"
                component={TracksScreen}
                options={{ headerTitle: 'Recent Tracks' }}
            />
            <TracksTab.Screen
                name="LyricsScreen"
                component={LyricsScreen}
                options={{ headerTitle: 'Lyrics' }}
            />
        </TracksTab.Navigator>
    );

}

const styles = StyleSheet.create({})
