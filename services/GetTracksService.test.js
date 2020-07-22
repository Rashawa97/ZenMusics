import axios from 'axios';
import {
    GetTracksService
} from './GetTracksService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('GetTracksService', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('GetTracksService', () => {
        it('httpClient is called as expected', () => {
            GetTracksService(1,2);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Tracks(1,2));
        });
    });

});