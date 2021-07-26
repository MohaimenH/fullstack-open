import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {

    const api_key = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState({main: {temp: 0}, wind: {speed: 0, deg: 0}});
    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
            )
            .then((response) => {
                console.log(response.data, "resp");
                setWeather(response.data);
            })
    }, [country.capital, api_key]);

    return (
        <div>
            <h1>{country.name}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>

            <h2>Languages</h2>
            <ul>
                {country.languages.map((language) => (
                    <li key={language.iso639_1}>{language.name}</li>
                ))}
            </ul>

            <img
                src={country.flag}
                width="400px"
                alt={country.name + "'s Flag"}
            />

            <h2>Weather in {country.capital}</h2>
            <div>
                <strong>Temperature:</strong> {weather.main.temp} Celcius
            </div>
            <div>
                <strong>Wind:</strong> {weather.wind.speed} m/s at {weather.wind.deg} Degrees
            </div>
        </div>
    );
};

export default Country;
