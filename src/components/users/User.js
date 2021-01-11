import React, { Component, Fragment } from 'react';
import Spinner from '../layers/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck  as icon} from '@fortawesome/free-solid-svg-icons';
import { faWindowClose as icon2}  from '@fortawesome/free-solid-svg-icons';
//
import Repos from '../repos/Repos';

export class User extends Component {
componentDidMount() {
   this.props.getUser(this.props.match.params.login);
   this.props.getUserRepos(this.props.match.params.login);
}

static propTypes = {
   loading: PropTypes.bool,
   user: PropTypes.object.isRequired,
   getUser: PropTypes.func.isRequired,
   getUserRepos: PropTypes.func.isRequired,
   repos: PropTypes.array.isRequired,
}

   render() {
      const {
         name,
         avatar_url,
         location,
         bio,
         blog,
         html_url,
         hireable,
         followers,
         following,
         login,
         public_repos,
         public_gists,
         company
      } = this.props.user;

      const {loading, repos } = this.props;

      if(loading) return <Spinner/>;
      return (
         <Fragment>
            <Link to='/' className='btn btn-light'>Back to search</Link>
            Hireable:{ '' } 
                     { hireable ?   <FontAwesomeIcon icon={icon} size="1x" className='m-r text-success'/>: 
                                    <FontAwesomeIcon icon={icon2} size="1x" className='m-r text-danger'/> }
            <div className="card grid-2">
               <div className="all-center">
                  <img src={avatar_url}
                     alt="logo" 
                     className='round-img'
                     style={{width:'150px'}}/>
                  <h1>{name}</h1>
                  <p>{location}</p>
               </div>
               <div>
                  {bio && <Fragment>
                     <h3>Bio: </h3>
                     <p> {bio}</p>
                     </Fragment>}
               <a href={html_url} target="_blank" rel="noopener noreferrer"
               className="btn btn-dark my-1">Visit Guithub profile</a>
               <ul>
                  <li>
                     {login && <Fragment>
                        <strong> Username: {login}</strong>
                        </Fragment>}
                  </li>
                  <li>
                     {company && <Fragment>
                        <strong> Company: {company}</strong>
                        </Fragment>}
                  </li>
                  <li>
                     {blog && <Fragment>
                        <strong> WebSite: {blog}</strong>
                        </Fragment>}
                  </li>
               </ul>
               </div>
            </div>
            <div className="card text-center">
                  <div className="badge badge-primary">Followers: {followers}</div>
                  <div className="badge badge-success">Following: {following}</div>
                  <div className="badge badge-danger">Public Repos: {public_repos}</div>
                  <div className="badge badge-dark">Public gist: {public_gists}</div>
            </div>

            <Repos repos={repos} />
         </Fragment>

      )
   }
}

export default User
