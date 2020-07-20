import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetTracksService(artistId:number,albumId:number)
{
    let data = await axios.get<TracksResponse>(ApiRoutes.Tracks(artistId,albumId));
    return data.data;
}