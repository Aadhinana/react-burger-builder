import * as actionType from "../actions/actions";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: null
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      const updatedIngs = {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      };
      return {
        ...state,
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
      };
    case actionType.REMOVE_INGREDIENT:
      if (!state.ingredients[action.ingredientName]) return state;
      const udpateIngs = {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      };
      return {
        ...state,
        ingredients: udpateIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
      };
    case actionType.INIT_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
      };
    case actionType.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
