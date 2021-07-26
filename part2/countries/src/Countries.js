import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Country from "./Country";

// const showCountryButton = ({country, onClickHandler}) => ;

const Countries = ({filter}) => {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            setCountries(response.data);
        });
    }, []);
    
    let result = countries.filter((country) => country.name.toLowerCase().includes(filter));
    
    if (result.length === 0) return <div>No matches, specify another filter.</div> 
    
    if (result.length > 10) return <div>Too many matches, specify another filter.</div>
    
    if  (result.length === 1) return <Country country={result[0]}/>

    return (
        <div>
            {result.map((country) => <div key={country.name}>{country.name} <button>Show</button></div>)}
        </div>
    )
};

export default Countries;
