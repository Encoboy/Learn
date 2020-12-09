import React, { useState, useEffect } from "react";

// 这个页面每次进来应该要去请求一个接口，下单时间的接口

function Daojishi() {
  const [msg, setMsg] = useState("倒计时");
  useEffect(() => {
    async function fetchData() {
      let endTime = localStorage.getItem("endTime");
      if (endTime !== null) {
        let nowTime = new Date().valueOf();
        let timeCha = endTime - nowTime;
        console.log("timeChat", timeCha);
        timeTransition(timeCha);
      }
    }
    fetchData();
  }, []);

  async function timeTransition(ms) {
    console.log("ms:", ms);
    let maxtime = ms / 1000; //按秒计算
    console.log("maxTime:", maxtime);
    let timer = null;
    setTimeout(function f() {
      if (maxtime >= 0) {
        let minutes = Math.floor(maxtime / 60);
        let seconds = Math.floor(maxtime % 60);
        minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes);
        seconds < 10 ? (seconds = "0" + seconds) : (seconds = seconds);
        let msg = "请在 " + minutes + "分" + seconds + "秒内完成支付";
        setMsg(msg);
        --maxtime;
      } else {
        setMsg("订单已过期，请重新下单");
        localStorage.removeItem("endTime");
        clearTimeout(timer);
        return;
      }
      timer = setTimeout(f, 1000);
    }, 1000);
  }

  return (
    <div>
      <div>{msg}</div>
    </div>
  );
}
export default Daojishi;
