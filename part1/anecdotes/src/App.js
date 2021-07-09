import React, { useState } from "react";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
    ];

    const generateEmptyObject = () => {
      const emptyObj = {};
      for (let i = 0; i < anecdotes.length; i++) {
        emptyObj[i] = 0;
      }
      return emptyObj;
    }
    
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(generateEmptyObject());
    const [maxVotes, setMaxVotes] =useState({max: 0, index: 0});

    const randomSelector = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const voter = () => {
      if (votes[selected] >= maxVotes.max) {
        setMaxVotes({max: votes[selected] + 1, index: [selected]})
      }

      setVotes({...votes, [selected]: votes[selected] + 1})
    }

    return ( 
      <div>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>This anecdote has {votes[selected]} votes.</p>
        <button onClick={voter}>Vote</button>
        <button onClick={randomSelector}>Next Anecdote</button>

        <h2>Anecdote With Most Votes</h2>
        <p>{anecdotes[maxVotes.index]}</p>
        <p>This anecdote has {maxVotes.max} votes.</p>
      </div>
    );
};

export default App;
