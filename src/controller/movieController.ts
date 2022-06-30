import { Request, Response} from "express";
import iMovie from "../model/interfaces/iMovie";
import movieModel from '../model/movieModel';
const movieController = (req:Request,res:Response)=>{
    const movies:iMovie[] = movieModel.getMovies();
    res.json(movies);
}

export default movieController;