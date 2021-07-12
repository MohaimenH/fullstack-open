import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const handleNameAddButton = (event) => {
      event.preventDefault();
      
      if ((persons.filter((person) => person.name === newName)).length > 0) {
        alert(`${newName} is already in the phonebook.`);
        return;
      }

      setPersons(persons.concat({name: newName}));
    }

    const nameFieldUpdater= (event) => {
      setNewName(event.target.value);
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNameAddButton}>
                <div>
                    name: <input value={newName} onChange={nameFieldUpdater}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person) => (
                    <div key={person.name}>{person.name}</div>
                ))}
            </div>
        </div>
    );
};

export default App;
