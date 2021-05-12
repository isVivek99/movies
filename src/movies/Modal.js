import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';


import Notes from './Notes'

function Modal({ selectedImage, setSelectedImage, movieInfo }) {

   

    const setClassName  = (score) => {
        if(score<=5){
            return 'tag-red';
        }else if(score<7){
            return 'tag-orange'
        }else{
            return 'tag-green'
        }
    }

    const clickHandler = (e) =>{
        if(e.target.classList.contains("backdrop")){
            setSelectedImage(null);
        }
    }

 
        
    

    return (
        <div className="backdrop" onClick={clickHandler}>
            <div className="modal">
                
                <div className="modal-img">
                    <img src={selectedImage} alt={movieInfo.title}/>
                </div>
                <div className="modal-info">
                    <div className="modal-external">
                        <button className=" modal-trailer">
                            <VisibilityIcon/>
                            Watch trailer
                            <span></span>
                        </button>
                        <button className=" modal-movie">
                            <VisibilityIcon/>
                            Watch Movie
                            <span></span>
                        </button>
                    </div>
                    <div className="modal-title">
                    <h2> {movieInfo.mTitle}</h2>
                    </div>
                    <div className="modal-overview">
                        <h3>Overview</h3>
                        <p>
                            {movieInfo.mOverview}
                        </p><br/>
                        <span  className={`tag ${setClassName(movieInfo.mVote_average)}`}>{movieInfo.mVote_average}</span>
                        <Notes />
                        </div>   
                    </div>
                </div>  
            </div>
        
    )
}

export default Modal