import React from 'react'


function Movie({ title, poster_path, overview, vote_average,setSelectedImage, setMovieInfo  }) {

    
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
        }
        setMovieInfo(movieInfo)
    }

    return (
        <div className="movie">
            <img src = {setImageAPI(poster_path)}
             alt={title}
             onClick={updateInfoForModal}
            />
            <div className="movie-info">
                <h3>{title}</h3>
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
