const initState = { text: "", filter: "", data: [] };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "insertData":
      return { ...state, data: action.payload.data.items };
    case "setText":
      return { ...state, text: action.payload.text };
    case "setFilter":
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
};

