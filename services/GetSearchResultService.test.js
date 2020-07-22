import axios from 'axios';
import {
    GetSearchResultService
} from './GetSearchResultService';
import ApiRoutes from '../constants/ApiRoutes';

// Tests
describe('getLyrics', () => {
    beforeEach(() => {
        axios.get = jest.fn();
    })

    describe('GetSearchResultService', () => {
        it('httpClient is called as expected', () => {
            GetSearchResultService("Ameritz Karaoke Crew","artist");
            expect(axios.get).toHaveBeenCalledWith(ApiRoutes.Search("Ameritz Karaoke Crew","artist"));
        });
    });

});