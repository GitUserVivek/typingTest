import {
  handelCapture,
  handelDragOver,
  handelDrop,
} from "../../Events/EventsForDrop";
const HeaderPart = ({ obj }) => {
  return (
    <div
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
      className="header"
    ></div>
  );
};

export default HeaderPart;
