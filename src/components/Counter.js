import React, { useEffect, useState, useRef } from "react";
import withDate from "../hoc/withDate";
import RedDivTag from "./RedDivTag";

const Counter = ({no, user, say_hi, onChangeUser}) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  // console.log(12);

  const divRef = useRef()

  const new_func = () => {
    say_hi(no);
  };

  useEffect(() => {
    if (counter === 5){
      throw new Error("Error occured")
    }
  }, [counter])


  useEffect(() => {
    // let c = document.querySelectorAll('.test')[1]
    // console.log(c);
    // c.style.color = 'red'

    // console.log(divRef.current)
    // if (props.no === 2){

    //   let c = divRef.current
    //   c.style.color = 'red'
    // }
  } , [counter])

  return (
    <div>
      {/* <p>user = {user.email }</p> */}
      {/* <div ref={divRef} className="test">{counter}</div> */}
      <RedDivTag value={counter} user={user} onChangeUser={onChangeUser} />
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={new_func}>Test</button>
      </div>  
    </div>
  );
};

export default Counter;
