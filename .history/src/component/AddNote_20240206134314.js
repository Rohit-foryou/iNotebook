import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "default" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote( {title: "", description: "", tag: ""})
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }) //it will update the description and title

    }
    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddNote