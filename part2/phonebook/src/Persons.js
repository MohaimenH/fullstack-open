import React from "react";
import Person from "./Person";

const Persons = ({ search, persons, deletePerson }) => {
    return (
        <div>
            {persons
                .filter((person) => {
                    return person.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                })
                .map((person) => (
                    <Person
                        key={person.name}
                        person={person}
                        deleteHandler={deletePerson}
                    />
                ))}
        </div>
    );
};

export default Persons;
