import React, {useEffect, useState} from 'react'
import Movie from './Movie'
import WatchList from './WatchList'
import Watched from './Watched'
import Modal from './Modal'
import { GlobalProvider } from '../context/GlobalState';




function MainPage() {
    
     //const APIKey = '9f27855f3a716c4b2b32bb4cf259ed66'
    //const IMG_API = 'https://image.tmdb.org/t/p/w1280/'

    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='
    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f27855f3a716c4b2b32bb4cf259ed66&page=1'

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
   const [movieInfo, setMovieInfo] = useState(null);

    useEffect(()=>{  
        getMovies(FEATURED_API)   
        
    },[]);
    const getMovies = (API) =>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.results)
           setMovies(data.results);
        })
    }



    const onSubmitHandler = (e) => {

        e.preventDefault();
        if(term){
            //getMovies(SEARCH_API+term);
            //setTerm('');
            fetch(SEARCH_API+term)
            .then((res)=>res.json())
            .then((data)=>{
                
                setMovies(data.results);
               setTerm('');
            })
        }  
    } 

    const onChangeHandler = (e) => {
        setTerm(e.target.value);
        console.log(term) ;
        fetch(SEARCH_API+e.target.value)
            .then((res)=>res.json())
            .then((data)=>{
                if(!data.errors){
                    setMovies(data.results);
                 //   setTerm('');
                }else{
                    setMovies([]);  
                }
            });
        }  
    
    return (
        <div>
             <GlobalProvider>
            <>
                
                <header>
                    <form type="submit" onSubmit={onSubmitHandler}>
                        
                        <input 
                        
                        className="search"
                        value={term}
                        type="search" 
                        placeholder="search..."
                        onChange={onChangeHandler}
                    />
                    </form>
                
                </header>
               
                <div className="movie-container">
                    { movies.length>0 && movies.map(movie =>(
                            <Movie key={movie.id} {...movie} setSelectedImage={setSelectedImage} setMovieInfo={setMovieInfo}  />
                        ))}
                    {selectedImage && <div><Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} movieInfo={movieInfo} /></div> }       

                    {movies.length===0 && <div>No Data Available</div> }

                
                </div>
            </>    
        </GlobalProvider>
        </div>
    )
}

export default MainPage