import { AsyncStorage } from "react-native";

const TRACKS = "TRACKS";
const MAX_RECENT_TRACKS = 20;

export async function SaveRecentTracksService(track:TrackRecord)
{
    // Get the value from the storage
    let recentString = await AsyncStorage.getItem(TRACKS);
    let recentTracks : TrackRecord[]=[];
    if(recentString)
    {
        recentTracks = await JSON.parse(recentString);
    }

    let index:number = recentTracks.findIndex((record:TrackRecord)=>record.trackId==track.trackId);
    if(index!=-1)
    {
        recentTracks.splice(index,1);
    }

    if(recentTracks.length>=MAX_RECENT_TRACKS)
    {
        recentTracks.splice(1,1);
    }

    recentTracks.push(track);

    let newRecentTracksString = await JSON.stringify(recentTracks);

    await AsyncStorage.setItem(TRACKS,newRecentTracksString);

}