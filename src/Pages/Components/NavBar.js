import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../Styles/Components.css";
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>
          {/* <NavLink to="/Home" className="NavItem printButton"> */}
           <span className="NavItem printButton">  Home </span>
          {/* </NavLink> */}
          <button
            className="printButton NavItem"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
        <span>Drag-And-Drop-Invoice..</span>
      </div>
    );
  }
}
export default NavBar;
