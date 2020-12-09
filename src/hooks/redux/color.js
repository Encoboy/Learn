import React, { createContext, useReducer } from "react";

export const ColorContext = createContext({});

export const UPDETE_COLOR = "UPDETE_COLOR";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDETE_COLOR:
      return action.color;
    default:
      return state;
  }
};

export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, "pink");

  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
