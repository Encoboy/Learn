import React, { useState } from "react";

function Gift(props) {
  const { active } = props;
  console.log("props1", active);

  if (!active) {
    return null;
  }
  const publicUrl = "http://127.0.0.1:3000/index/time";
  function order() {
    console.log("下单");
    fetch(publicUrl)
      .then((res) => res.json())
      .then((res) => {
        let now = res.data;
        let endTime = now + 1800000;
        localStorage.setItem("endTime", endTime);
      });
  }

  return (
    <div>
      <div>礼物</div>
      <button onClick={() => order()}>下单</button>
    </div>
  );
}

export default Gift;
