// NotesList.js
import React from 'react';

const NotesList = ({ notes, onRemove }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <div key={note.id} className="note" style={{ backgroundColor: note.color }}>
            <div className='nnn'>
          <h3 style={{ marginBottom: '5px' }  }>{note.title}</h3>
          <p style={{ marginBottom: '5px' }}>{note.body}</p>
          <button className='remove' onClick={() => onRemove(note.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
