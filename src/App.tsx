import React, { useState } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Loading from 'components/loading';
import Home from 'container/Home';
import { useSelector, useDispatch } from 'react-redux';
import { GetProductThunk } from './redux/thunk/index';

const Loading : React.FC = () => {
  return (
      <div style={{ display: 'flex',height:'100vh', justifyContent: 'center', alignItems: 'center' }}>
              <img src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif' style={{ width: '250px', height: '250px' }} />
      </div>
  );
}

{/* <> //generic */}

const App: React.FC = () => {
  const isLoading = useSelector((state : any) => state?.productReducer?.isloading)
  const dispatch = useDispatch();
  React.useEffect( () =>{
      dispatch(GetProductThunk());
  }, []);

  return (
    <div >
      {isLoading ? <Loading /> : <Home />}
    </div>
  )
}


export default App;
