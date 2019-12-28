import React from 'react';
import logo from './logo.svg';
import CustomerView from "./routes/Customer/view";
import UserView from "./routes/User";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//router

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/customer">
            <CustomerView />
          </Route>
          <Route path="/user">
            <UserView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
