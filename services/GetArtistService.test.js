import axios from 'axios';
import {
    GetArtistService
} from './GetArtistService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getArtist', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('getArtist', () => {
        it('httpClient is called as expected', () => {
            GetArtistService(1);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Artist(1));
        });
    });

});