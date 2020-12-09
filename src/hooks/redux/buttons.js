import React, { useContext } from "react";
import { UPDETE_COLOR, ColorContext } from "./color";

function Buttons() {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: UPDETE_COLOR, color: "blue" })}>
        蓝色
      </button>
      <button onClick={() => dispatch({ type: UPDETE_COLOR, color: "red" })}>
        红色
      </button>
    </div>
  );
}

export default Buttons;
