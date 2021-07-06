import React, {useState} from "react";

const App = () => {
  const [ counter, setCounter ] = useState(0);

  return (
    <>
    <div>{counter}</div>
    <button onClick={() => {setCounter(counter+1);}}>Plus</button>
    <button onClick={() => {setCounter(0);}}>Reset</button>
    </>
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


