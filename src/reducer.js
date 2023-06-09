import React from "react";
import { SET_LOADING, FETCH_DATA } from "./actions";
function reducer(state, action) {
  if (action.type == SET_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type == FETCH_DATA) {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
    };
  }
}

export default reducer;
