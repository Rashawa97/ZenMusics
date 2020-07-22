import axios from 'axios';
import {
    GetArtistsPageService
} from './GetArtistsPageService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getArtists', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('getArtists', () => {
        it('httpClient is called as expected', () => {
            GetArtistsPageService();
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.AllArtists());
        });
    });

});