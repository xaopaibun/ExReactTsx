import { Container } from 'react-bootstrap';
import React from 'react';
import {  useSelector } from 'react-redux';
import { GetProductThunk } from '../../redux/thunk/index';
import ProductItem from 'components/productitem';
const Home: React.FC = () =>{
   
    const ListProduct = useSelector((state : any) => state?.productReducer?.product)
    
    return(

            <div style={{display : 'flex', flexWrap : 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
            {
                ListProduct.length > 0 && ListProduct.map((val : any) =><ProductItem  key = {val._id} value ={val}/>)
            }
           </div>
    );
}
export default Home;