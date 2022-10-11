import { AppRouter } from './router';
import './main.css'
import { ThemeProvider } from './context/ThemeProvider';

export const PortfolioApp = () => {

	return (
		<ThemeProvider>
			<AppRouter />
		</ThemeProvider>
	)
}
