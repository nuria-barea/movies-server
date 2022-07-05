import { Request, Response} from "express";
import iMovie from "../model/interfaces/iMovie";
import movieModel from '../model/movieModel';

const  movieController = async (req:Request,res:Response) =>{
    const movies: any = movieModel.getMovies();
    res.json(movies);
}

export default movieController;