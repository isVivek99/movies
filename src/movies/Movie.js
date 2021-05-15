import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';



function Movie({ title, poster_path, overview, vote_average, release_date, setSelectedImage, setMovieInfo, id  }) {

    const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o)=>(o.id===id))
    const watchlistDisabled = storedMovie? true:false;
    

    
    let image_API_string='';
    const IMG_API = 'https://image.tmdb.org/t/p/w400/';

    const setClassName  = (score) => {
        if(score<=5){
            return 'tag-red';
        }else if(score<7){
            return 'tag-orange'
        }else{
            return 'tag-green'
        }
    }

    const setImageAPI=(poster_path)=>{
        if(poster_path){
             image_API_string = IMG_API+poster_path;
        }else{
             image_API_string = 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
        return image_API_string;
    }

    const updateInfoForModal = ( )=>{

        setSelectedImage(image_API_string)
       const movieInfo = {
            mTitle:title,
            mOverview:overview,
            mVote_average:vote_average,
            mRelease_date:release_date
            
        }
        setMovieInfo(movieInfo)
    }

    const updateInfoForFav = ( )=>{

       const movieInfo = {
            title:title,
            overview:overview,
            vote_average:vote_average,
            release_date:release_date,
            poster_path:poster_path,
            id:id
        }
        addMovieToWatchList(movieInfo)
        console.log(movieInfo);
    }



    return (
        <div className="movie">
            <div className="movie-favicon" onClick={updateInfoForFav}>  
                <img src = {setImageAPI(poster_path)}
                    alt={title}
                onClick={updateInfoForModal}
                />        
                <button disabled={watchlistDisabled}>add favourite</button>
            </div>
            
            <div className="movie-info">
                <div className="movie-title-date">
                    <h3>{title} </h3>
                    <h4 style={{fontWeight:"lighter",color:"yellow"}}>{release_date ? release_date.substring(0,4):`- - - -`}</h4>
                </div>
                <span className={`tag ${setClassName(vote_average)}`}>{vote_average}</span>
            </div>
            <div     className="movie-overview">
                <h3>Overview</h3>
                <p>
                    {overview}
                </p>
            </div>
        </div>
    )
}

export default Movie
