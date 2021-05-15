import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import MovieControl from './MovieControl'
import ClearIcon from '@material-ui/icons/Clear';
import {useEffect} from 'react';
function WatchList() {

    const {watchlist} = useContext(GlobalContext);
    let image_API_string='';
    const IMG_API = 'https://image.tmdb.org/t/p/w400/';

    const setImageAPI=(poster_path)=>{
        
        if(poster_path){
             image_API_string = IMG_API+poster_path;
        }else{
            console.log(poster_path);
             image_API_string = 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
        return image_API_string;
    }

    const setClassName  = (score) => {
        if(score<=5){
            return 'tag-red';
        }else if(score<7){
            return 'tag-orange'
        }else{
            return 'tag-green'
        }
    }

        

    return (
        <div>
            {watchlist.length>0 ?
                <div>
                {watchlist.map((movie)=>(
                    <div className="movie-container-watchlist" key={movie.id}>
                    <div className="movie">
                        <img src = {setImageAPI(movie.poster_path)}
                         alt={movie.title}
                        />
                        <MovieControl  movie={movie} type={movie.type} />
                    <div className="movie-info">
                        <div className="movie-title-date">
                             
                            <h3>{movie.title} </h3>
                            <h4 style={{fontWeight:"lighter",color:"yellow"}}>{movie.release_date ? movie.release_date.substring(0,4):`- - - -`}</h4>
                        </div>
                        <span className={`tag ${setClassName(movie.vote_average)}`}>{movie.vote_average}</span>
                    </div>
                    <div     className="movie-overview">
                        <h3>Overview</h3>
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                </div>
                </div>
                ))}
                </div>
                :
                <div className="no-movies">No movies in the watchlist! Add some</div>
                }
            
        </div>
    )
}

export default WatchList;
