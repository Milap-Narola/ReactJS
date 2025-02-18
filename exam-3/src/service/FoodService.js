import API from "../config/Api";


export const getFoods = () => API.get('/foods');
export const createFood = (food) => API.post('/foods', food);
export const updateFood = (id, food) => API.put(`/foods/${id}`, food);
export const deleteFood = (id) => API.delete(`/foods/${id}`);
