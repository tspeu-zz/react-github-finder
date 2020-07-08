import React, { Component } from 'react'

class UserItem extends Component {
//add state
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
   state ={
      id: 'id',
      login: 'JM_B',
      avatar_url:'https://avatars0.githubusercontent.com/u/66?=v4',
      html_url: 'https://github.com/tspeu'
   }

   render() {
      // distruction pull out in a object
      const {login, avatar_url ,  html_url} = this.state;

      return (
         <div className='card text-center'>
            <img src={avatar_url} alt="avatar" 
                  className="round-img"
                  style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div>
               <a href={html_url} className="btn btn-dark btn-sm my-1">More info...</a>
            </div>
         </div>
      )
   }
}

export default UserItem
