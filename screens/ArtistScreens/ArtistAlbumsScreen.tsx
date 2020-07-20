import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { GetAlbumsService } from '../../services/GetAlbumsService'
import DeffaultLayout from '../../components/Layouts/DefaultLayout'
import ThemedCard from '../../components/ThemedCard'
import { FlatList } from 'react-native-gesture-handler'
import { SaveRecentAlbumsService } from '../../services/SaveRecentAlbumsService'
export default function ArtistAlbumsScreen(props: {
    navigation: StackNavigationProp<ArtistParamList, "ArtistAlbumsScreen">,
    route: RouteProp<ArtistParamList, "ArtistAlbumsScreen">
}) {
    const styles = StyleSheet.create({})

    const [albums, setAlbums] = useState<Album[]>([]);
    //this will navigate us to tracks that are related to this album /artits
    const goToTracks = (artistId: number, albumId: number,album:string,artist:string ) => {
        SaveRecentAlbumsService({albumId:albumId,artistId:artistId });
        props.navigation.navigate("ArtistTracksScreen", { artistId: artistId, albumId: albumId,album:album,artist:artist });

    }
    const getAlbums = async (artistId: number) => {
        let response = await GetAlbumsService(artistId);

        if (response.success) {
            setAlbums(response.result.albums);

        }

    }

    useEffect(() => {
        getAlbums(props.route.params.artistId);
        return () => {
        }
    }, [])

    return (
        <DeffaultLayout title={[props.route.params.artist+ ' Albums',props.route.params.instagram+'insta']}>
            <FlatList

            data={albums}
            keyExtractor={album => `${album.id_album}`}
            renderItem={({ item }) => (
                <ThemedCard texts={[item.album]} 
                icon={'ios-albums'}onPress={()=>{
                    goToTracks(props.route.params.artistId,
                        item.id_album,
                        props.route.params.artist,
                        item.album)}} />

            )} />
        </DeffaultLayout> 
      
    )
}


