import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import UserForm from './pages/page10';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './pages/page11';
import Page13 from './pages/page13';
import Page14 from './pages/page14';
// import ComponentTesting from './pages/componenttesting';
import WModal from './pages/modalcomponent';
import Page6  from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page5 from './pages/page5';
// import Test from './pages/testing';
// function App() {
//   return(
//     <Page1/>
//   )
// }
class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Page1} />
        {/* <Route path="/page1" component={Page1} /> */}
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
          <Route path="/page10" component={UserForm} />
          <Route path="/page11" component={User} />
          <Route path="/page13" component={Page13} />
          <Route path="/page14" component={Page14} />
          <Route path="/modal" component={WModal} />  
          <Route path="/page6" component={ Page6 } />
          <Route path="/page7" component={ Page7 } />
          <Route path="/page8" component={ Page8 } />
        </Switch>
      </div >
    </Router>
    )
  }
}
export default App;
