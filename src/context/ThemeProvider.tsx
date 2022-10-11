import { useReducer } from 'react';
import { FC } from 'react';
import { themeReducer, ThemeContext } from './';

interface FCProps{
 children: React.ReactNode;
}

export interface ThemeState {
 isDark: boolean;
}


const Theme_INITIAL_STATE: ThemeState = {
 isDark: false,
}


const { Provider } = ThemeContext;

export const ThemeProvider: FC<FCProps> = ({ children }) => {

const [state, dispatch] = useReducer(themeReducer, Theme_INITIAL_STATE)

	return(
		<Provider value={{
			...state
		}}>
			{ children}
		</Provider>
	)
}