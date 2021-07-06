import React, {useState} from "react";

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({handleClick, text}) => (
<button onClick={handleClick}>
  {text}
</button>
);


const App = () => {
  const [ counter, setCounter ] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
    <Display counter={counter} />
    <Button 
      handleClick={increaseByOne}
      text="Plus"
    />
    <Button 
      handleClick={setToZero}
      text="Zero"
    />
    <Button 
      handleClick={decreaseByOne}
      text="Minus"
    />
    </div>
  );
};

export default App;
// const App = () => {
//   const [ counter, setCounter ] = useState(0);

//   setTimeout(
//     () => (setCounter(counter+1)),
//     1000
//   )
//   return <div>{counter}</div>;
// };


// const Hello = ({name, age}) => {

//   // const {name, age} = props;

//   const bornYear = () => new Date().getFullYear() - age;

//   return ( // Using fragments instead of div root element.
//     <>
//       <p>Hello {name}, you are {age} years old!</p>
//       <p>So you were probabaly born in {bornYear()}</p>
//     </>
//   )
// }

// const App = () => {

//   const name = "Peter";
//   const age = 10;

//     return (
//         <div>
//             <h1>Greetings!</h1>
//             <Hello name="Mohaimen" age="22"/>
//             <Hello name={name} age={age} />
//         </div>
//     );
// };



