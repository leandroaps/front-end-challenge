import React, {createContext, useReducer, useEffect} from "react";

const initialState = {
  products: [],
  favourites: [],
};

const localState = JSON.parse(localStorage.getItem("amaro"));

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {...state, products: action.payload};
    case "ADD_FAV":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
}
export const Store = createContext();

export function StoreProvider({children}) {
  const [state, dispatch] = useReducer(reducer, localState || initialState);
  const value = {state, dispatch};

  useEffect(() => {
    localStorage.setItem("amaro", JSON.stringify(state));
  }, [state]);

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
