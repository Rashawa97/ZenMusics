import { AsyncStorage } from "react-native";

const ALBUM = "ALBUM";
const MAX_RECENT_ALBUMS = 10;

export async function SaveRecentAlbumsService(album:AlbumRecord)
{
    
    // Get the value from the storage
    let recentAlbumsString = await AsyncStorage.getItem(ALBUM);
    let recentAlbums : AlbumRecord[]=[];
    if(recentAlbumsString)
    {
        recentAlbums = await JSON.parse(recentAlbumsString);
    }

    let index:number = recentAlbums.findIndex((record:AlbumRecord)=>record.albumId==album.albumId);
    if(index!=-1)
    {
        recentAlbums.splice(index,1);
    }

    if(recentAlbums.length>=MAX_RECENT_ALBUMS)
    {
        recentAlbums.splice(0,1);
    }

    recentAlbums.push(album);

    let newRecentAlbumsString = await JSON.stringify(recentAlbums);

    await AsyncStorage.setItem(ALBUM,newRecentAlbumsString);


}