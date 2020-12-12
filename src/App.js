import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layers/Navbar';
import Users from './components/users/Users';
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

    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);

    this.setState({users: res.data, loading: true});
  }

  render() {
    return ( 
      <div className='App'>
        <Navbar title="gitHub Finder"/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
