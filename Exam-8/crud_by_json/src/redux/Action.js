import { Api} from '../config/Api.js';
import { DELETE_RECIPES, GET_RECIPES, LOADING, PATCH_RECIPES, POST_RECIPES } from './ActionType.js';


export const getRecipes = () => async (dispatch) => {
    dispatch({ type: LOADING })
    let res = await Api.get("/recipeBook");

    dispatch({ type: GET_RECIPES, payload: res.data });
}
export const postRecipes = (payload) => async (dispatch) => {
    let res = await Api.post("/recipeBook", payload);
    dispatch({ type: POST_RECIPES, payload: res.data });
}
export const updateRecipes = (id) => async (dispatch) => {
    let res = await Api.patch(`/recipeBook/${id}`);
    dispatch({ type: PATCH_RECIPES, payload: id });
}
export const deleteRecipes = (id) => async (dispatch) => {
    let res = await Api.delete(`/recipeBook/${id}`);
    dispatch({ type: DELETE_RECIPES, payload: id });
}