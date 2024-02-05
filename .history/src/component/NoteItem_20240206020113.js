import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5><i class="fa-regular fa-trash-can mx-2"></i>
                        <i class="fa-regular fa-pen-to-square mx-2"></i>
                        <p class="card-text">{note.description}</p>
                        
                    </div>
            </div>

        </div>
    )
}

export default NoteItem
