import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonClose, ButtonBasic } from "afec";
// import { ButtonClose, ButtonBasic } from "./fec";
import Select from "react-select";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ButtonClose />
        <ButtonBasic>Hello Button Basic</ButtonBasic>
        <ButtonBasic isLoading={true}>Hello Button Basic</ButtonBasic>
        <Select></Select>
      </header>
    </div>
  );
}

export default App;
