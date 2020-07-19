const BASE_URI:string = 'https://api.happi.dev/v1/music';
const API_KEY:string = '3cc514MGx0dtfUuPDrwW6k8WNzbVQfT6FwzLPu54Ib0YI6PrAf72VJT1';

export default {
  AllArtists: (pageNumber: number):string =>
    `${BASE_URI}/artists?page=${pageNumber}&apikey=${API_KEY}`,
  Artist: (artistId: number):string =>
    `${BASE_URI}/artists/${artistId}?apikey=${API_KEY}`,

  Albums: (artistId: number):string =>
    `${BASE_URI}/artists/${artistId}/albums?apikey=${API_KEY}`,
  Album: (artistId: number, albumId: number):string =>
    `${BASE_URI}/artists/${artistId}/albums/${albumId}?apikey=${API_KEY}`,

  Tracks: (artistId: number, albumId: number):string =>
    `${BASE_URI}/artists/${artistId}/albums/${albumId}/tracks?apikey=${API_KEY}`,
  Track: (artistId: number, albumId: number, trackId: number):string =>
    `${BASE_URI}/artists/${artistId}/albums/${albumId}/tracks/${trackId}?apikey=${API_KEY}`,

  Lyrics: (artistId: number, albumId: number, trackId: number):string =>
    `${BASE_URI}/artists/${artistId}/albums/${albumId}/tracks/${trackId}/lyrics?apikey=${API_KEY}`,

  Search: (query: string, type: string):string =>
    `${BASE_URI}?q=${query}&limit=&apikey=${API_KEY}&type=${type}`,
};