import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetTrack(artistId:number,albumId:number,trackId:number)
{        
    let data = await axios.get<TrackResponse>(ApiRoutes.Track(artistId,albumId,trackId));
    let response = data.data;
    response.result.id_artist=artistId;
    response.result.id_album=albumId;
    return response;
}