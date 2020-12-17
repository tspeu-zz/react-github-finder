import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layers/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
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
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true});
 
    const _URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    

    const res = await axios.get(_URL);
    console.log(res.data);

    this.setState({users: res.data, loading: false});
  }

  render() {
    return ( 
      <div className='App'>
        <Navbar title="gitHub Finder"/>

        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
