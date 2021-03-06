import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const Modal = props => {
  if (props.show) {
    return (
      <>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}>{props.children}</div>
      </>
    );
  }
  return null;
};

// Modal rendered only when show property changes.
const check = (prevProps, nextProps) => {
  return (
    prevProps.show === nextProps.show ||
    prevProps.children === nextProps.children
  );
};

// As modal only needs to be rendered when it's show on the screen and not always.
export default React.memo(Modal, check);
