type ArtistParamList = {
    ArtistsScreen : undefined;
    ArtistAlbumsScreen : {
        artistId:number;
        artist:string;
        instagram:string;
    }
    ArtistTracksScreen : {
        artist:string;
        album:string;
        artistId:number;
        albumId:number;
      
    }
    ArtistLyricsScreen : {
        artistId:number;
        albumId:number;
        trackId:number;
        artist:string;
        album:string;
        track:string;
    
    }
}