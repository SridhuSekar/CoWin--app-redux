import React, { Component } from "react";
import Child2 from "./Child2";
import DropDown from "./DropDown";

export class CombineComponents extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Combine Class</h1>

        <DropDown />
        <Child2 />
      </div>
    );
  }
}

export default CombineComponents;
