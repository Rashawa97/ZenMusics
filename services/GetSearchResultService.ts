import axios from 'axios'
import ApiRoutes from '../constants/ApiRoutes'

export async function GetSearchResultService(query: string, type: SearchType) {
    let data = await axios.get<SearchResultResponse>(ApiRoutes.Search(query, type));
    return data.data;
}