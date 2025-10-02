import { useState } from "react";
import Output from "./Output";
function Greeting() {
  const [changed, setChanged] = useState(false);

  function changeTextHandler() {
    setChanged(true);
  }
  return (
    <>
      <div>
        <h2>Hello</h2>
        {!changed && <Output>good to see you</Output>}
        {changed && <Output>Changed!</Output>}
        <button onClick={changeTextHandler}> Change Text</button>
      </div>
    </>
  );
}

export default Greeting;
