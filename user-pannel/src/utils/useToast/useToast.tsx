import React, { useEffect } from 'react';
import Success from './Success';
import Warning from './Warning';
import Danger from './Danger';
import { ToastProps } from './ToastTypes';

function useToast(props: ToastProps) {
  useEffect(() => {
    if (props.type === 'success') {
      return (
        <Success
          type={props.type}
          message={props.message}
          onClose={props.onClose}
        />
      );
    } else if (props.type === 'warning') {
      return (
        <Warning
          type={props.type}
          message={props.message}
          onClose={props.onClose}
        />
      );
    } else {
      return (
        <Danger
          type={props.type}
          message={props.message}
          onClose={props.onClose}
        />
      );
    }
  }, [props]);
}
export default useToast;
