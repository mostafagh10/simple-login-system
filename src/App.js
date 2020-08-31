import React, { Component } from 'react';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom'
import Login from './login/index'
import Logout from './logout/index'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  state = {
    username1 : ''
  }

  handleget = (z) => {
    this.setState({
      username1 : z
    });
  }

  render(){
  return (
    <div className="App">
      <HashRouter>
      <Route exact path="/" component={() => <Login handleget={this.handleget}/>} />
      <Route exact path="/login" component={() => <Logout id={this.state.username1} />} />
      </HashRouter>
    </div>
  );
  }
}

export default App;
