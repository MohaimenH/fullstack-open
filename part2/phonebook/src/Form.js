import React from "react";

const Form = ({
    onSumbitHandler,
    nameValue,
    onNameChange,
    numberValue,
    onNumberChange,
}) => (
    <form onSubmit={onSumbitHandler}>
        <div>
            name: <input value={nameValue} onChange={onNameChange} />
        </div>
        <div>
            number: <input value={numberValue} onChange={onNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
);

export default Form;
