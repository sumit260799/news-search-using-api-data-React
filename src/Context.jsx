import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

import { SET_LOADING, FETCH_DATA } from "./actions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
const AppContext = createContext();
const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
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
    fetchData(API_ENDPOINT);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
