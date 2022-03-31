import './App.scss';
import React from 'react'
import { nanoid } from 'nanoid';
import Sidebar from './components/sidebar';
import Editor from './components/editor';

function App() {

  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem('notes')) || [])

  const [currentNote, setCurrentNote] = React.useState(
    (notes[0] && notes[0].id) || ""
  )
  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function editNote() {
    const current = findCurrentNote()
    const inputField = document.querySelector('.mde-text')
    setNotes(prev => {
      let cutOut = prev.splice(prev.indexOf(current), 1)[0]
      prev.splice(0, 0, cutOut)
      return prev.map(item => {
        return item.id === currentNote ? { ...item, body: inputField.value }
          : item
      })
    })
  }

  function addNote() {
    const newNote = {
      id: nanoid(),
      body: 'Click to edit current note'
    }
    setNotes(prev => [newNote, ...prev])
    setCurrentNote(newNote.id)

  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNote
    }) || notes[0]
  }

  function deleteNote(e, noteId) {
    e.stopPropagation()
    setNotes(prev => prev.filter(note => note.id !== noteId))
  }

  return (
    <div className="App">

      {notes.length === 0 &&
        < div className="no-notes">
          <h1>Add your first note</h1>
          <button onClick={addNote}>Get Started</button>
        </div>
      }
      {
        notes.length > 0 &&
        <div className="wrapper">
          <header>
            <div className="add-section">
              <span className="add-text">Notes</span>
              <button className="add-btn" onClick={addNote} >+</button>
            </div>
            <h1>://TakeNotes</h1>
          </header>
          <div className="main">
            <div className='main-left'>
              <Sidebar
                deleteNote={deleteNote}
                findCurrentNote={findCurrentNote()}
                notes={notes}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
              />
            </div>
            <div className="main-right">
              <Editor
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrentNote={setCurrentNote}
                editNote={editNote}
              />
            </div>
          </div>
        </div>
      }
    </div >
  );



}

export default App;
