import {
  SORT_LIST_NAME,
  SORT_LIST_PRICE
} from "../actionTypes/shopActionTypes";

const initState = [
		{
			id: 0,
			nazwa: "kawa",
			cena: "1 PLN", 
			opis: "raz"
		},
		{
			id: 1,
	    	nazwa: "fajki klubowe",
			cena: "5 PLN", 
			opis: "dwa"
		},
		{
			id: 2,
	    	nazwa: "mocne fajki",
			cena: "3 PLN", 
			opis: "trzy"
		}
	];

export default function products(state = initState, action) {	
  const compare = (property) => {
		return (a, b) => {
			if (a[property] < b[property])
	    		return -1;
	  		else if (a[property] > b[property])
	    		return 1;
	  		else 
	    		return 0;
			}; 
	},
	copy = Object.assign([], state);

	// Stan nie może być mutowany
	// return [...state, action.payload.todo];
  
  switch(action.type) {
	case SORT_LIST_NAME:
      return copy.sort(compare("nazwa"));
    case SORT_LIST_PRICE:  
      return copy.sort(compare("cena"));
    default:
      return state;
  }
}