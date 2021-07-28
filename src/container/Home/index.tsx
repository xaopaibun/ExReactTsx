import { Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductThunk, UpdateProductLocal } from '../../redux/thunk/index';
import ProductItem from 'components/productitem';
import Loading from 'components/loading';
import Skeleton from 'react-loading-skeleton';
import { ProductSelectors } from 'redux/toolkit/ProductSlice';

const Product: React.FC = () =>{
    const dispatch = useDispatch();
    const ListProduct = useSelector((state: any) => state?.productReducer?.product)
    const ListProductLocal = JSON.parse(localStorage.getItem('ListProduct') + "");
    
    useEffect(() => {
        if (ListProductLocal) {
            dispatch(UpdateProductLocal(ListProductLocal));
        }
    }, [])
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
        {
            ListProduct.length > 0 && ListProduct.map((val: any) => <ProductItem key={val._id} value={val} />)
        }
    </div>
    );
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state?.productReducer?.isloading)
//     const Ex = useSelector(ProductSelectors.selectEntities)
//    console.log('abc', ProductSelectors)
    useEffect(() => {
        dispatch(GetProductThunk());
    }, [])

    return (
        <div>
            {
                isLoading ? <Loading /> : <Product />      
            }
        </div>
    );
}
export default Home;