import React from 'react';
import Score from '../score/score.component';
import { StudentContainer, StudentInfo, StudentName, StudentBio, StudentScoresContainer } from './student.styles';

const Student = ({ student }) => {
	const { name, bio, scores } = student;

	return (
		<StudentContainer>
			<StudentInfo>
        <StudentName>
          <h3>Student:</h3>
          {name}
        </StudentName>

        <StudentBio>
          <h3>Bio:</h3>
          {bio}
        </StudentBio>

        <StudentScoresContainer>
          <h3>Scores:</h3>
          {
            scores.map(score => (
              <Score score={score.score} date={score.date} />
            ))
          }
        </StudentScoresContainer>
      </StudentInfo>
		</StudentContainer>
	);
};

export default Student;
