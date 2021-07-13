import React from "react";

const Filter = ({ value, onChangeHandler }) => {
    return (
        <div>
            Filter names: <input value={value} onChange={onChangeHandler} />
        </div>
    );
};

export default Filter;
