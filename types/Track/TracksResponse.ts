type TracksResponse = {
    success: boolean;
    result: {
        artist:string;
        id_artist:number;
        id_album:number;
        tracks:Track[] ;
        album:string ;
    }
}