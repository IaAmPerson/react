import React, { useState, useEffect } from 'react';
import Note from './Note'

const NoteApp = () => {
    let notesData = JSON.parse(localStorage.getItem('notes'))
    let [notes, setNotes] = useState(notesData || [])
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    })


    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const bodyChange = (e) => {
        setBody(e.target.value)
    }
    
    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle('')
        setBody('')

    }

    const removeNote = (title) => {
        return () => {
            setNotes(notes.filter((note)=> note.title !== title))
        }
    }

    return (
        <div>
            <h1>My Notes</h1>

            {notes.map((note) => {
                return (
                    <div key={note.title}>
                        <Note title={note.title} body={note.body} />
                        <button onClick={removeNote(note.title)}> Remove Note</button>
                    </div>
                )
            })}

            <p>Add Note</p>

            <form onSubmit={addNote}>
                <input value={title} onChange={titleChange} />
                <textarea value={body} onChange={bodyChange}></textarea>
                <button>Add Note</button>
            </form>



        </div>
    )
}


export default NoteApp