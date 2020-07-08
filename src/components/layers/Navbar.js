import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

class Navbar extends Component {
   static defaultProps ={
      icon: faGithubSquare,
      title: 'GitHub APP'
   }
   // checking type secureo
   static propTypes ={
      icon: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired
   }

   render() {
      return (
         <nav className="navbar bg-primary">
            <h1>
               <FontAwesomeIcon icon={this.props.icon} className='m-r'/>
               {this.props.title}
            </h1>
         </nav>
      )
   }
}

export default Navbar