import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose}  from '@fortawesome/free-solid-svg-icons';

const Alert = ({alert, icon}) => {

   const clear = () => { 
      console.log('alerta');

   };

   return (
      alert!== null && (
         <div className={`card btn-danger alert alert-${alert.type}`}>
               <span className="alerta btn-danger m-r">
               <h2 className="open m-r" >
                  <FontAwesomeIcon icon={faInfoCircle} size="1x" className='m-r'/>
                  { alert.msm}
               </h2>
               <span className="close m-r" onClick={() => clear()}>
                  <FontAwesomeIcon icon={faWindowClose} size="2x"/>
               </span>
               </span>
         </div>
      )
   )
}

export default Alert
