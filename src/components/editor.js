import React from 'react'
import { TextArea } from 'react-mde'

export default function Editor(props) {

    return (
        <div>
            <TextArea 
            height='80%'
            width='80%'
            type="text" 
            name="input" 
            id="body-input" 
            value={props.currentNote.body}
            onChange={props.editNote}
            />
        </div>
    )
}