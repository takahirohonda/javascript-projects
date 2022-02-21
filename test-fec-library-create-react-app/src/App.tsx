// import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { TestFedComponents } from "./TestFedComponents";
import Select from "react-select";
import { CubeLoadingSpinner } from "@mdhnpm/react-cube-loading-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing libraries</h1>
        <Select></Select>
        <CubeLoadingSpinner
          mainColor="pink"
          secondaryColor="purple"
          spinnerWidth="32px"
          spinnerSpeed="2s"
        />
      </header>
    </div>
  );
}

export default App;
