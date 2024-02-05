import React, {useContext} from 'react';
import noteContext from "../context/notes/noteContext"

const About = () => {
  const a = useContext(noteContext)
  return (
    <div>
      <h1>About Component {a.name}</h1>
      {/* Your About component content */}
    </div>
  );
}

export default About;
