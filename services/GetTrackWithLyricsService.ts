import axios from 'axios'
import ApiRoutes from '../constants/ApiRoutes'
import { GetLyricsService } from './GetLyricsService';

export async function GetTrackWithLyricsService(artistId: number, albumId: number, trackId: number) {


    let data = await axios.get<TrackResponse>(ApiRoutes.Track(artistId, albumId, trackId));
    
    if (data.data.success && data.data.result.haslyrics) {
        let lyricsData =  await GetLyricsService(artistId, albumId, trackId);
        return lyricsData;
    }
    return data.data;
}