import { Component } from "react";
import Paper from "./Page";
import PropertiesSection from "./Components/PropertiesSection";
// import ToolBar from "./Components/ToolBar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      ElementsState: {},
      dragableElement: null,
      dropableElement: null,
      editableElementId: null,
      EditingElementId: null,
      Paper: {
        paperSize: "A4",
        pageHeight: 297,
        pageWidth: 210,
        pageOrientation: "Portrait", //Portrait and Landscape
        margin: "",
      },
      // PaperSize: "A4",
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      dropableElement: document.getElementById("MainPage"),
    });
  }
  componentDidUpdate() {}
  render() {
    return (
      <div className="home">
        <div className="PropertiesSection" id="PropertiesSection">
          <PropertiesSection obj={this} />
        </div>
        {/* <div className="ToolBox" id="ToolBox">
          <ToolBar obj={this} />
        </div> */}
        <div className="PaperArea" id="PaperArea">
          <Paper obj={this} />
        </div>
      </div>
    );
  }
}

export default Home;
