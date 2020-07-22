import { AsyncStorage } from "react-native";
import { GetTrack } from "./GetTrack";

const TRACKS = "TRACKS";

export async function GetRecentTracksService() {
    // Get the value from the storage
    let recentTracksString = await AsyncStorage.getItem(TRACKS);
    let recentTracks: TrackRecord[] = [];
    let TrackResponse: TrackResponse[] = [];
    if (recentTracksString) {
        recentTracks = await JSON.parse(recentTracksString);
    }
    for (let i = 0; i < recentTracks.length; i++) {
        
        TrackResponse.push(await GetTrack(recentTracks[i].artistId, recentTracks[i].albumId, recentTracks[i].trackId));
    }
    return TrackResponse;
}