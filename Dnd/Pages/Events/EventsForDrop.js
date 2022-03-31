// -----------------------------------------------Handeling dragCapture.. --------------------------------------

const handelCapture = (e, obj) => {
  let state = obj.state;

  e.preventDefault();
  if (
    state.dragableElement != null &&
    state.dragableElement.id.includes("clone")
  ) {
  } else {
    //  creating dropable element..
    obj.setState({
      dropableElement: e.target,
    });
    // if already their is a state of the dragged element is present then ..
    state.ElementsState[state.dragableElement.id] = {
      ...state.ElementsState[state.dragableElement.id],
    };
    // stoaring the id of the dragable element in the State.. for reference..
    state.EditingElementId = state.dragableElement.id;
    // creating the clone of the dragable element..
    let clone = state.dragableElement.cloneNode(true);
    // creating the id of the cloned with the reference of the editing element..
    let TempId =
      parseInt(
        Object.keys(state.ElementsState[state.dragableElement.id]).length
      ) + 1;
    clone.id = `${state.dragableElement.id}clone${TempId}`;

    //  adding cloned element in the state..as draggable element for apending in page..
    state.dragableElement = clone;
    // adding id of the clone in state for creating dynamic element state..
    state.editableElementId = clone.id;
    // creating dynamic state of the dragged element with orignal id and clone id
    state.ElementsState[state.EditingElementId][state.dragableElement.id] = {
      position: "absolute",
      fontSize: "",
      fontWeight: "",
      fontStyle: "",
      value: "",
      color: "",
      height: state.editableElementId.includes("3clone")
        ? "2px"
        : state.editableElementId.includes("1clone")
        ? "fit-content"
        : "100px",
      width: "fit-content",
      minHeight: state.editableElementId.includes("3clone")
        ? "2px"
        : state.editableElementId.includes("1clone")
        ? "fit-content"
        : "50px",
      minWidth: "50px",
      resize: state.editableElementId.includes("3clone")
        ? "horizontal"
        : state.editableElementId.includes("1clone")
        ? ""
        : "both",
      background: "",
      overflow: "hidden",
    };
  }
};

// -----------------------------------------------Handeled dragCapture.. -------------------------------------
//
// -----------------------------------------------Handeling DragOver.. --------------------------------------
const handelDragOver = (e, obj) => {
  e.preventDefault();

  // adding left and top property to the dragging / editable element (clone of editing element..)
  obj.state.ElementsState[obj.state.EditingElementId][
    obj.state.dragableElement.id
  ] = {
    ...obj.state.ElementsState[obj.state.EditingElementId][
      obj.state.dragableElement.id
    ],
    left: `${e.nativeEvent.offsetX}px`,
    top: `${e.nativeEvent.offsetY}px`,
  };
};
// -----------------------------------------------Handeled.. DragOver.. --------------------------------------
//
const stylingElement = (dragableElement, obj) => {
  dragableElement.style.position =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].position;

  dragableElement.style.left =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].left;

  dragableElement.style.top =
    obj.state.ElementsState[obj.state.EditingElementId][dragableElement.id].top;

  dragableElement.style.color =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].color;

  dragableElement.style.height =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].height;

  dragableElement.style.width =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].width;

  dragableElement.style.minHeight =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].minHeight;

  dragableElement.style.minWidth =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].minWidth;

  dragableElement.style.background =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].background;

  dragableElement.style.resize =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].resize;

  dragableElement.style.overflow =
    obj.state.ElementsState[obj.state.EditingElementId][
      dragableElement.id
    ].overflow;

  dragableElement.style.margin = "0px";

  // adding.. click event to the editing element for changing properties..
  dragableElement.addEventListener("click", (e) => {
    obj.state.editableElementId = dragableElement.id;
    obj.state.EditingElementId = dragableElement.id.split("clone")[0];
    obj.state.editableElement = dragableElement;
  });

  // adding event listener on element for changing position..
  dragableElement.addEventListener("dragstart", (e) => {
    obj.state.EditingElementId = e.target.id.split("clone")[0];
    obj.state.editableElementId = e.target.id;
    obj.state.dragableElement = e.target;
  });
  // if (dragableElement.id === "3") {

  dragableElement.addEventListener("mousemove", (e) => {
    if (
      obj.state.ElementsState[obj.state.EditingElementId][
        obj.state.editableElementId
      ]
    ) {
      obj.state.ElementsState[obj.state.EditingElementId][
        obj.state.editableElementId
      ].width = e.target.style.width;
      obj.state.ElementsState[obj.state.EditingElementId][
        obj.state.editableElementId
      ].height = e.target.style.height;
    }
  });
  // }
};
//
// -----------------------------------------------Handeling Drop.. --------------------------------------
const handelDrop = (e, obj) => {
  // code minimizing .. assuming obj.... as small variable..
  let dragableElement = obj.state.dragableElement;
  let dropableElement = obj.state.dropableElement;
  dragableElement.style.zIndex = 0;

  if (
    dragableElement.id !== null &&
    dropableElement.id !== null &&
    dragableElement.id !== dropableElement.id
  ) {
    //  Styling Element.. : direct object assigning not working.. so have to apply manually every property..
    stylingElement(dragableElement, obj);
    //done with styling element..

    // appending created clone to the page..
    dropableElement.append(dragableElement);
  }
  // obj.state.dragableElement = null;
};
// ----------------------------------------------- Handeled.. Drop.. --------------------------------------
//

export { handelDragOver, handelCapture, handelDrop, stylingElement };
