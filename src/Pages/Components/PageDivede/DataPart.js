import {
  handelCapture,
  handelDragOver,
  handelDrop,
} from "../../Events/EventsForDrop";
const DataPart = ({ obj }) => {
  return (
    <div
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
      className="data"
    ></div>
  );
};

export default DataPart;
