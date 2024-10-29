import GitHubSDK from "./github.api";
import * as types from "./github.types";

export const getReposFromApi = (login) => (dispatch, getState) => {
  const gh = new GitHubSDK();
  gh.getRepos(login).then((data) => dispatch(insertRepos(data)));
};

export const insertRepos = (repos) => {
  return { type: types.INSERT_REPOS, payload: { repos } };
};
export const setLogin = (login) => {
  return { type: types.SET_LOGIN, payload: { login } };
};

export const setFilterInput = (text) => {
  return { type: types.SET_FILTER_INPUT, payload: { text } };
};
