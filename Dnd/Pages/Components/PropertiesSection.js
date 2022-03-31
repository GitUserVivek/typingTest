// import axios from "axios";

import FontSizeImg from "./../../Assets/fontSize.png";
import PageOrientationImg from "./../../Assets/pageOrientation.png";
import PageSizeImg from "./../../Assets/pageSize.png";
import PageMarginImg from "./../../Assets/margin.png";
import ColorImg from "./../../Assets/color.png";
import thirdImg from "./../../Assets/Logo (2).jpg";

const PropertiesSection = ({ obj }) => {
  const handelDragStart = (e) => {
    obj.state.dragableElement = e.target;
    obj.state.editableElementId = e.target.id;
  };

  return (
    <div className="PropertiesToolBar">
      <button
        className="saveButton"
        onClick={async (e) => {
          // let url = "http://localhost:2002/state";
          // let res = await axios.post(url, {
          //   ElementsState: obj.state.ElementsState,
          //   editableElementId: obj.state.editableElementId,
          //   EditingElementId: obj.state.EditingElementId,
          //   Paper: obj.state.Paper,
          // });
          // if (res.status === 201) {
          //   alert(
          //     `Saved Template.. : Status Code..:${res.status} Status Desc : ${res.statusText} `
          //   );
          // } else {
          //   alert(res.status);
          // }
        }}
      >
        SaveAsTemplate
      </button>
      {/*  PageLayout Div..  ___________________________________________________________________________________ */}

      <span className="title">PageLayOut</span>
      <div className="PageLayout">
        <span className="singleProp">
          <img
            src={PageMarginImg}
            alt="PageMarginImg"
            className="propertyLogo"
          />
          {/* <span> */}
          <input
            type="number"
            id="MarginInput"
            className="smallInput0"
            onChange={(e) => {
              var elem = document.getElementById("MainPage");
              obj.state.Paper.margin = e.target.value;
              if (elem != null) {
                elem.style.margin = e.target.value
                  ? `${e.target.value}px`
                  : `1rem`;
              }
            }}
          />
          {/* </span> */}
        </span>

        {/* <span>Orientation</span> */}
        <span className="singleProp">
          <img
            src={PageOrientationImg}
            alt="PageOrientationImg"
            className="propertyLogo"
          />
          <select
            id="dropdown"
            onChange={(e) => {
              obj.setState({
                ...obj.state,
                Paper: {
                  ...obj.state.Paper,
                  pageOrientation: e.target.value,
                },
              });
            }}
          >
            <option value="Portrait">Portrait</option>
            <option value="Landscape">Landscape</option>
          </select>
        </span>
        <span className="singleProp">
          <img src={PageSizeImg} alt="Pagesizeimage" className="propertyLogo" />
          <select
            id="dropdown"
            onChange={(e) => {
           
              switch (e.target.value) {
                case "A0":
                  obj.setState({
                    ...obj.state,
                    dropableElement: document.getElementById(`PageA0`),
                    Paper: {
                      ...obj.state.Paper,
                      paperSize: e.target.value,
                      pageHeight: 1189,
                      pageWidth: 841,
                    },
                  });
                  break;
                case "A1":
                  obj.setState({
                    ...obj.state,
                    dropableElement: document.getElementById(`PageA1`),
                    Paper: {
                      ...obj.state.Paper,
                      paperSize: e.target.value,
                      pageHeight: 841,
                      pageWidth: 594,
                    },
                  });
                  break;
                case "A2":
                  obj.setState({
                    ...obj.state,
                    dropableElement: document.getElementById(`PageA2`),
                    Paper: {
                      ...obj.state.Paper,
                      paperSize: e.target.value,
                      pageHeight: 594,
                      pageWidth: 420,
                    },
                  });
                  break;
                case "A3":
                  obj.setState({
                    ...obj.state,
                    dropableElement: document.getElementById(`PageA3`),
                    Paper: {
                      ...obj.state.Paper,
                      paperSize: e.target.value,
                      pageHeight: 420,
                      pageWidth: 297,
                    },
                  });
                  break;
                case "A4":
                  obj.setState({
                    ...obj.state,
                    dropableElement: document.getElementById(`PageA4`),
                    Paper: {
                      ...obj.state.Paper,
                      paperSize: e.target.value,
                      pageHeight: 297,
                      pageWidth: 210,
                    },
                  });
                  break;
                default:
                  break;
              }
            
            }}
          >
            <option value="A4">A4</option>
            <option value="A0">A0</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
          </select>
        </span>

        {/* <span></span> */}
      </div>
      {/* Elements div..  ___________________________________________________________________________________ */}
      <span className="title">Elements</span>

      <div className="PropertyElements">
        {/*   Id 1  is Text */}
        <span
          id="1"
          draggable="true"
          name="textElement"
          onDragStart={(e) => handelDragStart(e)}
        >
          TEXT
        </span>

        {/* Id 2 is Table.. */}
        <span
          draggable="true"
          onDragStart={(e) => handelDragStart(e)}
          id="2"
          className="DragableElement"
          style={{
            resize: " both",
            width: " 40px",
            height: " 40px",
            fontSize: "1px",
            overflow: "scroll",
            backgroundColor: " l",
          }}
        >
          <table
            border="2"
            className="dragableTable"
            style={{
              borderCollapse: "collapse",
              height: "100%",
              width: "100%",
            }}
          >
            <tbody>
              <tr>
                <td> t </td>
                <td> t </td>
                <td> t </td>
              </tr>
              <tr>
                <td> t </td>
                <td> t </td>
                <td> t </td>
              </tr>
              <tr>
                <td> t </td>
                <td> t </td>
                <td> t </td>
              </tr>
            </tbody>
          </table>
        </span>

        {/* Id 3 Must Line.. */}
        <div
          id="3"
          draggable="true"
          onDragStart={(e) => handelDragStart(e)}
          className="propertyElementLine"
        ></div>
        {/* Id 4 is Image.. */}

        <span
          draggable="true"
          onDragStart={(e) => handelDragStart(e)}
          id="4"
          className="DragableElement LogoImage"
          style={{ height: "40px" }}
        >
          <img
            src={thirdImg}
            alt="img"
            style={{ height: "100%", width: "100%" }}
            draggable="false"
          />
        </span>

        {/* Id 5 is Circle.. */}
        <div
          id="5"
          draggable="true"
          style={{
            border: "1px solid black",
            background: "transparent",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
          }}
          onDragStart={(e) => handelDragStart(e)}
          className="circle"
        ></div>
        {/* Id 6 is Rectangle.. */}
        <div
          id="6"
          draggable="true"
          style={{
            border: "1px solid black",
            background: "transparent",
            height: "50px",
            width: "50px",
          }}
          onDragStart={(e) => handelDragStart(e)}
          className="circle"
        ></div>
      </div>

      {/* Fontstyle div..  ___________________________________________________________________________________ */}

      {/* <span> */}
      <span className="title">Font Style</span>
      <div className="FontStyle">
        <span className="singleProp">
          <img src={FontSizeImg} alt="FontSizeImg" className="propertyLogo" />

          <input
            type="number"
            id="FontSizeInput"
            className="smallInput1"
            onKeyDown={(e) => {
              if (e.key === "Enter" && obj.state.dragableElement) {
                obj.state.ElementsState[obj.state.EditingElementId][
                  obj.state.dragableElement.id
                ].fontSize = `${e.target.value}px`;
                document.getElementById(
                  obj.state.editableElementId
                ).style.fontSize =
                  obj.state.ElementsState[obj.state.EditingElementId][
                    obj.state.dragableElement.id
                  ].fontSize;
                document.getElementById(
                  obj.state.editableElementId
                ).style.fontSize =
                  obj.state.ElementsState[obj.state.EditingElementId][
                    obj.state.dragableElement.id
                  ].fontSize;
              }
            }}
          />
        </span>

        <span className="singleProp">
          <img src={ColorImg} alt="ColorImg" className="propertyLogo" />
          <input
            type="color"
            id="ColorSelector"
            style={{
              height: "25px",
              width: "25px",
            }}
            onChange={(e) => {
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].color = e.target.value;
              document.getElementById(obj.state.editableElementId).style.color =
                obj.state.ElementsState[obj.state.EditingElementId][
                  obj.state.editableElementId
                ].color;
            }}
          ></input>
        </span>
        <span>
          <span
            className="FontNormal"
            onClick={(e) => {
              let state = obj.state.ElementsState;
              if (state[obj.state.EditingElementId]) {
                if (
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontWeight.includes("bold")
                ) {
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontWeight = "500";
                  e.target.className = "FontNormal";
                } else {
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontWeight = "bold";
                  e.target.className = "FontActive";
                }
                document.getElementById(
                  obj.state.editableElementId
                ).style.fontWeight =
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontWeight;
              }
            }}
          >
            B
          </span>
          <span
            className="FontNormal"
            onClick={(e) => {
              let state = obj.state.ElementsState;
              if (state[obj.state.EditingElementId]) {
                if (
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontStyle.includes("italic")
                ) {
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontStyle = "normal";
                  e.target.className = "FontNormal";
                } else {
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontStyle = "italic";
                  e.target.className = "FontActive";
                }
                document.getElementById(
                  obj.state.editableElementId
                ).style.fontStyle =
                  state[obj.state.EditingElementId][
                    obj.state.editableElementId
                  ].fontStyle;
              }
            }}
          >
            I
          </span>
        </span>
      </div>
      {/* </span> */}

      {/* Properties div..  ___________________________________________________________________________________ */}

      <span className="title">Properties</span>
      <div className="PropertiesContainer">
        <span className="PropertiesHeandings">Properties</span>

        <span className="PropertiesHeandings">Values</span>

        <span> Value</span>

        <span>
          <input
            type="text"
            id="ValueInput"
            className="smallInput3"
            onChange={(e) => {
              var elem = document.getElementById(obj.state.editableElementId);
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].value = e.target.value;
              if (elem != null) elem.innerText = `${e.target.value}`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let TempElem = obj.state.editableElementId;
                obj.state.editableElementId = null;
                e.target.value = "";
                e.target.blur();
                obj.state.editableElementId = TempElem;
              }
            }}
          />
        </span>
      </div>
    </div>
  );
};
export default PropertiesSection;
