import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import Persons from "./Persons";
import Form from "./Form";
import Notification from "./Notification";

import rest from "./services/REST";

const App = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        rest.loadPhoneBook().then((response) => {
            setPersons(response.data);
        });
    }, []);
    // { name: "Arto Hellas", number: "040-123456" },
    // { name: "Ada Lovelace", number: "39-44-5323523" },
    // { name: "Dan Abramov", number: "12-43-234345" },
    // { name: "Mary Poppendieck", number: "39-23-6423122" },

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("123-456-7890");
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState({
        message: null,
        success: true,
    });

    const handleNameAddButton = (event) => {
        event.preventDefault();
        let person = persons.find((person) => person.name === newName);

        if (!!person) {
            if (person.number === newNumber) {
                // Same numbers
                alert(`${newName} is already in the phonebook.`);
            } else {
                if (
                    window.confirm(
                        `${person.name} is already added to the phonebook, replace the old number?`
                    )
                ) {
                    // PUT request
                    let edittedPerson = { ...person, number: newNumber };
                    rest.editPhoneBook(edittedPerson)
                        .then((response) => {
                            setPersons(
                                persons.map((p) =>
                                    p.id === response.data.id
                                        ? response.data
                                        : p
                                )
                            );
                        })
                        .catch((response) => {
                            setPersons(
                                persons.filter((p) => p.id !== edittedPerson.id)
                            );

                            setMessage({
                                message: `Information of ${edittedPerson.name} has already been deleted`,
                                success: false,
                            });
                            setTimeout(
                                () => setMessage({ ...message, message: null }),
                                3000
                            );
                        });
                }
            }
        } else {
            let personToAdd = { name: newName, number: newNumber };
            rest.addToPhoneBook(personToAdd).then((response) => {
                setPersons(persons.concat(response.data));
                setNewName("");
                setMessage({
                    message: `Added ${response.data.name}`,
                    success: true,
                });
                setTimeout(
                    () => setMessage({ ...message, message: null }),
                    3000
                );
            });
        }
    };

    const nameFieldUpdater = (event) => {
        setNewName(event.target.value);
    };

    const numberFieldUpdater = (event) => {
        setNewNumber(event.target.value);
    };

    const searchFieldUpdater = (event) => {
        setSearch(event.target.value);
    };

    const deleteEntry = (id) => {
        if (
            window.confirm(
                `Delete ${persons.find((person) => person.id === id).name}?`
            )
        ) {
            rest.deleteFromPhoneBook(id).then((response) => {
                setPersons(persons.filter((person) => person.id !== id));
            });
        }
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification {...message} />
            <Filter value={search} onChangeHandler={searchFieldUpdater} />
            <h2>Add a New Number</h2>
            <Form
                onSumbitHandler={handleNameAddButton}
                nameValue={newName}
                onNameChange={nameFieldUpdater}
                numberValue={newNumber}
                onNumberChange={numberFieldUpdater}
            />
            <h2>Numbers</h2>
            <Persons
                search={search}
                persons={persons}
                deletePerson={deleteEntry}
            />
        </div>
    );
};

export default App;
