import React, {useContext} from 'react';
import {GlobalContext, GlobalState} from '../context/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';


    function MovieControl({movie, type}) {

        const {removeMovieFromWatchList} = useContext(GlobalContext);

        return (
            <div className="card-control">
                {type==="watchlist" && (
                    <>
                    <div className="ctrl-btn-one">  
                        <button>Watched</button>
                    </div>
                    <div className="ctrl-btn-two" onClick={()=>{removeMovieFromWatchList(movie.id)}}>
                        <DeleteIcon/>
                    </div>
                    </>
                )}
            </div>
        )
    }
    
    export default MovieControl
    
