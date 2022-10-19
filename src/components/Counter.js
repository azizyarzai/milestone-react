import React, { useEffect, useState, useRef } from "react";
import withDate from "../hoc/withDate";
import RedDivTag from "./RedDivTag";

const Counter = ({ no, say_hi }) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const [user, setUser] = useState(null);
  // console.log(12);

  const divRef = useRef();

  const new_func = () => {
    say_hi(no);
  };

  useEffect(() => {
    if (counter === 5) {
      throw new Error("Error occured");
    }
  }, [counter]);

  useEffect(() => {
    // let c = document.querySelectorAll('.test')[1]
    // console.log(c);
    // c.style.color = 'red'
    // console.log(divRef.current)
    // if (props.no === 2){
    //   let c = divRef.current
    //   c.style.color = 'red'
    // }
  }, [counter]);

  useEffect(() => {
    fetch("https://api.github.com/users/azizyarzai")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  return (
    <div>
      {/* <p>user = {user.email }</p> */}
      {/* <div ref={divRef} className="test">{counter}</div> */}
      <RedDivTag value={counter} />
      <div>
        {user && <img src={user.avatar_url} width={150} height={150} />}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={new_func}>Test</button>
      </div>
    </div>
  );
};

export default Counter;
