import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose as icon}  from '@fortawesome/free-solid-svg-icons';



export class Search extends Component {

   // api search/users?q=userID
   state= {
      text: ''
   }

   static propTypes = {
      searchUsers: PropTypes.func.isRequired,
      clearUsers: PropTypes.func.isRequired,
      showClear: PropTypes.bool.isRequired,
      setAlert: PropTypes.func.isRequired,
   }

   onChange = (ev) =>this.setState({[ev.target.name]: ev.target.value});
   
   // un prop se salida searchUsers
   onSubmit = (ev) => {
      // para evitar burbujeo
      ev.preventDefault();
      if(this.state.text === ''){
         this.props.setAlert('...Please enter some name', 'light');
      } else {
         console.log(this.state.text);
         this.props.searchUsers(this.state.text);
         //clear state
         this.setState({ text: ''});
      }
   }


   render() {
      const {showClear, clearUsers} = this.props
      return (
         <div>
            {/* bind(this) */}
            <form onSubmit={this.onSubmit} className="form">
               <input type="text" name="text" placeholder="Search users..."
                  value={this.state.text} 
                  onChange={this.onChange}
               />
               {/* <input type="email" name="email" placeholder="ponga email..."
               value={this.state.email} onChange={this.onChange}/> */}
               <input type="submit" value="search" 
                  className="btn btn-dark btn-block"
               />
            </form>

            {showClear && (
                  <button className="btn btn-light btn-block" 
                     onClick={clearUsers}>
                        <FontAwesomeIcon icon={icon} size="1x" className='m-r'/>
                     Clear
                  </button>)
            }
         </div>
      )
   }
}

export default Search
