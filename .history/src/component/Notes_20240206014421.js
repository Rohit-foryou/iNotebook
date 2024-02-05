import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <div>
      <div className="container my-3">
        <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <NoteItem note = {note}/>
        })}
      </div>
    </div>
  )
}

export default Notes
