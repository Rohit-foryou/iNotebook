import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Notes from './Notes';
import AddNote from './AddNote';


const Home = () => {
  return (
    <div>
      <AddNote/>
    </div>
  );
}

export default Home;
