import { AppRouter } from './router';
import './main.css'
import { ThemeProvider } from './context/ThemeProvider';
import { Suspense } from 'react';
import { Loader } from './components/loader';

export const PortfolioApp = () => {

	return (
		<Suspense fallback={ <Loader /> }>
			<ThemeProvider>
				<AppRouter />
			</ThemeProvider>
		</Suspense>
	)
}
