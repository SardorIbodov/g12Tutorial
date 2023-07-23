const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [...state, action.newTask];
    }
    case "check": {
      return state.map((t) => {
        if (t.id === action.id) {
          return { ...t, checked: !t.checked };
        } else return t;
      });
    }
    case "delete": {
      return state.filter((t) => t.id !== action.id);
    }
  }
};
export default reducer;
