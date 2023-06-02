import React, { createContext, memo, useContext, useState } from "react";
import { createRoot } from "react-dom/client";

import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import Footer from "./components/Footer";

import OurContext from "./OurContext";

const AnimalNamesContext = createContext();

function App() {
  const [size, setSize] = useState(25);
  const [color, setColor] = useState("skyblue");
  const [likeCount, setLikeCount] = useState(0);
  const [names, setNames] = useState({
    catName: "Meowsalot",
    dogName: "Barksalot",
  }); //solution, react will hold onto this value between re-renders, so it knows the value hasn't change

  return (
    <AnimalNamesContext.Provider
      value={names}
      // value={{ catName: "Meowsalot", dogName: "Barksalot" }}
    >
      //react knows if primitive values is used and hasn't changed // but react
      performs shallow comparison bcs it is an object (assumed new values) //
      using an object on the context value will cause caveat re-render effect
      <OurContext.Provider
        value={{ color, size, likeCount, setColor, setSize, setLikeCount }}
      >
        <div className="grid-parent">
          <div className="header">
            <h1>Welcome To Our App</h1>
            <p>
              The current size is {size} and the current color is {color}.
            </p>
            <p>
              This page has been liked <strong>{likeCount}</strong> times.
            </p>
          </div>
          <Sidebar />
          <MainArea />
          <Footer />
          <MemoizedExtraComponent />
        </div>
      </OurContext.Provider>
    </AnimalNamesContext.Provider>
  );
}

//created a new version of the component
//only re-execute the function if it's being given new input, to return something new
const MemoizedExtraComponent = memo(ExtraComponent);

function ExtraComponent() {
  const names = useContext(AnimalNamesContext);
  // const example = useContext(OurContext);
  console.log("Imagine this function is very slow to run.");

  return (
    <div>
      <p>Hello</p>
      <p>World</p>
      <p>Cat Name: {names.catName}</p>
      <p>Dog Name: {names.dogName}</p>
    </div>
  );
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
