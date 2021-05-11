import React, {useEffect, useState} from 'react'
import Movie from './movies/Movie'

function App() {
     //const APIKey = '9f27855f3a716c4b2b32bb4cf259ed66'
    const moviesArr = ['1','2','3']
    const IMG_API = 'https://image.tmdb.org/t/p/w1280/'
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='
    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f27855f3a716c4b2b32bb4cf259ed66&page=1'

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState('');
   
    
    console.log(movies);

    useEffect(()=>{  
        getMovies(FEATURED_API)   
    },[]);

    const getMovies = (API) =>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data.results)
           setMovies(data.results);
        })
    }

    const onSubmitHandler = (e) => {

        e.preventDefault();
        if(term){
            getMovies(SEARCH_API+term);
            setTerm('');
        }  
    } 


    

    return (
        <>
            <header>
                <form type="submit" onSubmit={onSubmitHandler}>
                    
                    <input 
                    
                    className="search"
                    value={term}
                    type="search" 
                    placeholder="search..."
                    onChange={e=>{setTerm(e.target.value)}}
                />
                </form>
               
            </header>
            <div className="movie-container">
                { movies.length>0 && movies.map(movie => (<Movie key={movie.id} {...movie}  />))}
                {movies.length===0 && <div>No Data Available</div> }
            
            </div>
        </>    
    )
}

export default App
//if i pass props as movie={movie} i get a single object of each movie
// but if i pass it as {... movie} it spreads and gives each data seperately and can be
//easily destructured after passing
//the spread operator doesnt pass value but directly passes te bject in some sense
// it becomes easy to destructure the props