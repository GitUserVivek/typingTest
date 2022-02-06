import { useEffect, useState } from "react";

// import { PageA0, PageA1, PageA2, PageA3, PageA4 } from "./Components/Pages";
import RMenu from "./Components/RMenu";
import {
  handelCapture,
  handelDragOver,
  handelDrop,
} from "./Events/EventsForDrop";
const Paper = ({ obj }) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    document.addEventListener("click", () => {
      setVisible(false);
      setTop(0);
      setLeft(0);
    });
    document
      .getElementById("PaperArea")
      .addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setVisible(true);
        setLeft(e.pageX);
        setTop(e.pageY - 40);
      });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Delete") {
        if (obj.state.editableElementId != null) {
          debugger;

          document.getElementById(obj.state.editableElementId).remove();
          delete obj.state.ElementsState[obj.state.EditingElementId][
            obj.state.editableElementId
          ];
        } else {
          console.log("noElementsOnPage");
        }
        return 0;
      }
      if (obj.state.editableElementId !== null) {
        if (e.ctrlKey && e.key === "ArrowRight") {
          obj.state.ElementsState[obj.state.EditingElementId][
            obj.state.editableElementId
          ].left = `${
            parseInt(
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].left
            ) + 1
          }px`;

          document.getElementById(obj.state.editableElementId).style.left =
            obj.state.ElementsState[obj.state.EditingElementId][
              obj.state.editableElementId
            ].left;
        }
        if (e.ctrlKey && e.key === "ArrowLeft") {
          obj.state.ElementsState[obj.state.EditingElementId][
            obj.state.editableElementId
          ].left = `${
            parseInt(
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].left
            ) - 1
          }px`;
          document.getElementById(obj.state.editableElementId).style.left =
            obj.state.ElementsState[obj.state.EditingElementId][
              obj.state.editableElementId
            ].left;
        }
        if (e.ctrlKey && e.key === "ArrowDown") {
          obj.state.ElementsState[obj.state.EditingElementId][
            obj.state.editableElementId
          ].top = `${
            parseInt(
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].top
            ) + 1
          }px`;
          document.getElementById(obj.state.editableElementId).style.top =
            obj.state.ElementsState[obj.state.EditingElementId][
              obj.state.editableElementId
            ].top;
        }
        if (e.ctrlKey && e.key === "ArrowUp") {
          obj.state.ElementsState[obj.state.EditingElementId][
            obj.state.editableElementId
          ].top = `${
            parseInt(
              obj.state.ElementsState[obj.state.EditingElementId][
                obj.state.editableElementId
              ].top
            ) - 1
          }px`;
          document.getElementById(obj.state.editableElementId).style.top =
            obj.state.ElementsState[obj.state.EditingElementId][
              obj.state.editableElementId
            ].top;
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className="MainPage"
        id={"MainPage"}
        style={{
          height:
            obj.state.Paper.pageOrientation === "Portrait"
              ? `${obj.state.Paper.pageHeight}mm`
              : `${obj.state.Paper.pageWidth}mm`,
          width:
            obj.state.Paper.pageOrientation === "Portrait"
              ? `${obj.state.Paper.pageWidth}mm`
              : `${obj.state.Paper.pageHeight}mm`,
        }}
        onDragEnterCapture={(e) => {
          handelCapture(e, obj);
        }}
        onDragOver={(e) => handelDragOver(e, obj)}
        onDrop={(e) => handelDrop(e, obj)}
      ></div>
      {visible ? (
        <RMenu visible={setVisible} obj={obj} left={left} top={top} />
      ) : (
        ""
      )}
    </>
  );
};
export default Paper;
