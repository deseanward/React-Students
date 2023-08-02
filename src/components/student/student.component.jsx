import React from 'react';
import { StudentContainer } from './student.styles';

const Student = ({ student }) => {
  console.log(student)
  const { name, bio, scores } = student
  return <StudentContainer>
    Name: {name} <br />
    Bio: {bio} <br />
    # of Scores: {scores.length} <br />
    </StudentContainer>;
};

export default Student;
