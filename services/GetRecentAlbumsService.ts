import { AsyncStorage } from "react-native";
import { GetAlbum } from "./GetAlbum";

const ALBUM = "ALBUM";

export async function GetRecentAlbumsService() {
    // Get the value from the storage
    let recentAlbumsString = await AsyncStorage.getItem(ALBUM);
    let recentAlbums: AlbumRecord[] = [];
    let albumResponse: AlbumResponse[] = [];
    if (recentAlbumsString) {
        recentAlbums = await JSON.parse(recentAlbumsString);
    }
    for (let i = 0; i < recentAlbums.length; i++) {
        albumResponse.push(await GetAlbum(recentAlbums[i].artistId, recentAlbums[i].albumId));
    }
    return albumResponse;
}