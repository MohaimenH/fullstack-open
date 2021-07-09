import React, { useState } from "react";

const App = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        setValue(newValue);
    }
    
    return (
      <div>
        {value}
        <button onClick={() => setToValue(0)}>Reset</button>
        <button onClick={() => setToValue(1000)}>Thousand</button>
        <button onClick={() => setToValue(value + 1)}>Increment</button>
      </div>
    );
  };

export default App;

// const History = (props) => {
//     if (props.allClicks.length === 0) {
//         return <div> the app is used by pressing the buttons </div>;
//     }
//     return <div> button press history: {props.allClicks.join(" ")} </div>;
// };

// const Button = ({handleClick, text}) => {
//     return <button onClick={handleClick}>{text}</button>
// }


// const App = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);
//     const [allClicks, setAll] = useState([]);

//     const handleLeftClick = () => {
//         setAll(allClicks.concat("L"));
//         setLeft(left + 1);
//     };

//     const handleRightClick = () => {
//         setAll(allClicks.concat("R"));
//         setRight(right + 1);
//     };

//     // debugger;

//     return (
//         <div>
//             {left}
//             <Button handleClick={handleLeftClick} text="Left" />
//             <Button handleClick={handleRightClick} text="Right" />
//             {right}
//             <History allClicks={allClicks} />
//         </div>
//     );
// };


// const [clicks, setClicks] = useState({left: 0, right: 0});

// const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1,});
//   // const newClicks = { // Object consisting of left and right, like the useState.
//   //   ...clicks,
//   //   left: clicks.left + 1,
//   // }
//   // Changing the entire object to a new object.

// const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1,});
// // Changing the entire object to a new object.
// // Using ...clicks to copy entire object then 'right' to overwrite the property in the copied obj.

// return (
//   <div>
//     {clicks.left}
//     <button onClick={handleLeftClick}>Left</button>
//     <button onClick={handleRightClick}>Right</button>
//     {clicks.right}
//   </div>
// )

// const Display = ({counter}) => <div>{counter}</div>;

// const Button = ({handleClick, text}) => (
// <button onClick={handleClick}>
//   {text}
// </button>
// );

// const App = () => {
//   const [ counter, setCounter ] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//     <Display counter={counter} />
//     <Button
//       handleClick={increaseByOne}
//       text="Plus"
//     />
//     <Button
//       handleClick={setToZero}
//       text="Zero"
//     />
//     <Button
//       handleClick={decreaseByOne}
//       text="Minus"
//     />
//     </div>
//   );
// };

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
