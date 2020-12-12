import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

// const Navbar = (props) => {
const Navbar = ({icon, title}) => {
   // const {icon, title} = props;
   return (
      <nav className="navbar bg-primary">
         <h1>
            <FontAwesomeIcon icon={icon} className='m-r'/>
            {title}
         </h1>
      </nav>
   )
}
   
Navbar.defaultProps = {
   icon: faGithubSquare,
   title: 'GitHub APP'
}
// checking type security
Navbar.propTypes = {
   icon: PropTypes.object.isRequired,
   title: PropTypes.string.isRequired
}

export default Navbar