import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetLyricsService(artistId:number,albumId:number,trackId:number)
{    
   

    let data = await axios.get<TrackResponse>(ApiRoutes.Track(artistId,albumId,trackId));
    if(data.data.success && data.data.result.hasLyrics){

        let lyricsData = await axios.get<TrackResponse>(ApiRoutes.Lyrics(artistId,albumId,trackId));
        return  lyricsData.data;
    }
    return data.data;
}