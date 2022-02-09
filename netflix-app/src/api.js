import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "ebc546a5385a51e85ad159f8ad682e6b",
        language: "ko-KR",
    },
});

export const homeApi = {
    nowPlaying: async() => await api.get("movie/now_playing"),
    movieDetail: async(id) => await api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos",
        }
    }),
};

export const moviesApi = {

};

export const tvApi = {

};

export default api;