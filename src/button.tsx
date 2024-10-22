import { useState } from "react";
import './App.css'
function Button() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button className="button-27"onClick={handleClick}> {count} </button>;
}

export default Button;
