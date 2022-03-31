import React from 'react'
import Notes from './notes'

export default function Sidebar(props) {

    const notesElements = props.notes.map((item, index )=> {
        return (
            <Notes
                deleteNote={props.deleteNote}
                note={item}
                findCurrentNote={props.findCurrentNote}
                index={index}
                notes={props.notes}
                key={item.id}
                id={item.id}
                currentNote={props.currentNote}
                body={item.body}
                setCurrentNote={props.setCurrentNote}
            />
        )
    })

    return (
        <div className="sidebar">
            {notesElements}
        </div>
    )
}