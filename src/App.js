import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ marginLeft: "5rem" }}>
      <Counter />
      <Counter />
      <Counter />
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
