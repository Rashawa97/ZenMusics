import axios from 'axios';
import {
    GetTrackWithLyricsService
} from './GetTrackWithLyricsService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getLyrics', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('getTrack', () => {
        it('httpClient is called as expected', () => {
            GetTrackWithLyricsService(1,2,3);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Track(1,2,3));
        });
    });
 
    // describe('getTrackWithLyrics', () => {
    //     it('httpClient is called as expected', () => {
    //         GetTrackWithLyricsService(7777,922858,13142197);
    //         expect(axios.get).toHaveBeenCalledWith(`https://api.happi.dev/v1/music/artists/7777/albums/922858/tracks/13142197?apikey=3cc514MGx0dtfUuPDrwW6k8WNzbVQfT6FwzLPu54Ib0YI6PrAf72VJT1`);
    //         expect(axios.get).toHaveBeenCalledWith(`https://api.happi.dev/v1/music/artists/7777/albums/922858/tracks/13142197/lyrics?apikey=3cc514MGx0dtfUuPDrwW6k8WNzbVQfT6FwzLPu54Ib0YI6PrAf72VJT1`);
    //     });
    // });

});