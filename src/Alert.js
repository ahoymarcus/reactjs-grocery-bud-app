import React, { useEffect } from 'react'



const Alert = ({ type, msg, removeAlert, list }) => {

  /* 
    Melhorando a UX usando List para ser monitorada, ao invés de [] ao ser montado o componente!!!
  */
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]); // first-render

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}



export default Alert


