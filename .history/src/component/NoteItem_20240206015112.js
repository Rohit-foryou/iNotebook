import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, aut similique earum voluptatem quidem debitis iste quos, amet quas ea optio explicabo cumque! Repudiandae expedita esse officia modi ab unde dicta, soluta tempore.</p>
                    </div>
            </div>

        </div>
    )
}

export default NoteItem
