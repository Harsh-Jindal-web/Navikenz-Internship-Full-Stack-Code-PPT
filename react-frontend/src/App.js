import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListStaffComponent from './components/ListStaffComponent';
import HeaderStaffComponent from './components/HeaderStaffComponent';
import FooterStaffComponent from './components/FooterStaffComponent';
import CreateStaffComponent from './components/CreateStaffComponent';
import UpdateStaffComponent from './components/UpdateStaffComponent';
import ViewStaffComponent from './components/ViewStaffComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderStaffComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStaffComponent}></Route>
            <Route path="/staffs" component={ListStaffComponent}></Route>
            <Route path="/add-staff/:id" component={CreateStaffComponent}></Route>
            <Route path="/view-staff/:id" component={ViewStaffComponent}></Route>
            {/* <Route path="/update-staff/:id" component={UpdateStaffComponent}></Route> */}
          </Switch>
        </div>
        <FooterStaffComponent />
      </Router>
    </div>
  );
}

export default App;
