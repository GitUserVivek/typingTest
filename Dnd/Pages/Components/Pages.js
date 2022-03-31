import {
  handelCapture,
  handelDragOver,
  handelDrop,
} from "../Events/EventsForDrop";
// import RMenu from "./RMenu";
// import HeaderPart from "./PageDivede/HeaderPart";
// import DataPart from "./PageDivede/DataPart";
// import FooterPart from "./PageDivede/FooterPart";
// Pages  ...

// A0
const PageA0 = ({ obj }) => {
  return (
    <div
      className="MainPage"
      id="PageA0"
      style={{
        height:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${1189}mm`
            : `${841}mm`,
        width:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${841}mm`
            : `${1189}mm`,
      }}
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
    ></div>
  );
};
// A1
const PageA1 = ({ obj }) => {
  return (
    <div
      className="MainPage"
      id="PageA1"
      style={{
        height:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${841}mm`
            : `${594}mm`,
        width:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${594}mm`
            : `${841}mm`,
      }}
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
    ></div>
  );
};
// A2
const PageA2 = ({ obj }) => {
  return (
    <div
      className="MainPage"
      id="PageA2"
      style={{
        height:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${594}mm`
            : `${420}mm`,
        width:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${420}mm`
            : `${594}mm`,
      }}
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
    ></div>
  );
};
// A3
const PageA3 = ({ obj }) => {
  return (
    <div
      className="MainPage"
      id="PageA3"
      style={{
        height:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${420}mm`
            : `${297}mm`,
        width:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${297}mm`
            : `${420}mm`,
      }}
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
    ></div>
  );
};
// A4
const PageA4 = ({ obj }) => {
  return (
    <div
      className="MainPage"
      id="PageA4"
      style={{
        height:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${297}mm`
            : `${210}mm`,
        width:
          obj.state.Paper.pageOrientation === "Portrait"
            ? `${210}mm`
            : `${297}mm`,
      }}
      onDragEnterCapture={(e) => {
        handelCapture(e, obj);
      }}
      onDragOver={(e) => handelDragOver(e, obj)}
      onDrop={(e) => handelDrop(e, obj)}
    ></div>
  );
};
export { PageA0, PageA1, PageA2, PageA3, PageA4 };
