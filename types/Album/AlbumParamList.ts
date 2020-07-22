type AlbumParamList = {
    AlbumsScreen : undefined;

    AlbumTracksScreen : {
        artistId:number;
        albumId:number;
        album:string;
        artist:string;
    }
    AlbumLyricsScreen : {
        artistId:number;
        albumId:number;
        trackId:number;
        artist:string;
        album:string;
        track:string;
    }
}