import { DELETE_RECIPES, GET_RECIPES, LOADING, PATCH_RECIPES, POST_RECIPES } from "./ActionType";

let initialState = {
  recipeBook: [],
  isLoading: false,
};

export const reciptReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipeBook: payload,
        isLoading: false,
      };

    case POST_RECIPES:
      return {
        ...state,
        recipeBook: [...state.recipeBook, payload],
      };
    case PATCH_RECIPES:
      return {
        ...state,
        recipeBook: state.recipeBook.filter((recipeBook) => recipeBook.id != payload),
      };
    case DELETE_RECIPES:
      return {
        ...state,
        blogs: state.recipeBook.filter((recipeBook) => recipeBook.id != payload),
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
