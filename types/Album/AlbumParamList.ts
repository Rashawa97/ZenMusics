type AlbumParamList = {
    AlbumsScreen : undefined;

    AlbumTracksScreen : {
        artistId:number;
        albumId:number;
    }
    AlbumLyricsScreen : {
        artistId:number;
        albumId:number;
        trackId:number;
    }
}