import { useState, useEffect } from 'react';
import { students } from './data';

import Student from './components/student/student.component';

import './App.css';

function App() {
	const [studentData, setStudentData] = useState(null);

	useEffect(() => {
		if (students) setStudentData(students);
	}, []);

	return (
		<div className='App'>
			{studentData ? (
				studentData['students'].map(student => (
					<Student key={student.name} student={student} />
				))
			) : (
				<h2>Loading Students...</h2>
			)}
		</div>
	);
}

export default App;
