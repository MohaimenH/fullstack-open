import React from "react";
import { useState } from "react";

import Countries from "./Countries";

const App = () => {
    const [search, setSearch] = useState("");

    const searchFieldHandler = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            Find Countries:{" "}
            <input value={search} onChange={searchFieldHandler} />
            <Countries filter={search} searchUpdater={setSearch}/>
        </div>
    );
};

export default App;
