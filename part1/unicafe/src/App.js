import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className='container'>
      <Header text='Give Feedback' />
      <div className='line'>
        <Button text='😊 Good' onClick={handleGood} />
        <Button text='😐 Neutral' onClick={handleNeutral} />
        <Button text='😠 Bad' onClick={handleBad} />
      </div>
      <Header text='Statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Stat = ({ text, count }) => {
  return (
    <span className='stat'>
      {text}: {count}
    </span>
  );
};

const Stats = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const avg = () => {
    if (total() == 0) return 0;
    else return ((good + bad * -1) / total()).toFixed(2);
  };
  const pos = () => {
    if (total() == 0) return 0;
    else return ((good / total()).toFixed(2) * 100).toFixed(0) + '%';
  };
  return (
    <div>
      <div className='line'>
        <Stat text='😊 Good' count={good} />
        <Stat text='😐 Neutral' count={neutral} />
        <Stat text='😠 Bad' count={bad} />
      </div>
      <div className='line'>
        <Stat text='Total' count={total()} />
        <Stat text='Average' count={avg()} />
        <Stat text='Positive' count={pos()} />
      </div>
    </div>
  );
};
