import React, { Component } from 'react'
import UserItem from './UserItem';

export class Users extends Component {

   state = {
      users: [
         {
            id: '1',
            login: 'mojobo',
            avatar_url:'https://avatars0.githubusercontent.com/u/67?=v4',
            html_url: 'https://github.com/tspeu'
         },
         {
            id: '2',
            login: 'tspeu',
            avatar_url:'https://avatars0.githubusercontent.com/u/68?=v4',
            html_url: 'https://github.com/tspeu'
         },  {
            id: '3',
            login: 'pachecoo',
            avatar_url:'https://avatars0.githubusercontent.com/u/69?=v4',
            html_url: 'https://github.com/tspeu'
         }
      ]
   
   };

   render() {
      return (
         <div style= {userStyle}>
            {this.state.users.map(x => (
               <UserItem  key={x.id} user={x} />
            ))
            }
         </div>
      )
   }
}

const userStyle = {
   margin: '16px',
   display : 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridGap: '20px'
};

export default Users
