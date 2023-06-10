import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

import {
  SET_LOADING,
  FETCH_DATA,
  REMOVE_DATA,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "./actions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
const AppContext = createContext();
const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  page: 0,
  nbPages: 0,
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const item = await response.json();
      dispatch({
        type: FETCH_DATA,
        payload: { hits: item.hits, nbPages: item.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const removeData = (id) => {
    dispatch({ type: REMOVE_DATA, payload: id });
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  return (
    <AppContext.Provider
      value={{ ...state, removeData, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
