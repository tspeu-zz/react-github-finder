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
      login: 'mojobo',
      avatar_url:'https://avatars0.githubusercontent.com/u/66?=v4',
      html_url: 'https://github.com/tspeu'
   }
   
   render() {
      return (
         <div className='card text-center'>
            <img src="{this.state.avatar_url}" alt="logo" 
                  className="round-img"
                  syle={{width: '60px'}}/>
            <h3>{this.state.login}</h3>
            <div>
               <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More info...</a>
            </div>
         </div>
      )
   }
}

export default UserItem
