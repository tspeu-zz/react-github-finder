import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


// const UserItem = (props) => {
const UserItem = ({ user: {avatar_url, login, html_url} }) => {
   // const {avatar_url, login, html_url} = props.user;
   return (
      <div className='card text-center'>
         <img src={avatar_url} alt="logo" 
               className='round-img' 
               style = {myStyle}/>
         <h3>{login}</h3>
         <div>
            <Link to={`/user/${login}`} 
               className="btn btn-dark btn-sm my-1">
                  More info...
            </Link>
         </div>
      </div>
   )
}
const myStyle ={ width: "60px"};
// ptro
UserItem.propTypes = {
   user: PropTypes.object.isRequired
}

export default UserItem

//add state
   // state ={
   //    id: 'id',
   //    login: 'mojobo',
   //    avatar_url:'https://avatars0.githubusercontent.com/u/67?=v4',
   //    html_url: 'https://github.com/tspeu'
   // }

// constructor() {
//    super();
//    console.log("user 1");
//    this.state ={
//       id: 'id',
//       login: 'mojobo',
//       avatar_url:'https://avatars0.githubusercontent.com/u/66?=v4',
//       html_url: 'https://github.com/tspeu'
//    }
// }
