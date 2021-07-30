import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Loading from 'components/loading';
import Home from 'container/Home';
import { useSelector, useDispatch } from 'react-redux';
import { GetProductThunk } from './redux/thunk/index';
import Authen from 'container/Authen';
import Ex from 'container/Ex';



{/* <> //generic */ }

const App: React.FC = () => {
  return (
    <div >
      <Router>
        <Switch>
        <Route path="/Ex">
            <Ex/>
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Authen />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}






export default App;
