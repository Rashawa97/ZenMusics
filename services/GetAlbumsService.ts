import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetAlbumsService(artistId:number)
{
    let data = await axios.get<AlbumsResponse>(ApiRoutes.Albums(artistId));
    return data.data;
}