import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { GetTracksService } from '../../services/GetTracksService'
import { GetLyricsService } from '../../services/GetLyricsService'
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import { ScrollView } from 'react-native-gesture-handler'

export default function ArtistLyricsScreen(props: {
    //still within artist stack so ArtistParamList is needed
    navigation: StackNavigationProp<ArtistParamList, "ArtistLyricsScreen">,
    route: RouteProp<ArtistParamList, "ArtistLyricsScreen">
}) {
    const [lyrics, setLyrics] = useState<string>();


    const getLyrics = async (artistId: number, albumId: number, trackId: number) => {
        let response = await GetLyricsService(artistId, albumId, trackId);

        if (response.success) {
            setLyrics(response.result.Lyrics);

        }


    }
    useEffect(() => {
        getLyrics(props.route.params.artistId, props.route.params.albumId, props.route.params.trackId);

        return () => {
        }
    }, [])
    return (
        <DeffaultLayout
            title={[props.route.params.track
                ,props.route.params.album, props.route.params.artist]}  >

            <ScrollView>
                <Text>
                    {lyrics?lyrics:"NO LYRICS"}
                    sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf sdlkafj asdkljf klasdjf klasjdf laksdjf klasjdf 
                </Text>
            </ScrollView>


        </DeffaultLayout>
    )
}

const styles = StyleSheet.create({})
