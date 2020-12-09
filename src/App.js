import React, { useState, useEffect } from "react";
// hooks
import Active from "./hooks/component/active";
import Gift from "./hooks/component/gift";
import Index from "./hooks/redux/index";
import Call from "./hooks/hooks/useCallback";


function App() {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* <div>
        <div onClick={() => setActive(0)}>Active</div>
        <div onClick={() => setActive(1)}>Gift</div>
      </div>
      <div>
        <Active active={active} />
        <Gift active={active} />
      </div>
      <Index />
      <Call /> */}
    </div>
  );
}

export default App;
