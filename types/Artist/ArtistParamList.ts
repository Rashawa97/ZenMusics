type ArtistParamList = {
    ArtistsScreen : undefined;
    ArtistAlbumsScreen : {
        artistId:number;
    }
    ArtistTracksScreen : {
        artistId:number;
        albumId:number;
    }
    ArtistLyricsScreen : {
        artistId:number;
        albumId:number;
        trackId:number;
    }
}