import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../../components/Themed'
import { createStackNavigator } from '@react-navigation/stack';
import ArtistsScreen from '../../screens/ArtistScreens/ArtistsScreen';
import ArtistAlbumsScreen from '../../screens/ArtistScreens/ArtistAlbumsScreen';
import ArtistTracksScreen from '../../screens/ArtistScreens/ArtistTracksScreen';
import ArtistLyricsScreen from '../../screens/ArtistScreens/ArtistLyricsScreen';
import IconButton from '../../components/IconButton';
import { navigate } from '../../hooks/navigate';


const ArtistsTab = createStackNavigator<ArtistParamList>();

export default function ArtistsStack() {

    return (
        <ArtistsTab.Navigator>
            <ArtistsTab.Screen
                name="ArtistsScreen"
                component={ArtistsScreen}
                options={{
                    headerTitle: 'Artists', 
                    headerRight:
                        (props) =>
                            (<IconButton icon={'ios-search'} onPress={() => navigate("SearchScreen", { type: "artist" })} />),
                }}
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
                component={ArtistLyricsScreen}
                options={{ headerTitle: 'Lyrics' }}
            />
        </ArtistsTab.Navigator>
    );

}

const styles = StyleSheet.create({

})
