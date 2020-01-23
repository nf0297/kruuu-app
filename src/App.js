import React, {Component} from 'react';
import logo from './logo.svg';
import Homepage from './Page/Homepage';
import TalentPage from './Page/TalentPage';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Talent from './Component/Talent/CardTalent';
import Jobs from './Component/Jobs';
import Partner from './Component/Partner';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path='/Header' component={Header} />
          <Route path='/Footer' component={Footer} />
          <Route path='/Talent' component={Talent} />
          <Route path='/Jobs' component={Jobs} />
          <Route path='/Partner' component={Partner} />
          <Route exact path='/Talents' component={TalentPage} />
        </div>
      </Router>
    )
  };
}

export default App;
