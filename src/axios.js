import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/550',
   
    params: {
        "api_key": "cb3cb19c5abc56e58cee53f0a43e3e7d"
    }
});

export default instance;