import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const s1 = {
        "name": "rohit",
        "class": "10A",
    }

    const [state, setstate] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setstate({
                "name": "Mohit",
        "class": "11A",
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value = {{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;