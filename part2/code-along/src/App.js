import React, { useState, useEffect } from "react";
import Note from "./Note.js";

import noteService from "./services/notes";
import Notification from "./Notification";

const App = (props) => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("Enter a note...");
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const hook = () => {
        // console.log("Effect");
        noteService.getAll().then((initialNotes) => {
            setNotes(initialNotes);
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

        noteService.create(noteObject).then((returnedNote) => {
            setNotes(notes.concat(returnedNote));
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
            .then((returnedNote) =>
                setNotes(
                    notes.map((note) => (note.id === id ? returnedNote : note))
                )
            )
            .catch((error) => {
                setErrorMessage(
                    `Note '${note.content}' was already deleted from the server.`
                );
                setTimeout(() => setErrorMessage(null), 5000);
                // alert(
                //     `the note '${note.content}' was already deleted from the server.`
                // );
                setNotes(notes.filter((n) => n.id !== note.id));
            });
    };

    // const data = fetch("http://localhost:3001/notes"); // Returns a Promise object

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
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
