import { createStore } from 'redux';

function rootReducer(state = {}, action) {
	return {
  	recipeList: recipeListReducer(state.recipeList, action),
    criteria: criteriaReducer(state.criteria, action)
  }
}

const criteriaReducer = (criteria = [], action) => {
    switch (action.type) {
      case 'ADD_CRITERIA':
        return [...criteria, action.criteria];
      case 'WIPE_CRITERIA':
        return [];
      default:
        return criteria;
    }
  };
  
const recipeListReducer = (recipeList = [], action) => {
switch (action.type) {
    case 'SET_RECIPES':
    return action.recipes;
    default:
    return recipeList;
    }
};
  
  
const store = createStore(rootReducer);
export default store;