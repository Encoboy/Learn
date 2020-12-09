import React, { useState, useEffect } from "react";
import Daojishi from "./daojishi";

function Active(props) {
  console.log("props:", props);
  const { active } = props;

  if (active) {
    return null;
  }
  return (
    <div>
      <Daojishi />
    </div>
  );
}

export default Active;
