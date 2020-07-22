import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { GetRecentAlbumsService } from '../../services/GetRecentAlbumsService'
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import ThemedCard from '../../components/ThemedCard'
import { SaveRecentAlbumsService } from '../../services/SaveRecentAlbumsService'

export default function AlbumsScreenprops(props: {
    //still within artist stack so ArtistParamList is needed
    navigation: StackNavigationProp<AlbumParamList, "AlbumsScreen">,
    route: RouteProp<AlbumParamList, "AlbumsScreen">
}) {
    const [albums, setAlbums] = useState<AlbumResponse[]>();
    const goToTracks = (artistId: number=1, albumId: number,album:string,artist:string="" ) => {
        SaveRecentAlbumsService({albumId:albumId,artistId:artistId });
        props.navigation.navigate("AlbumTracksScreen", { artistId: artistId, albumId: albumId,album:album,artist:artist });

    }
    const getAlbums = async () => {
        var data = await GetRecentAlbumsService();
        setAlbums(data);
    }
    useEffect(() => {
        getAlbums()
        return () => {
        }
    }, [])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // The screen is focused
          // Call any action
          getAlbums();
    
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [props.navigation]);

    return (
        <DeffaultLayout
            title={['Recent Albums'
            ]}  >
            <FlatList

                data={albums}
                keyExtractor={albums => `${albums.result.id_album}`}
                renderItem={({ item }) => (
                    <ThemedCard texts={[item.result.album]}
                        icon={'ios-albums'} onPress={() => {
                            goToTracks(item.result.id_artist,item.result.id_album,item.result.album,item.result.artist)
                        }} />

                )} />



        </DeffaultLayout>
    )
}

const styles = StyleSheet.create({})
