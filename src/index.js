import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root")
const root = ReactDOM.createRoot(element)

const App =() => {
  return <div>Hello React</div>
}

root.render(<App/>)