import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../stylesheet/index.scss';
import { ThemeProvider } from './ThemeContext';

var mountNode = document.getElementById('app');
ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	mountNode
);
