import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial =
        [
            {
                "_id": "65c08b733fe6f489532f77cc3b",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.559Z",
                "__v": 0
            },
            {
                "_id": "65c08b73fe6f2348953f77cc3d",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.732Z",
                "__v": 0
            },
            {
                "_id": "65c08b73fe6f3348953f77cc3f",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.872Z",
                "__v": 0
            },
            {
                "_id": "65c08b7123f4e6f48953f77cc41",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.991Z",
                "__v": 0
            },
            {
                "_id": "65c08b74fe6f489573f77cc43",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:08.223Z",
                "__v": 0
            }
        ]

        const [notes, setNotes] = useState(notesInitial);

        // Add a Note
        const addNote = (title,description,tag)=>{
            console.log("ading a new note")
           const note = {
                "_id": "65c08b74fe6f489573f77cc43",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2024-02-05T07:17:08.223Z",
                "__v": 0
            }
            setNotes(notes.concat(note));

        }

        //Delete a Note
        const deleteNote = (id)=>{
            console.log("deleting the not" + id)
            const newNotes = notes.filter((note)=>{note._id!==id})
            setNotes(newNotes);
        }

        // edit a note
        const editNote = ()=>{

        }

    

    return (
        <NoteContext.Provider value={{notes, setNotes,addNote,editNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;