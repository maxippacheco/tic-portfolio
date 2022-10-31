import { lazy, LazyExoticComponent } from 'react';
import { PresentationPage } from '../pages';

type JSXComponent = () => JSX.Element;

interface Route{
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}


// cambiar nombre del chunk
const AboutLazy = lazy(() => import(/* webpackChunkName: "AboutPage" */ '../pages/AboutPage'));
const HobbiesLazy = lazy(() => import(/* webpackChunkName: "HobbiesPage" */ '../pages/HobbiesPage'));
const HomeLazy = lazy(() => import(/* webpackChunkName: "HomePage" */ '../pages/HomePage'));
const KnowledgeLazy = lazy(() => import(/* webpackChunkName: "KnowledgePage" */ '../pages/KnowledgePage'));
const SchoolLazy = lazy(() => import(/* webpackChunkName: "SchoolPage" */ '../pages/SchoolPage'));
const SportsLazy = lazy(() => import(/* webpackChunkName: "SportsPage" */ '../pages/SportsPage'));


export const routes: Route[] = [
	{
		path: '/about',
		to: '/about',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: AboutLazy,
		name: 'About-Page'
	},
	{
		path: '/hobbies',
		to: '/hobbies',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: HobbiesLazy,
		name: 'Hobbies-Page'
	},
	{
		path: '/home',
		to: '/home',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: HomeLazy,
		name: 'Home-Page'
	},
	{
		path: '/knowledge',
		to: '/knowledge',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: KnowledgeLazy,
		name: 'Knowledge-Page'
	},
	{
		path: '/school',
		to: '/school',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: SchoolLazy,
		name: 'School-Page'
	},
	{
		path: '/sports',
		to: '/sports',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: SportsLazy,
		name: 'Sports-Page'
	},
	{
		path: '/',
		to: '/',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: PresentationPage,
		name: 'Presentation-Page'
	},
];