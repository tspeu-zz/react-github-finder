import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layers/Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
   if (loading) {
         return <Spinner/>
   } else {
      return (
         <div style= {userStyle}>
            { users.map(x => (
               <UserItem  key={x.id} user={x} />)
               )
            }
         </div>
      )
   }
}

Users.propTypes = {
   users: PropTypes.array.isRequired,
   loading: PropTypes.bool.isRequired
}

const userStyle = {
   margin: '16px',
   display : 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridGap: '20px'
};

export default Users

 // state = {
   //    users: [
   //       {
   //          id: '1',
   //          login: 'mojobo',
   //          avatar_url:'https://avatars0.githubusercontent.com/u/67?=v4',
   //          html_url: 'https://github.com/tspeu'
   //       },
   //       {
   //          id: '2',
   //          login: 'tspeu',
   //          avatar_url:'https://avatars0.githubusercontent.com/u/68?=v4',
   //          html_url: 'https://github.com/tspeu'
   //       },  {
   //          id: '3',
   //          login: 'pachecoo',
   //          avatar_url:'https://avatars0.githubusercontent.com/u/69?=v4',
   //          html_url: 'https://github.com/tspeu'
   //       }
   //    ]
   // };