// import React from 'react'
// import { Bounce, toast, ToastContainer } from 'react-toastify'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { clearError } from '../JS/actions/authAction'

// const ErrorToast = ({errors}) => {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         // Display the error message using toast
//         if (Array.isArray(errors) ) {
//         errors.map((error,i) => 
//             toast.error(error.msg, {
//                 position: "top-right",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//                toastId:`${error.msg}-${Date.now()}`,
//                // transition: Bounce,
//             })
//         )
       
//         //nettoyage de tableau errors
//         const timer = setTimeout(() => {
//             dispatch( clearError() );
//         }, 2000);
//         return () => 
//             clearTimeout(timer);
//     }
//         },[errors,dispatch])

//   return < ToastContainer limit={1} />    
// }

// export default ErrorToast

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
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
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
