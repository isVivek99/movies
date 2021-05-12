import React from 'react'
import NotesIcon from '@material-ui/icons/Notes';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';

function Notes() {


    const [input, setInput] = useState("");
    const[notes, setNotes] = useState(false);


    return (
        <div>
            <br/>
         <div className="modal-notes">
                            <span className="modal-notes-icon" onClick={()=>{setNotes(!notes)}}><NotesIcon/></span>
                            <span className="modal-notes-icon" onClick={()=>{setInput("")}}><ClearIcon/></span>
                            <br/>
                            {notes?
                            <textarea
                             value = {input}
                             onChange = {e=>{setInput(e.target.value)}}
                             placeholder="enter notes"
                             className="modal-note-input"
                              rows="3" cols="50"
                            >
                            </textarea>:
                            notes}
                            {notes?<div></div>: <div>{input}</div> }  
                            
            </div>                
        </div>
    )
}

export default Notes
