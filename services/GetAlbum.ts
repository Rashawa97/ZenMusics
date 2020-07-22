import axios from  'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetAlbum(artistId:number,albumId:number)
{    
    let data = await axios.get<AlbumResponse>(ApiRoutes.Album(artistId,albumId));
    return data.data;
}