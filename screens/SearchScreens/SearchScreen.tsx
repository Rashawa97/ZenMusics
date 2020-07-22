import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import { TextInput } from 'react-native-gesture-handler'
import IconButton from '../../components/IconButton'
import { GetSearchResultService } from '../../services/GetSearchResultService'
import ThemedCard from '../../components/ThemedCard'
import SearchComponent from '../../components/SearchComponent'
import { SaveRecentTracksService } from '../../services/SaveRecentTracksService'
import { useThemeColor } from '../../components/Themed'

export default function SearchScreen(props: {
    navigation: CompositeNavigationProp<
        CompositeNavigationProp<StackNavigationProp<ArtistParamList>, StackNavigationProp<AlbumParamList>>,
        StackNavigationProp<TrackParamList>
    >,
    route: RouteProp<RootStackParamList, "SearchScreen">
}) {

    const [results, setResults] = useState<SearchResult[]>([]);

    const search = async (query: string) => {
        let data = await GetSearchResultService(query, props.route.params.type)
        if (data.success) {
            setResults(data.result)
        }
    }

    const hundleCardPressing = (item: SearchResult) => {
        if (props.route.params.type == "artist") {
            props.navigation.navigate("ArtistAlbumsScreen", {
                artist: item.artist ?? "",
                artistId: item.id_artist ?? 0
            });
        } else {
            SaveRecentTracksService({ trackId: item.id_track ?? 1, albumId: item.id_album ?? 1, artistId: item.id_artist ?? 1 });
            props.navigation.navigate("LyricsScreen", {
                artist: item.artist ?? "",
                artistId: item.id_artist ?? 0,
                album: item.album ?? "",
                albumId: item.id_album ?? 0,
                track: item.track ?? "",
                trackId: item.id_track ?? 0
            });
        }
    }

    return (
        <DefaultLayout title={[`search ${props.route.params.type}s`]}>
            <View style={styles.floating}>
                <IconButton icon="ios-close" color={useThemeColor({},"background")} onPress={() => props.navigation.goBack()} />
            </View>
            <SearchComponent onPress={search} />
            <FlatList

                data={results}
                keyExtractor={(result: SearchResult) => `${result.id_track}${result.id_artist}`}
                renderItem={(p: { item: SearchResult }) => {
                    let { item } = p;
                    let texts: string[] = [];
                    if (props.route.params.type == "track") {
                        texts.push(item.track ?? "");
                        texts.push(item.album ?? "");
                    }
                    texts.push(item.artist ?? "");
                    return <ThemedCard
                        texts={texts}
                        icon={props.route.params.type == "artist" ? 'ios-headset' : "md-mic"}
                        onPress={() => hundleCardPressing(item)} />
                }

                } />

        </DefaultLayout>
    )
}

const styles = StyleSheet.create({
    floating:{
        marginTop:-180,
        height:20,
        marginBottom:160,
    }
})
