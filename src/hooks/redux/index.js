import React from "react";
import Show from "./show";
import Buttons from "./buttons";
import { Color } from "./color";

function Index() {
  return (
    <div>
      <Color>
        <Show />
        <Buttons />
      </Color>
    </div>
  );
}

export default Index;
