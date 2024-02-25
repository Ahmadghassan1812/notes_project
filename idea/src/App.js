import React, { useState, useEffect } from 'react';
import './App.css';
import randomcolor from 'randomcolor';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes && storedNotes.length > 0) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = newNote => {
    setNotes([...notes, newNote]);
  };

  const removeNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <AddNoteForm onAdd={addNote} />
      <div className='menu'>
        <NotesList notes={notes} onRemove={removeNote} />
      </div>
    </div>
  );
}

export default App;
