import React, { useEffect, useState, useRef } from "react";

const Counter = ({ no, say_hi, ...props }) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const [user, setUser] = useState(null);

  console.log(props);

  const new_func = () => {
    say_hi(no);
  };

  // useEffect(() => {
  //   if (counter === 5) {
  //     throw new Error("Error occured");
  //   }
  // }, [counter]);

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
      <div>
        {/* {user && <img src={user.avatar_url} width={150} height={150} />} */}
        <span>{counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={new_func}>Test</button>
      </div>
    </div>
  );
};

export default Counter;
