import React, {useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Signup from './auth/Signup';
import Signin from './auth/Signin'
import Menu from './Menu/Menu'
import { Provider } from 'react-redux';
import store from './store';
import Alert from './Layout/Alert'
import './App.css'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'
import Kitchen from './Kitchen/Kitchen';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route path="/Signup" exact component={Signup} />
            <Route path="/Signin" exact component={Signin} />
            <Route path="/Menu" exact component={Menu} />
            <Route path="/Kitchen" exact component={Kitchen} />

          </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
