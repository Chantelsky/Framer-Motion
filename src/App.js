import * as React from "react";
import "./styles.css";
// import { Animation } from "./components/Animation";
// import { Keyframes } from "./components/Keyframes";
// import { Gesture } from "./components/Gesture";
import { Draggable } from "./components/Draggable";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      {/* <Animation key={count} /> */}
      {/* <Keyframes /> */}
      {/* <Gesture /> */}
      <Draggable />
    </div>
  );
}
