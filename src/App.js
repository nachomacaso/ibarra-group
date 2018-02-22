import React, { Component } from 'react';
import logo from './logo.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationTabs from './Components/Tabs'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span><h1 className="App-title">Ibarra<span style={{color: "#173E45"}}>group</span>llc</h1></span>
            <p className="App-services">welding &#183; ornamental iron works &#183; metal fabrication</p>
            <NavigationTabs />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
