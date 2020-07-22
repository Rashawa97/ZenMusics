import axios from 'axios';
import {
    GetTrack
} from './GetTrack';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('GetTrack', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('GetTrack', () => {
        it('httpClient is called as expected', () => {
            GetTrack(1,2);
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Track(1,2));
        });
    });

});