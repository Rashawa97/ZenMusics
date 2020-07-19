import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetArtistsPageService(pageNumber:number)
{
    let data = await axios.get<ArtistsPageResponse>(ApiRoutes.AllArtists(pageNumber));
    return data.data;
}