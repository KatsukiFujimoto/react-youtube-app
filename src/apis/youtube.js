import axios from 'axios';

const KEY = 'AIzaSyAFWYih7S9rRhtA-RUcsVRNJzhsiKoXezQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});