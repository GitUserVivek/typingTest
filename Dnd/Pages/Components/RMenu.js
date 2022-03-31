import { stylingElement } from "../Events/EventsForDrop";

const RMenu = ({ left, top, obj }) => {
  const addElement = (id) => {
    obj.state.EditingElementId = id;

    if (obj.state.ElementsState[id]) {
      //  checking if the element of id 1 is already present and finding the lenegth to create id of clone
      if (Object.keys(obj.state.ElementsState[id]).length) {
        let clone = document.getElementById(id).cloneNode(true);
        //  applying the new ly generated id to the clone..
        clone.id = `${id}clone${
          Object.keys(obj.state.ElementsState[id]).length + 1
        }`;
        obj.state.editableElementId = clone.id;
        obj.state.editableElement = clone;

        //  creating state of the new element in the state..
        obj.state.ElementsState[id][clone.id] = {
          position: "absolute",
          fontSize: "",
          fontWeight: "",
          top: top,
          left: left,
          fontStyle: "",
          value: "",
          color: "",
          height: obj.state.editableElementId.includes("3clone")
            ? "2px"
            : obj.state.editableElementId.includes("1clone")
            ? "fit-content"
            : "100px",
          width: "50px",
          minHeight: obj.state.editableElementId.includes("3clone")
            ? "2px"
            : obj.state.editableElementId.includes("1clone")
            ? "fit-content"
            : "50px",
          minWidth: "50px",
          resize: obj.state.editableElementId.includes("3clone")
            ? "horizontal"
            : obj.state.editableElementId.includes("1clone")
            ? ""
            : "both",
          background: "",
          overflow: "hidden",
        };
        stylingElement(clone, obj);

        document.getElementById(obj.state.dropableElement.id).append(clone);
      } else {
        console.log("0 element");
      }
    } else {
      let clone = document.getElementById(id).cloneNode(true);
      //  applying the new ly generated id to the clone..
      clone.id = `${id}clone1`;
      obj.state.editableElementId = clone.id;
      obj.state.editableElement = clone;
      // obj.state.dropableElementId = document.getElementById(obj.state.)

      //  creating state of the new element in the state..
      obj.state.ElementsState[id] = {};
      obj.state.ElementsState[id][clone.id] = {
        position: "absolute",
        fontSize: "",
        fontWeight: "",
        top: top,
        left: left,
        fontStyle: "",
        value: "",
        color: "",
        height: obj.state.editableElementId.includes("3clone")
          ? "2px"
          : obj.state.editableElementId.includes("1clone")
          ? "fit-content"
          : "100px",
        width: "50px",
        minHeight: obj.state.editableElementId.includes("3clone")
          ? "2px"
          : obj.state.editableElementId.includes("1clone")
          ? "fit-content"
          : "50px",
        minWidth: "50px",
        resize: obj.state.editableElementId.includes("3clone")
          ? "horizontal"
          : obj.state.editableElementId.includes("1clone")
          ? ""
          : "both",
        background: "",
        overflow: "hidden",
      };
      stylingElement(clone, obj);

      document.getElementById(obj.state.dropableElement.id).append(clone);
    }
  };

  return (
    <div
      style={{
        left: left + "px",
        top: top + "px",
      }}
      className="ContextMenu"
    >
      <button
        onClick={(e) => {
          addElement(1);
        }}
      >
        Text
      </button>
      <button
        onClick={(e) => {
          addElement(2);
        }}
      >
        Table
      </button>
      <button
        onClick={(e) => {
          addElement(3);
        }}
      >
        Line
      </button>
      <button
        onClick={(e) => {
          addElement(4);
        }}
      >
        Image
      </button>
      <button
        onClick={(e) => {
          addElement(5);
        }}
      >
        Circle
      </button>
      <button
        onClick={(e) => {
          addElement(6);
        }}
      >
        Rectangle
      </button>
      <button onClick={(e) => {}}>Triangle</button>
      <span onClick={(e) => {}} style={{ fontSize: "14px" }}>
        Click anywere to cancell
      </span>
    </div>
  );
};

export default RMenu;
