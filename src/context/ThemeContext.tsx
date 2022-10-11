import { createContext } from 'react';

interface ContextProps{
	isDark: boolean;
}


export const ThemeContext = createContext({} as ContextProps);