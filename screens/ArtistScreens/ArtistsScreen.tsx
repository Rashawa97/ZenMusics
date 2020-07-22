import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../../services/GetArtistsPageService'
import ArtistComponent from '../../components/Artists/ArtistComponent'
import PaginationLayout from '../../components/Layouts/PaginationLayout'

export default function ArtistsScreen(props:
    {
        navigation: StackNavigationProp<ArtistParamList, "ArtistsScreen">
    }) {


    const [artists, setArtists] = useState<Artist[]>([]);
    const [lastPage, setLastPage] = useState<number>(0);



    const goToAlbums = (artistId: number,artist:string) => {
        props.navigation.navigate("ArtistAlbumsScreen", { artistId: artistId ,artist:artist});
    }
    //if first page ==1 then privious button must be disabled
    //if Last page page ==total number of pages then next button must be disabled
    const getArtists = async (pageNumber: number) => {
        let response = await GetArtistsPageService(pageNumber);

        if (response.success) {
            setArtists(response.result);
            setLastPage(response.pages)
        }

    }

    useEffect(() => {
        getArtists(1);
        return () => {
        }
    }, [])

    return (
        <PaginationLayout onPageChange={getArtists} lastPage={lastPage}>
            <FlatList

                data={artists}
                keyExtractor={artist => `${artist.id_artist}`}
                renderItem={({ item }) => (
                    <ArtistComponent artist={item} onPress={()=>{goToAlbums(item.id_artist,item.artist)}} />

                )} />
        </PaginationLayout>



    )
}

