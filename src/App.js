import React, { Component , Fragment} from 'react';
//router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import axios from 'axios';
//
import './App.css';
import Navbar from './components/layers/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layers/Alert';
import About from './components/pages/About';
import User from './components/users/User';
// 

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//     </div>
//   );
// }

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // async componentDidMount(){
  //   this.setState({loading: true});
  //   const _URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  //   const res = await axios.get(_URL);
  //   console.log(res.data)
  //   this.setState({users: res.data, loading: false});
  // }

  // search github User
  usersSearch =  async text => {
    this.setState({loading: true});
    console.log('*> desde searcH comPONENt*> ', text)
    const _URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(_URL);
    console.log('*> res.data.items *> ',  res.data.items)
    this.setState({users: res.data.items, loading: false});
  }
  
  // get single user
  //https://api.github.com/users/tspeu
  getUser = async (username) =>{
    this.setState({loading: true});
    console.log('*USER >username *> ',  username)
    const _URL_USER = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(_URL_USER);
    console.log('*USER > res.data. *> ',  res.data)
  
    this.setState({user: res.data, loading: false});
}

// https://api.github.com/users/tspeu/repos


    // clear user from state
  usersClear = () => this.setState({ users: [], loading: false});

  // set alert
  alertSet = (msm, type) => {
    this.setState({alert: {
      msm : msm,
      type : type
    }});
    // setTimeout(()=> this.setState({alert: null}), 15000);
    console.log('alert');
  }

  closeAlert = () =>{
    console.log('close alert->');
    this.setState({alert: null});
  };

  render() {
    // para utilizar router se debe envolver todo en el router

    const {users,user, loading , alert} = this.state;

    return ( 
      <Router>
        <div className='App'>
          <Navbar title="gitHub Finder"/>
          <div className="container">
            <Alert 
              alert={alert} icon="fadice" 
              setAlert={this.closeAlert}/>
              <Switch>
              <Route 
                exact path='/' 
                render={props =>(
                  <Fragment>
                    <Search 
                      searchUsers={this.usersSearch} 
                      clearUsers={this.usersClear}
                      showClear={ users.length > 0 ? true : false}
                      setAlert={this.alertSet}/>
                    <Users 
                      loading={loading} 
                      users={users}/>
                  </Fragment>
                )} />
                <Route 
                  exact path='/about'
                  component={ About } />
                <Route exact path='/user/:login'
                render={props =>(
                  <User {...props} 
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
                />
            </Switch>
          </div>
        </div>
      </Router> 
    );
  }
}

export default App;
