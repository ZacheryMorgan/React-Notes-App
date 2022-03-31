import React from 'react'

export default function Notes(props) {

    const styles = {
        border: '4px solid white',
        backgroundColor: 'rgb(76, 175, 175)'
    }

    return (
        <li
            className='notes'
            onClick={() => props.setCurrentNote(props.id)}
            key={props.id}
            style={props.id === props.currentNote ? styles : null}
        >
            {props.note.body.split("\n")[0]}
            <button 
                    className="delete-btn"
                    onClick={(e) => props.deleteNote(e, props.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
        </li>
    )
}