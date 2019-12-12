import React from "react";
import { wrapComponent } from "react-snackbar-alert";

const Alert = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: "Hello Snackbar!"
    });
  }

  return <div>{showSnackbar}</div>;
});

export default Alert;
