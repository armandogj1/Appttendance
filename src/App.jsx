import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import Student from './Student.jsx';
import Template from './Template.jsx';
import { ThemeContext } from './ThemeContext';

const App = (props) => {
	const [students, setStudents] = useState({});
	const [day, setDay] = useState('');
	const [tally, setTally] = useState({});
	const originalTally = useRef({});

	const { theme, toggleTheme } = useContext(ThemeContext);

	if (theme) {
		document.body.className = 'night';
	} else {
		document.body.className = 'day';
	}

	useEffect(() => {
		const newStudents = {};
		axios
			.get('/names')
			.then((result) => {
				result.data[0].forEach((student) => (newStudents[student] = ''));
				setStudents(newStudents);
				setTally(result.data[1]);
				originalTally.current = result.data[1];
			})
			.catch((err) => console.log('server error'));
	}, []);

	const handleSubmit = () => {
		const attendance = { students, day };

		if (day) {
			axios
				.post('/attendance', attendance)
				.then((result) => console.log('submitted'))
				.catch((err) => console.log('error'));
		} else {
			console.log('Please provide a WXDX to submit');
		}
	};

	const handleTally = (name, attendance) => {
		const newTally = { ...tally };

		if (Object.keys(tally).length) {
			const attValue =
				attendance === 'OT'
					? 0
					: attendance === 'UT'
					? 30
					: attendance === 'UA'
					? 100
					: attendance === 'ET'
					? 30
					: attendance === 'EA'
					? 100
					: 0;

			newTally[name] = originalTally.current[name] + attValue;
			setTally(newTally);
		}
	};

	return (
		<div className={`container ${theme ? 'night' : 'day'}`}>
			<button key='theme' onClick={() => toggleTheme()}>
				Theme
			</button>
			<input key='day' type='text' onChange={(e) => setDay(e.target.value)} />
			{Object.keys(students).map((student) => (
				<Student
					key={student}
					name={student}
					handleAtt={setStudents}
					students={students}
					attCount={originalTally.current[student]}
					setTally={handleTally}
				/>
			))}
			<button key='button' onClick={handleSubmit}>
				Submit
			</button>
			{Object.keys(tally).map((student) => {
				let el = '';

				if (tally[student] > originalTally.current[student]) {
					el = (
						<Template
							key={student}
							name={student}
							attendance={tally[student]}
						/>
					);
				}

				return el;
			})}
		</div>
	);
};

export default App;
