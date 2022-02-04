import React, { useState } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const idxOfTopVoted = points.reduce(
    (max, x, i, arr) => (x > arr[max] ? i : max),
    0
  );

  const next = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const vote = () => {
    let newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <div className='container'>
      <Header text="Today's Wisdom" />
      <Anecdote text={anecdotes[selected]} points={points[selected]} />
      <div className='line'>
        <Button onClick={vote} text="Oh that's deep" />
        <Button onClick={next} text='Gimme new wisdom' />
      </div>
      <Header text='Top Wisdom' />
      <Anecdote
        text={anecdotes[idxOfTopVoted]}
        points={points[idxOfTopVoted]}
      />
    </div>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdote = ({ text, points }) => {
  return (
    <div className='anecdote'>
      <p>{text}</p>
      <p>
        has <strong>{points}</strong> votes
      </p>
    </div>
  );
};

export default App;
