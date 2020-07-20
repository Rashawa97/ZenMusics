type AlbumsResponse = {
    success: boolean;
    result: {
        artist:string;
        id_artist:number;
        albums:Album[] ;
    }
}