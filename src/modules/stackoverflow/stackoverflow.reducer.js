const initState = { text: "", filter: "", data: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "insertData":
      console.log(action.payload.data);
      return { ...state, data: action.payload.data.items };
    case "setText":
      return { ...state, text: action.payload.text };
    case "setFilter":
      console.log(action.payload.filter);
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
};
export default reducer;
