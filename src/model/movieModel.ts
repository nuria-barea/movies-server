//import movies from '../data/movies';
import { connection } from "../services/databases.service";

class Movie{

    async getMovies(){
        // console.log(movies);
        const collection = await connection();
        const result = await collection.find();
        return result.toArray();
    }
    getMoviesByDuration(){
    }

}

export default new Movie();