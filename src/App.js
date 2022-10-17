import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import "./App.css";
import TodoClass from "./components/ToDoClass";
import Sample from "./components/Sample";
import PropType from "./components/PropType";
import ErrorBoundary from "./components/ErrorBoundary";
import userEvent from "@testing-library/user-event";

function App() {
  let [test, setTest] = useState(12);
  const [show, setShow] = useState(false);
  const [todoShow, setTodoShow] = useState(true);
  const [value, setValue] = useState(15);
  const [user, setUser] = useState({id: 3, name: 'Amin', email: 'test@gmail.com'})

  // useEffect(() => {
  //   setTest(15);
  //   console.log(test);
  //   console.log("useEffect");
  // });
  const say_hi = (val) => {
    console.log(`Called from ${val} counter`);
  };
  console.log("App js rendered");
  return (
    <div style={{ marginLeft: "5rem" }}>
      <p>user: {user.name}</p>
      <PropType title="Test title" onClick={() => alert("Clicked")} />
      <Sample value={value} />
      <button
        onClick={() => {
          // setValue(value + 15)
          setShow(!show);
        }}
        on
      >
        Change Value
      </button>
      <p>{test}</p>
     <ErrorBoundary> <Counter say_hi={say_hi} no={1} user={user} onChangeUser={setUser} /></ErrorBoundary>
      {/* <Counter say_hi={say_hi} no={2} />
      <Counter say_hi={say_hi} no={3} /> */}
      <hr />
      {todoShow && <ToDo />}
      <button onClick={() => setTodoShow(!todoShow)}>Toggle</button>
      <hr />
      <ErrorBoundary><TodoClass  test={10}>new child</TodoClass></ErrorBoundary>
      {/* {show ? <p className="test">TEst data</p> : null} */}
      {show && <p className="test">TEst data</p>}
      <button onClick={() => setShow(!show)}>Toggle</button>
      <p className="active">Active from todo</p>
    </div>
  );
}

//   return (
//     <div className="test" style={{ marginLeft: "5rem" }}>
//       <Header data={data} newAttrib="Test" log={log} color="green">
//         <p>Paragraph</p>
//       </Header>
//       <Header color="tomato" log={log}>
//         {data}
//       </Header>
//       {/* <Header data="TEst data" />
//       <Header /> */}
//     </div>
//   );
// }

export default App;

// Components

// 1. Functional Based
// 2. Class Based

//

// Default export
// module.exports = App

// // Named Export

// export App

// module.exports = {App}
