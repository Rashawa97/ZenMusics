import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetLyricsService(artistId:number,albumId:number,trackId:number)
{        
    let lyricsData = await axios.get<TrackResponse>(ApiRoutes.Lyrics(artistId,albumId,trackId));
    return  lyricsData.data;
}