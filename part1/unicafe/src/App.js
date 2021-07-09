import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text, value }) => {
    return (
        <div>
            {text} {value}
        </div>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give Feedback</h1>

            <Button
                handleClick={() => {
                    setGood(good + 1);
                }}
                text="Good"
            />

            <Button
                handleClick={() => {
                    setNeutral(neutral + 1);
                }}
                text="Neutral"
            />

            <Button
                handleClick={() => {
                    setBad(bad + 1);
                }}
                text="Bad"
            />

            <h2>Statistics</h2>

            <Display text="Good" value={good} />
            <Display text="Neutral" value={neutral} />
            <Display text="Bad" value={bad} />
        </div>
    );
};

export default App;
