import React, { createContext, useState } from 'react';

const theme = {
	theme: false,
	toggleTheme: () => {},
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);

	const themeObj = {
		theme: theme,
		toggleTheme: () => {
			setTheme((prevTheme) => !prevTheme);
		},
	};

	return (
		<ThemeContext.Provider className={theme ? 'night' : 'day'} value={themeObj}>
			{children}
		</ThemeContext.Provider>
	);
};
