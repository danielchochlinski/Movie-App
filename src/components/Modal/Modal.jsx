import { Fragment } from "react";
import classes from "./Modal.module.css";
import { img_500 } from "../../config/config";
import ReactDom from "react-dom";

function Modal(props) {
  function Backdrop() {
    console.log(props)
    return <div className={classes.backdrop}></div>;
  }
  function ModalOverlay() {
    return (
      <div
        className={classes.modal}
        style={{
          backgroundImage: `url(${img_500}/${props.backdrop})`,
          backgroundSize: "cover",
        }}
      >
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  }
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default Modal;
