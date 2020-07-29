import Api from "../data/api.config.js";
import "../components/movie-list.js";
import "../components/movie-detail.js";

function main() {
    /* select element */
    const movieListElement = document.querySelectorAll("movie-list");
    const movieDetailELement = document.querySelector("movie-detail");

    /* get popular movie from api */
    const getPopularMovie = () => {
        fetch(`${Api.baseUrl}/movie/popular?api_key=${Api.key}&page=1`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results,true]);
            })
            .catch((error) => {
                fallbackResult(error);
            });
    };

    /* get top rated movie from api */
    const getTopRatedMovie = () => {
        fetch(`${Api.baseUrl}/movie/top_rated?api_key=${Api.key}&page=1`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results, true], 1);
            })
            .catch((error) => {
                fallbackResult(error, 1);
            });
    };

    /* get action movie from api */
    const getActionMovie = () => {
        fetch(`${Api.baseUrl}/discover/movie?api_key=${Api.key}&with_genres=28`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results, false]);
            })
            .catch((error) => {
                fallbackResult(error, 0);
            });
    };

    /* get comedy movie from api */
    const getComedyMovie = () => {
        fetch(`${Api.baseUrl}/discover/movie?api_key=${Api.key}&with_genres=35`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results, false]);
            })
            .catch((error) => {
                fallbackResult(error, 0);
            });
    };

    /* get comedy movie from api */
    const getSciFiMovie = () => {
        fetch(`${Api.baseUrl}/discover/movie?api_key=${Api.key}&with_genres=878`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results, false]);
            })
            .catch((error) => {
                fallbackResult(error, 0);
            });
    };

    /* get romance movie from api */
    const getRomanceMovie = () => {
        fetch(`${Api.baseUrl}/discover/movie?api_key=${Api.key}&with_genres=10749`)
            .then((response) => response.json())
            .then((responseJson) => {
                renderResult([responseJson.results, false]);
            })
            .catch((error) => {
                fallbackResult(error, 0);
            });
    };

    /* reponse success and failed */
    const renderResult = (results, i=0) => {
        movieListElement[i].movies = results;
    };

    const fallbackResult = (message, i=0) => {
        movieListElement[i].renderError(message);
    };

    /* add event to button movie detail */
    document.addEventListener("click", async function (e) {
        if (e.target.classList.contains("see-detail")) {
            const movieId = e.target.dataset.movieid;
            const movieDetail = await getMovieDetail(movieId);
            const genres = getGenres(movieDetail.genres);
            movieDetailELement.movieDetail = [movieDetail, genres];
        }
    });

    /* get movie detail from api */
    const getMovieDetail = (id) => {
        return fetch(
            `${Api.baseUrl}/movie/${id}?api_key=${Api.key}`
        ).then((response) => response.json());
    };

    /* get genres movie from movie detail*/
    const getGenres = (genres) => {
        let genreMovie = "";
        genres.forEach((genre) => {
            genreMovie += `${genre.name} `;
        });
        return genreMovie;
    };
    
    /* nav link event */
    $(".nav-link").on("click", function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
        let genre = $(this).text().toLowerCase();
        if (genre === "home") {
            $("article:nth-child(2)").show();
            const titleElement = document.querySelector("h3");
            titleElement.innerHTML = "Popular"
            getPopularMovie();
        }

        if (genre === "action"){
            $("article:nth-child(2)").hide();
            const titleElement = document.querySelector("h3");
            titleElement.innerHTML = "Action"
            getActionMovie();
        }

        if (genre === "comedy") {
            $("article:nth-child(2)").hide();
            const titleElement = document.querySelector("h3");
            titleElement.innerHTML = "Comedy"
            getComedyMovie();
        }

        if (genre === "romance") {
            $("article:nth-child(2)").hide();
            const titleElement = document.querySelector("h3");
            titleElement.innerHTML = "Romance"
            getRomanceMovie();
        }

        if (genre === "science fiction") {
            $("article:nth-child(2)").hide();
            const titleElement = document.querySelector("h3");
            titleElement.innerHTML = "Science Fiction"
            getSciFiMovie();
        }
        
    });

    // run code
    getPopularMovie();
    getTopRatedMovie();
}
export default main;
