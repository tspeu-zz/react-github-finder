import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layers/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layers/Alert';
// 
import axios from 'axios';

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
    loading: false,
    alert: null
  }

  // async componentDidMount(){
  //   this.setState({loading: true});
 
  //   const _URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  
  //   const res = await axios.get(_URL);
  //   console.log(res.data);

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

  // clear user from state
  usersClear = () => this.setState({ users: [], loading: false});

  // set alert
  alertSet = (msm, type) => {
    this.setState({alert: {
      msm : msm,
      type : type
    }});

    setTimeout(()=> this.setState({alert: null}), 15000);

    console.log('alert');

  }

  render() {
    const {users, loading , alert} = this.state;
    return ( 
      <div className='App'>
        <Navbar title="gitHub Finder"/>

        <div className="container">
          <Alert alert={alert} icon="coffee"/>
          <Search searchUsers={this.usersSearch} clearUsers={this.usersClear}
            showClear={ users.length > 0 ? true : false}
            setAlert={this.alertSet}
            />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
