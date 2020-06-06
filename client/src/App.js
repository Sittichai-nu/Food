import React from 'react';
import Navbar from './Navbar/Navbar';
import Signup from './auth/Signup';
import Signin from './auth/Signin'
import Menu from './Menu/Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Menu" exact component={Menu} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
