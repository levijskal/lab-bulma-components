import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
<Navbar/>


<FormField label="test label" type="test type" placeholder="test placeholder" />
<FormField label="test label 2" type="test type 2" placeholder="test placeholder 2" />

<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
{/* <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
      

      </div>
    );
  }
}

export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */}