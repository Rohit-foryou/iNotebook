import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"

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

    const addNote = async(title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmFmOWMzOWFlZmVkNWEyZDVhNDE0In0sImlhdCI6MTcwNzA2MTE3MH0.hTDhcFZzdTCN61yvcDX_If3J1qs5UmCrIgv_EFFGXnQ"
            },
            body: JSON.stringify({ title, description, tag }),
        });

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
    const deleteNote = (id) => {
        console.log("deleting the not" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // edit a note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmFmOWMzOWFlZmVkNWEyZDVhNDE0In0sImlhdCI6MTcwNzA2MTE3MH0.hTDhcFZzdTCN61yvcDX_If3J1qs5UmCrIgv_EFFGXnQ"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();

        //Logic to edit in client.


        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }



    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;