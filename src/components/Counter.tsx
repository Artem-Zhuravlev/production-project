import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button className={classes.counter} onClick={increment}>Counter {count}</button>
    </div>
  )
}