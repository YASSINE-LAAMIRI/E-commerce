import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearError } from '../JS/actions/authAction';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToast = ({ errors }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((error) =>
        toast.error(error.msg, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        // transition: Bounce,
          toastId: error.msg // empêche les doublons
        })
      );

      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors, dispatch]);

  return <ToastContainer />;
  //return < ToastContainer limit={1} />
};

export default ErrorToast;
