import React from 'react';

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;

const Header = (props) => {
  return <h2>{props.course}</h2>;
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
      <strong>
        {`Total of ${parts.reduce(
          (total, part) => part.exercises + total,
          0
        )} exercises`}
      </strong>
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
