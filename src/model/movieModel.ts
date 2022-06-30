import movies from '../data/movies';

class Movie{

    getMovies(){
        console.log(movies);
        return movies;
    }
    getMoviesByDuration(){
    }
}

export default new Movie();