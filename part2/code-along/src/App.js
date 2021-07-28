import React, { useState, useEffect } from "react";
import Note from "./Note.js";
import axios from "axios";

import noteService from "./services/notes";

const App = (props) => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("Enter a note...");
    const [showAll, setShowAll] = useState(true);

    const hook = () => {
        // console.log("Effect");
        noteService.getAll().then((response) => {
            setNotes(response.data);
        });
    };

    useEffect(hook, []);

    // console.log("render", notes.length, "notes");

    const addNote = (event) => {
        event.preventDefault();

        let noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString,
            important: Math.random() < 0.5,
        };

        noteService.create(noteObject).then((response) => {
            console.log(response);
            setNotes(notes.concat(response.data));
            setNewNote("");
        });
    };

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const notesToShow = () => {
        return showAll ? notes : notes.filter((note) => note.important);
    };

    const toggleImportanceOf = (id) => {
        // const url = `http://localhost:3001/notes/${id}`;
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteService
            .update(id, changedNote)
            .then((response) =>
                setNotes(
                    notes.map((note) => (note.id === id ? response.data : note))
                )
            );
    };

    // const data = fetch("http://localhost:3001/notes"); // Returns a Promise object

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
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
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
