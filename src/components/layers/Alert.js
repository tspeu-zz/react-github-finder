import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Alert = ({alert, icon}) => {
   return (
      alert!== null && (
         <div className={`alert alert-${alert.type}`}>
            <h2 className="btn-danger"
            >
            {/* <FontAwesomeIcon icon={icon}  className='m-r'/> */}
            <FontAwesomeIcon icon={faCoffee} size="1x" />
            { alert.msm}
            </h2>
            {/* <FontAwesomeIcon icon="coffee" size="xs" /> */}
            {/* <i className="fas fa-icon-circle"></i> */}

            {/* <span className="fa-layers fa-fw">
               <FontAwesomeIcon icon="square" color="green" />
               <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
            </span> */}
         </div>
      )
   )
}

export default Alert
