import StackoverflowApi from "./stackoverflow.api";
import * as types from "./stackoverflow.types";

export const getDataFromApi = (text, filter) => (dispatch, getState) => {
  const api = new StackoverflowApi();
  api.getData(text, filter).then((data) => dispatch(insertData(data)));
};
export const insertData = (data) => {
  return { type: types.INSERT_DATA, payload: { data } };
};
export const setText = (text) => {
  return { type: types.SET_TEXT, payload: { text } };
};
export const setFilter = (filter) => {
  return { type: types.SET_FILTER, payload: { filter } };
};
