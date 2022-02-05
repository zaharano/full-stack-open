import React from 'react';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} key={part.id} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      {`Total of ${parts.reduce(
        (total, part) => part.exercises + total,
        0
      )} exercises`}
    </p>
  );
};

const Part = ({ name, id, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
