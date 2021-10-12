import React, { Component } from "react";
import Select from "react-select";
import { fetchData } from "../redux/action";
import { connect } from "react-redux";

const stateOptions = [
  { value: "Tamilnadu", label: "Tamilnadu" },
  { value: "Kerala", label: "Kerala" },
];

const districtOptions = [
  { value: "561", label: "Sivaganga", state: "Tamilnadu" },
  { value: "580", label: "Sivakasi", state: "Tamilnadu" },
  { value: "567", label: "Ramanathapuram", state: "Tamilnadu" },
  { value: "546", label: "Pudukkottai", state: "Tamilnadu" },
  { value: "548", label: "Tirunelveli", state: "Tamilnadu" },
  { value: "539", label: "Coimbatore", state: "Tamilnadu" },
  { value: "296", label: "Thiruvananthapuram", state: "Kerala" },
  { value: "303", label: "Thrissur", state: "Kerala" },
  { value: "301", label: "Alappuzha", state: "Kerala" },
  { value: "304", label: "Kottayam", state: "Kerala" },
  { value: "305", label: "Kozhikode", state: "Kerala" },
  { value: "302", label: "Malappuram", state: "Kerala" },
];

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      selectedState: "",
      selectedDistrict: "",
      dynamicdistrict: [],
      districtvalue: "",
      receivedData: [],
    };
  }

  onStateSelect = (stateObj) => {
    this.setState({ selectedState: stateObj.value });
    let dynamicdataforDistrict = districtOptions.filter(
      (e) => e.state === stateObj.value
    );

    this.setState({ dynamicdistrict: dynamicdataforDistrict });
  };

  onDistrictSelect = (districtObj) => {
    this.setState({ districtvalue: districtObj.value });
  };

  onAddButtonClick = () => {
    this.props.fetchData(this.state.districtvalue);
    //const datum = this.props.data;

    //this.setState({ receivedData: datum });
  };

  render() {
    const { keyStateselect, keyDistrictselect } = this.state;

    return (
      <div>
        <div>
          <Select
            placeholder="Select State"
            value={keyStateselect}
            onChange={this.onStateSelect}
            options={stateOptions}
          />
        </div>

        <div>
          <Select
            placeholder="Select District"
            value={keyDistrictselect}
            onChange={this.onDistrictSelect}
            options={this.state.dynamicdistrict}
          />
        </div>

        <div>
          <button onClick={this.onAddButtonClick}>ADD</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (districtvalue) => dispatch(fetchData(districtvalue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
