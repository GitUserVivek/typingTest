import {
  handelCapture,
  handelDragOver,
  handelDrop,
} from "../../Events/EventsForDrop";
const FooterPart = ({ obj }) => {
  return (
    <div
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
      className="footer"
    ></div>
  );
};

export default FooterPart;
