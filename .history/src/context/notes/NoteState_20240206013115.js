import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notes =
        [
            {
                "_id": "65c08b73fe6f48953f77cc3b",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.559Z",
                "__v": 0
            },
            {
                "_id": "65c08b73fe6f48953f77cc3d",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.732Z",
                "__v": 0
            },
            {
                "_id": "65c08b73fe6f48953f77cc3f",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.872Z",
                "__v": 0
            },
            {
                "_id": "65c08b73fe6f48953f77cc41",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:07.991Z",
                "__v": 0
            },
            {
                "_id": "65c08b74fe6f48953f77cc43",
                "user": "65bfaf9c39aefed5a2d5a414",
                "title": "my reminder",
                "description": "do your work",
                "tag": "reminder",
                "date": "2024-02-05T07:17:08.223Z",
                "__v": 0
            }
        ]
    

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;