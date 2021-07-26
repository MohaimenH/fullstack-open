import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Country from "./Country";

// const showCountryButton = ({country, onClickHandler}) => ;

const Countries = ({filter, searchUpdater}) => {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            setCountries(response.data);
        });
    }, []);
    
    const showCountry = (event) => {
        // console.log(event.target.id);
        searchUpdater(event.target.id);
    }
    
    let result = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()));
    
    if (result.length === 0) return <div>No matches, specify another filter.</div> 
    
    if (result.length > 10) return <div>Too many matches, specify another filter.</div>
    
    if  (result.length === 1) return <Country country={result[0]}/>

    return (
        <div>
            {result.map((country) => <div key={country.name}>{country.name} <button id={country.name} onClick={showCountry}>Show</button></div>)}
        </div>
    )
};

export default Countries;
