import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PeoplePage from './pages/PeoplePage'
import MonthsPage from './pages/MonthsPage'
import NavBar from './navbar/NavBar';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
  <React.Fragment>
    <Router>
      <div>
        <Route path="/" component={NavBar}></Route>
        <Route path="/people" component={PeoplePage} />
        <Route path="/months" component={MonthsPage} />
      </div>
    </Router>
</React.Fragment>
  );
}

export default App;
