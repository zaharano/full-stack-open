import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        e1={exercises1}
        e2={exercises2}
        e3={exercises3}
        p1={part1}
        p2={part2}
        p3={part3}
      />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
};

export default App;

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.p1} {props.e1}
      </p>
      <p>
        {props.p2} {props.e2}
      </p>
      <p>
        {props.p3} {props.e3}
      </p>
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>;
};