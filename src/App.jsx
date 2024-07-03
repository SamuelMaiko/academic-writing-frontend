import React from "react";
import "./App.css";
import EntryPoint from "./EntryPoint";
import { BrowserRouter } from "react-router-dom";
import StateContext from "./Context/StateContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <EntryPoint />
        </StateContext>
      </BrowserRouter>
    </>
  );
};

export default App;
