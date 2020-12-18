import React from 'react'

const Alert = ({alert}) => {
   return (
      alert!== null && (
         <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-icon-circle"></i>
            {alert.msm}
         </div>
      )
   )
}

export default Alert
