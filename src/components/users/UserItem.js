import React, { Component } from 'react'

class UserItem extends Component {
//add state
   // state ={
   //    id: 'id',
   //    login: 'mojobo',
   //    avatar_url:'https://avatars0.githubusercontent.com/u/67?=v4',
   //    html_url: 'https://github.com/tspeu'
   // }
   
   render() {
      const myStyle ={ width: "60px"};
      const {avatar_url, login, html_url} = this.props.user;
      return (
         <div className='card text-center'>
            <img src={avatar_url} alt="logo" 
                  className='round-img' 
                  style = {myStyle}/>
            <h3>{login}</h3>
            <div>
               <a href={html_url} className="btn btn-dark btn-sm my-1"
               target="_blank" rel="noopener noreferrer">More info...</a>
            </div>
         </div>
      )
   }
}

export default UserItem


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
