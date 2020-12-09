import React, { useState, useCallback, useEffect, useMemo } from "react";

function Call() {
  const [count, setCount] = useState(0);
  function heihei() {
    console.log("嘿嘿");
  }
  useEffect(() => {
    console.log("useEffect");
    heihei();
  }, [count]);

  function haha() {
    console.log("哈哈");
  }

  const getData = useCallback(() => {
    haha();
  }, []);
  getData();

  function add() {
    setCount(count + 1);
  }

  function momo() {
    console.log("momo!");
  }

  useMemo(() => {
    momo();
  }, []);

  return <div onClick={add}>{count}</div>;
}

export default Call;
