import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Student = ({ name, students, handleAtt, setTally }) => {
	const [attendance, setAttendance] = useState('');
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		const newStudents = { ...students };
		newStudents[name] = attendance;
		handleAtt(newStudents);
	}, [attendance]);

	useEffect(() => {
		setTally(name, attendance);
	}, [attendance]);

	const style = {
		backgroundColor:
			attendance === 'OT'
				? '#a4fc97'
				: attendance === 'UT'
				? '#fc9797'
				: attendance === 'ET'
				? '#fcf097'
				: attendance === 'UA'
				? '#fc9797'
				: attendance === 'EA'
				? '#fcf097'
				: 'none',
		color: theme && attendance ? 'black' : theme ? 'white' : 'black',
	};

	return (
		<form
			className={`students ${theme ? 'night' : 'day'}`}
			onChange={(e) => setAttendance(e.target.value)}
			style={style}
		>
			<h5>{name}</h5>
			<label>
				On Time:
				<input
					key={`${name} On Time`}
					type='radio'
					name='attendance'
					value='OT'
				/>
			</label>
			<label>
				UT:
				<input key={`${name} UT`} type='radio' name='attendance' value='UT' />
			</label>
			<label>
				ET:
				<input key={`${name} ET`} type='radio' name='attendance' value='ET' />
			</label>
			<label>
				UA:
				<input key={`${name} UA`} type='radio' name='attendance' value='UA' />
			</label>
			<label>
				EA:
				<input key={`${name} EA`} type='radio' name='attendance' value='EA' />
			</label>
		</form>
	);
};

export default Student;
