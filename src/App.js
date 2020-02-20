import React, { Component } from 'react';
import './App.css';
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import UserForm from './pages/page10';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './pages/page11';
import Page13 from './pages/page13';
import Page14 from './pages/page14';
import WModal from './pages/modalcomponent';
import Page6  from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page5 from './pages/page5';
import Page9 from './pages/page9';

class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Page1} />
        {/* <Route path="/page1" component={Page1} /> */}
        <Route path="/products" component={Page3} />
        <Route path="/buy products" component={Page4} />
        <Route path="/page5" component={Page5} />
          <Route path="/book_appoinment" component={UserForm} />
          <Route path="/confirm_appoinment" component={User} />
          <Route path="/global_site" component={Page13} />
          <Route path="/page14" component={Page14} />
          <Route path="/modal" component={WModal} />  
          <Route path="/success_stories" component={ Page6 } />
          <Route path="/my_story" component={ Page7 } />
          <Route path="/doctor_appoinment" component={ Page8 } />
          <Route path="/doctor_select" component={ Page9 } />

        </Switch>
      </div >
    </Router>
    )
  }
}
export default App;
