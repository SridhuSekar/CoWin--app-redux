import React, { Component } from "react";
import Child3 from "./child3";
import "./CssFiles/table.css";
import { connect } from "react-redux";

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

   render() {
    return (
      <div>
        <h1>This data is from Child2 component</h1>
        <table>
          <tr>
            <th>Centre ID</th>
            <th>District Name</th>
            <th>Block name</th>
          </tr>

          <Child3 />
        </table>
        <div></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Child2);
