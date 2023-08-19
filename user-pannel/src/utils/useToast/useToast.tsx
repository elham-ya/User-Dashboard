import React from "react";
import Success from "./Success";
import Warning from "./Warning";
import Danger from "./Danger";
import { ToastProps } from "./ToastTypes";

function useToast(props: ToastProps) {
  const render = () => {
    switch (props.type) {
      case "success":
        return (
          <Success
            type={props.type}
            message={props.message}
            onClose={props.onClose}
          />
        );
      case "warning":
        return (
          <Warning
            type={props.type}
            message={props.message}
            onClose={props.onClose}
          />
        );
      case "danger":
        return (
          <Danger
            type={props.type}
            message={props.message}
            onClose={props.onClose}
          />
        );
    }
  };
  return render();
}
export default useToast;
