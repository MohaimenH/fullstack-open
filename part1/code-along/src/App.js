import React from "react";

const Hello = (props) => {
  return ( // Using fragments instead of div root element.
    <>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </>
  )
}

const App = () => {

  const name = "Peter";
  const age = 10;

    return (
        <div>
            <h1>Greetings!</h1>
            <Hello name="Mohaimen" age="22"/>
            <Hello name={name} age={age} />
        </div>
    );
};

export default App;
