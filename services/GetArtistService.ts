import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetArtistService(artistId:number)
{
    let data = await axios.get<ArtistResponse>(ApiRoutes.Artist(artistId));
    return data.data;
}