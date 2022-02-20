import React from "react";
// For manual install into node_modules
// import { ButtonClose, ButtonBasic } from "afec";
import { ButtonClose, ButtonBasic } from "../afec";

function TestFedComponents() {
  return (
    <>
      <ButtonClose />
      <ButtonBasic>Hello Button Basic</ButtonBasic>
      <ButtonBasic isLoading={true}>Hello Button Basic</ButtonBasic>
    </>
  );
}

export default TestFedComponents;
