import axios from 'axios';
import {
    GetAlbum
} from './GetAlbum';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getAlbum', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('getAlbum', () => {
        it('httpClient is called as expected', () => {
            GetAlbum(1,2);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Album(1,2));
        });
    });

});