import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AlbumsScreen from '../../screens/AlbumScreens/AlbumsScreen';
import AlbumTracksScreen from '../../screens/AlbumScreens/AlbumTracksScreen';
import IconButton from '../../components/IconButton';
import { navigate } from '../../hooks/navigate';
import AlbumLyricsScreen from '../../screens/AlbumScreens/AlbumLyricsScreen';


const AlbumsTab = createStackNavigator<AlbumParamList>();

export default function ArtistsStack() {
   


    return (
        <AlbumsTab.Navigator>
            <AlbumsTab.Screen
                name="AlbumsScreen"
                component={AlbumsScreen}
                options={{ headerTitle: 'Recent Albums' ,  headerRight:
                (props) =>
                    (<IconButton icon={'ios-search'} onPress={() => navigate("SearchScreen", { type: "track" })} />),
            
            }}
            />
            <AlbumsTab.Screen
                name="AlbumTracksScreen"
                component={AlbumTracksScreen}
                options={{ headerTitle: 'Tracks' }}
            />
            <AlbumsTab.Screen
                name="AlbumLyricsScreen"
                component={AlbumLyricsScreen}
                options={{ headerTitle: 'Lyrics' }}
            />
        </AlbumsTab.Navigator>
    );

}

const styles = StyleSheet.create({})
