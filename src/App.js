import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layers/Navbar';
import UserItem from './components/users/UserItem';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return ( 
      <div className='App'>
        <Navbar title="gitHub Finder"/>
        <UserItem/>
      </div>
    );
  }
}

export default App;
