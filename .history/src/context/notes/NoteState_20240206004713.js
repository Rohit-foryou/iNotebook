import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const state = {
        "name": "rohit",
        "class": "10A",
    }
    return(
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;