import secondImg from "./../../Assets/Logo (3).jpg";
const ToolBar = ({ obj }) => {
  const handelDragStart = (e) => {
    obj.state.dragableElement = e.target;
    obj.state.editableElementId = e.target.id;
  };

  return (
    <div className="DragFromHere">
      <span id="1" draggable="true" onDragStart={(e) => handelDragStart(e)}>
        TEXT
      </span>
      <span>
        <img
          id="2"
          className="DragableElement LogoImage"
          draggable="true"
          onDragStart={(e) => handelDragStart(e)}
          src={secondImg}
          alt="img"
        />
      </span>
    </div>
  );
};

export default ToolBar;

// let clone = e.target.cloneNode(true);
// let TempId = parseInt(clone.id) + 1;
// clone.id = `${e.target.id}clone${TempId}`;
// obj.state.dragableElement = clone;
// obj.state.editableElementId = clone.id;
// obj.state.ElementsState[clone.id] = {
//   position: "relative",
//   x: 0,
//   y: 0,
// };
