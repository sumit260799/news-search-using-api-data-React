import React from "react";
import {
  SET_LOADING,
  FETCH_DATA,
  REMOVE_DATA,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "./actions";
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
  if (action.type == REMOVE_DATA) {
    return {
      ...state,
      hits: state.hits.filter((story) => story.objectID !== action.payload),
    };
  }

  if (action.type == HANDLE_SEARCH) {
    return {
      ...state,
      query: action.payload,
      page: 0,
    };
  }
  if (action.type == HANDLE_PAGE) {
    if (action.payload === "inc") {
      let nextPage = state.page + 1;
      if (nextPage > state.nbPages - 1) {
        nextPage = 0;
      }
      return { ...state, page: nextPage };
    }
  }
  if (action.type == HANDLE_PAGE) {
    if (action.payload === "dec") {
      let prevPage = state.page - 1;
      if (prevPage < 0) {
        prevPage = state.nbPages - 1;
      }
      return { ...state, page: prevPage };
    }
  }
}

export default reducer;
