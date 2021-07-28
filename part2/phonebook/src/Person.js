import React from "react";

const Person = ({ person, deleteHandler }) => (
    <div>
        {person.name} {person.number}{" "}
        <button onClick={() => deleteHandler(person.id)}>Delete</button>
    </div>
);

export default Person;
