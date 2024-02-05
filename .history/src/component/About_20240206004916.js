// About.js
import React, { useContext } from 'react';
import NoteContext from "../context/notes/noteContext";

const About = () => {
    const a = useContext(NoteContext); // Corrected the case here
    return (
        <div>
            <h1>About Component {a.name} and he is in class {a.class}</h1>
            {/* Your About component content */}
        </div>
    );
}

export default About;
