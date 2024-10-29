const initState = { login: "", filterInput: "", repos: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "insertRepos":
      console.log(action.payload.repos);
      return { ...state, repos: action.payload.repos };
    case "setFilterInput":
      return { ...state, filterInput: action.payload.text };
    case "setLogin":
      return { ...state, login: action.payload.login };
    default:
      return state;
  }
};
export default reducer;
