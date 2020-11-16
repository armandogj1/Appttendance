import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSlider = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const contStyle = {
		display: 'flex',
		padding: '0px',
		width: '40px',
		borderRadius: '10px',
		backgroundColor: theme ? 'lightgrey' : 'grey',
		justifyContent: theme ? 'flex-end' : 'flex-start',
		justifySelf: 'flex-end',
	};

	const rockerStyle = {
		margin: '0px',
		width: '20px',
		borderRadius: '10px',
		backgroundColor: theme ? 'grey' : 'white',
	};

	return (
		<div id='slider' style={contStyle} onClick={() => toggleTheme()}>
			<div style={rockerStyle}>{theme ? '🌘' : '🌕'}</div>
		</div>
	);
};

export default ThemeSlider;
