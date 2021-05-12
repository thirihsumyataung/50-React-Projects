import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list  }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout); 
  }, [list]) // add the list into the dependency array --> so if something changed in the list --> setTimeOut 
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert
