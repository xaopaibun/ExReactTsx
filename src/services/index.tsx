import axios from 'axios';
import { Url_Sever } from '../untils/until';


const instance = axios.create({
    baseURL: Url_Sever,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
});



//getproduct
export const GetProduct = () => instance.get('/getalldata');