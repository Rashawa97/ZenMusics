import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { GetTrackWithLyricsService } from '../../services/GetTrackWithLyricsService'
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import ThemedNoLyrics from '../../components/ThemedNoLyrics'
import ThemedLyrics from '../../components/ThemedLyrics'

export default function LyricsScreen(props: {
    //still within artist stack so ArtistParamList is needed
    navigation: StackNavigationProp<TrackParamList, "LyricsScreen">,
    route: RouteProp<TrackParamList, "LyricsScreen">
}) {
    const [lyrics, setLyrics] = useState<string>();
    // 
    const getLyrics = async (artistId: number, albumId: number, trackId: number) => {
        let response = await GetTrackWithLyricsService(artistId, albumId, trackId);
        if (response.success) {
            setLyrics(response.result.lyrics);
        }
    }
    useEffect(() => {
        getLyrics(props.route.params.artistId, props.route.params.albumId, props.route.params.trackId);

        return () => {
        }
    }, [])

    if (lyrics) {

        return (
            <DeffaultLayout
                title={[props.route.params.track
                    , props.route.params.album, props.route.params.artist]}  >
                <ThemedLyrics lyrics={lyrics} />
            </DeffaultLayout>
        )
    } else {
        return (

            <DeffaultLayout
                title={[props.route.params.track
                    , props.route.params.album, props.route.params.artist]}  >
                <ThemedNoLyrics />
            </DeffaultLayout>
        )
    }
}



const styles = StyleSheet.create({})
