import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View, Text, useThemeColor } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../../services/GetArtistsPageService'
import ArtistComponent from '../../components/Artists/ArtistComponent'
import ThemedButton from '../../components/ThemedButton'

export default function ArtistsScreen(props:
    {
        navigation: StackNavigationProp<ArtistParamList, "ArtistsScreen">
    }) {

    const styles = StyleSheet.create({
        navigationButtonsContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
            alignItems: "center",
        
            //backgroundColor: useThemeColor({},"mainColor")
        }
    })


    const [pageNumber, setPageNumber] = useState<number>(1);
    const [artists, setArtists] = useState<Artist[]>([]);
    const [lastPage, setLastPage] = useState<number>(0);



    const goToAlbums = (artistId: number) => {
        props.navigation.navigate("ArtistAlbumsScreen", { artistId: artistId });
    }
    //if first page ==1 then privious button must be disabled
    //if Last page page ==total number of pages then next button must be disabled
    const getArtists = async (pageNumber: number) => {
        let response = await GetArtistsPageService(pageNumber);

        if (response.success) {
            setArtists(response.result);
            setLastPage(response.pages)
        }
        setPageNumber(pageNumber);

    }

    useEffect(() => {
        getArtists(1);
        return () => {
        }
    }, [])

    return (
        <View>
          
            <View style={styles.navigationButtonsContainer}>
                <ThemedButton title="previous" onPress={() => getArtists(pageNumber - 1)} disabled={pageNumber == 1} />
                <Text>{pageNumber}/{lastPage}</Text>
                <ThemedButton title="next" onPress={() => getArtists(pageNumber + 1)} disabled={pageNumber == lastPage} />


            </View>

            <FlatList

                data={artists}
                keyExtractor={artist => `${artist.id_artist}`}
                renderItem={({ item }) => (
                    <ArtistComponent artist={item} onPress={goToAlbums} />

                )} />

        </View>
    )
}

