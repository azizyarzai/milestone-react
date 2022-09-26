import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import "./App.css"

function App() {
  let [test, setTest] = useState(12);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTest(15);
    console.log(test);
    console.log("useEffect");
  });
  const say_hi = (val) => {
    console.log(`Called from ${val} counter`);
  };
  console.log(test);
  return (
    <div style={{ marginLeft: "5rem" }}>
      <p>{test}</p>
      <Counter say_hi={say_hi} no={1} />
      <Counter say_hi={say_hi} no={2} />
      <Counter say_hi={say_hi} no={3} />
      <hr />
      <ToDo />
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
