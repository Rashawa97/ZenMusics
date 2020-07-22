import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { SaveRecentTracksService } from '../../services/SaveRecentTracksService'
import { GetRecentTracksService } from '../../services/GetRecentTracksService'
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import ThemedCard from '../../components/ThemedCard'

export default function TracksScreen(props: {
    //still within artist stack so ArtistParamList is needed
    navigation: StackNavigationProp<TrackParamList, "TracksScreen">,
    route: RouteProp<TrackParamList, "TracksScreen">
}) {
    const [tracks, setTracks] = useState<TrackResponse[]>([]);
    const goToLyrics = (artistId: number = 1, albumId: number = 1, trackId: number = 1, artist: string = "", album: string = "", track: string) => {
        props.navigation.navigate("LyricsScreen", {
            artistId: artistId,
            albumId: albumId,
            trackId: trackId,
            artist: artist,
            album: album,
            track: track
        });

    }
    const getTracks = async () => {
        var data = await GetRecentTracksService();
        setTracks(data);
    }
    useEffect(() => {

        getTracks()
        return () => {
        }
    }, [])


    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            getTracks();

        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [props.navigation]);
    return (
        <DeffaultLayout
            title={['Recent Tracks'
            ]}  >
            <FlatList

                data={tracks}
                keyExtractor={tracks => `${tracks.result.id_track}`}
                renderItem={({ item }) => (
                    <ThemedCard texts={[item.result.track]}
                        icon={'ios-headset'} onPress={() => {
                            
                            goToLyrics(item.result.id_artist,
                                item.result.id_album, item.result.id_track,
                                item.result.artist, item.result.album, item.result.track)
                        }} />

                )} />



        </DeffaultLayout>
    )
}

const styles = StyleSheet.create({})
