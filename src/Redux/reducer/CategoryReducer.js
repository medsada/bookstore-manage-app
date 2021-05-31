const initial = {
  category: "toutes",
};

export const CategoryReducer = (state = initial, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};
