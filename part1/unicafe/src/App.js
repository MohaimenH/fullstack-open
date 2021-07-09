import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text, value, symbol = "" }) => {
    if (isNaN(value)) {
        return <div>{text} 0</div>;
    }
    return (
        <div>
            {text} {value} {symbol}
        </div>
    );
};

const Statistic = ({ text, value, symbol }) => {
    let calculatedValue = 0;
    let symbolToInsert = symbol || "";

    if (text.toLowerCase() === "average") {
        calculatedValue =
            (value[0] + value[2] * -1) / (value[0] + value[1] + value[2]);
    } else if (text.toLowerCase() === "positive") {
        calculatedValue = (value[0] * 100) / (value[0] + value[1] + value[2]);
    } else if (text.toLowerCase() === "all") {
        calculatedValue = value[0] + value[1] + value[2];
    } else {
        calculatedValue = value;
    }

    return (
        <div>
            <Display
                text={text}
                value={calculatedValue}
                symbol={symbolToInsert}
            />
        </div>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    if (good + neutral + bad === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Statistics</h2>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={[good, neutral, bad]} />
            <Statistic text="Average" value={[good, neutral, bad]} />
            <Statistic
                text="Positive"
                value={[good, neutral, bad]}
                symbol="%"
            />
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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
