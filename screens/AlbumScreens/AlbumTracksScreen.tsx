import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { GetTracksService } from '../../services/GetTracksService';
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import ThemedCard from '../../components/ThemedCard'
import { FlatList } from 'react-native-gesture-handler'
import { SaveRecentTracksService } from '../../services/SaveRecentTracksService';

export default function ArtistTracksScreen(props: {
    //still within artist stack so ArtistParamList is needed
    navigation: StackNavigationProp<AlbumParamList, "AlbumTracksScreen">,
    route: RouteProp<AlbumParamList, "AlbumTracksScreen">
}) {
    const [tracks, setTracks] = useState<Track[]>([]);

    //this will navigate us to tracks that are related to this album /artits
    const goToLyrics = (artistId: number, albumId: number, trackId: number, artist: string, album: string, track: string) => {
        SaveRecentTracksService({ artistId: artistId, albumId: albumId, trackId: trackId });
        props.navigation.navigate("AlbumLyricsScreen", {
            artistId: artistId,
            albumId: albumId,
            trackId: trackId,
            artist: artist,
            album: album,
            track: track
        });

    }
    const styles = StyleSheet.create({})

    const getTracks = async (artistId: number, albumId: number) => {
        let response = await GetTracksService(artistId, albumId);

        if (response.success) {
            setTracks(response.result.tracks);

        }

    }
    useEffect(() => {
        getTracks(props.route.params.artistId, props.route.params.albumId);
        return () => {
        }
    }, [])
    return (
        <DeffaultLayout title={[props.route.params.album, 'for the Artist', props.route.params.artist]
        }>

            <FlatList

                data={tracks}
                keyExtractor={track => `${track.id_track}`}
                renderItem={({ item }) => {
                    return <ThemedCard texts={[item.track]} icon={'ios-headset'} onPress={() => {
                        goToLyrics(
                            props.route.params.artistId,
                            props.route.params.albumId,
                            item.id_track,
                            item.track,
                            props.route.params.album,
                            props.route.params.artist)
                    }} />
                }

                } />


        </DeffaultLayout>


    )
}


