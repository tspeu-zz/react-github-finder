import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layers/Navbar';
import Users from './components/users/Users';

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
        <div className="container">
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
