// AddNoteForm.js
import React, { useState } from 'react';
import randomcolor from 'randomcolor';

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = () => {
    if (title.trim() !== '' && body.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title,
        body,
        color: randomcolor(),
        createdAt: new Date().toLocaleString(),
      };
      onAdd(newNote);
      setTitle('');
      setBody('');
    } else {
      alert("Please enter both title and body before adding a note.");
    }
  };

  return (
    <div className="note-form">
        <div className='main'>
      <input
        className='title'
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className='body'
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button className='add' onClick={addNote}>Add Note</button>
    </div>
    
    </div>
   
  );
};

export default AddNoteForm;