import React, { useState } from "react";
import Note from "./Note.js";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("Enter a note...");
    const [showAll, setShowAll] = useState(true);

    const addNote = (event) => {
        event.preventDefault();

        let newNoteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString,
            important: Math.random() < 0.5,
        };

        setNotes(notes.concat(newNoteObject));
        setNewNote("");
    };

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    };

    const notesToShow = () => {
        return showAll ? notes : notes.filter((note) => note.important);
    };

    const data = fetch("http://localhost:3001/notes");

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>

            <ul>
                {notesToShow().map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default App;
