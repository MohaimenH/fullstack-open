import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text, value, symbol=''}) => {
  if (isNaN(value)) {
    return (
      <div>
        {text} 0
      </div>
    )
  }
    return (
        <div>
            {text} {value} {symbol}
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

            <Display text="All" value={good + neutral + bad} />
            <Display text="Average" value={(good + bad * - 1)/(good + neutral + bad)} />
            <Display text="Positive" value={good * 100/(good + neutral + bad)} symbol="%"/>
        </div>
    );
};

export default App;
