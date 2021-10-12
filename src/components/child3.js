import React, { Component } from "react";
import { connect } from "react-redux";

import "./CssFiles/table.css";
class Child3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivedData: [],
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <>
        {this.props.data.map((rowData) => (
          <tr key={rowData.center_id}>
            <td>{rowData.center_id}</td>
            <td>{rowData.district_name}</td>
            <td>{rowData.block_name}</td>
          </tr>
        ))}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Child3);
