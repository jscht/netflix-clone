import { useEffect, useState } from "react";
import { homeApi } from "../../api";
import HomePresenter from "./HomePresenter"

function HomeContainer() {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [movieDetail, setMovieDetail] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function componentDidMount() {
        try {
            const {
                data: { results },
            } = await homeApi.nowPlaying();
            let movieArray = [];

            for (let i=0; i<1; i++) {
                movieArray.push(results.map((result) => result.id));
            }
            console.log(movieArray)
            const movieId = movieArray[0][Math.floor(Math.random() * movieArray[0].length)];
            const { data: movieDetail } = await homeApi.movieDetail(movieId);

            if (movieDetail.videos.results.length === 0) {
               const { data: movieDetail } = await homeApi.movieDetail(497698);
               setMovieDetail(movieDetail);
               return;
            }

            setMovieDetail(movieDetail)

        } catch (error) {
            console.log(error)
            setError("Can't find Home Video.");
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        componentDidMount();
    }, []);
    
    // https://ko.reactjs.org/docs/jsx-in-depth.html
    // 속성 펼치기(...children) 확인하기

    // https://developers.themoviedb.org/3/getting-started/introduction
    // api 확인하기

    return (
        <HomePresenter 
            movieDetail = {movieDetail}
            error = {error}
            loading = {loading}
        />
    )
}

export default HomeContainer;