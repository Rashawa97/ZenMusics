import axios from 'axios';
import {
    GetAlbumsService
} from './GetAlbumsService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getAlbums', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('getAlbums', () => {
        it('httpClient is called as expected', () => {
            GetAlbumsService(1);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Albums(1));
        });
    });

});