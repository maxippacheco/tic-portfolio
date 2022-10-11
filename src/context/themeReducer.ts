import { ThemeState } from './';

type ThemeActionType = 
	| { type: '[Theme] - Toggle Theme' }
;


export const themeReducer = ( state: ThemeState, action: ThemeActionType ): ThemeState => {  


 switch ( action.type ) {  

	 case '[Theme] - Toggle Theme':
		 return {
			 ...state,
		 }
	 
	 default:
		 return state;
	}
 

}