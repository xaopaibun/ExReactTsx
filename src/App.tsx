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

// const Loading: React.FC = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
//       <img src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif' style={{ width: '250px', height: '250px' }} />
//     </div>
//   );
// }

{/* <> //generic */ }

const App: React.FC = () => {

  return (
    <div >
      {/* {isLoading ? <Loading /> : <Home />} */}
    
      <Router>
        <Switch>
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
