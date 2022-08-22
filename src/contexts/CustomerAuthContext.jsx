import {  createContext, useContext, useMemo, useReducer } from "react"; // ============================================================
const BASE_URL = process.env.BASE_URL
import Axios from 'axios'
import api from "utils/api/superstore-shop";
import setAuthToken from "utils/setToken";
import cogoToast from 'cogo-toast';

const initialSettings = {
  token: null,
  user: null,
  isAuthenticated: false
};
export const CustomerAuthContext = createContext({
  initialSettings,
  dispatch: () => {},
}); // ============================================================

const CustomerReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS_LOGIN':
            return {
                user: action.payload.details.userDetails,
                isAuthenticated: true,
                token: action.payload.token
            };
        case LOG_OUT:
            localStorage.clear();
            return {
                isAuthenticated: false,
                user: {},
                token: null,
            };
        default:
            return state;
    }
  };
// ============================================================
const CustomerAuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CustomerReducer, initialSettings);

  //   const login = async (values) => {
  //    api.getCategories()
  // };
  

  const login = async (values) => {
    // console.log(values)
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };
    try {
        const data = new FormData()
        Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
        // await api.customerLogin(values)
        // const res=  await api.getCategories()
       //await  Axios.get(`https://dev.lifeokshop.com/api/version1/categories`,values )
       await  Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/auth/login`,data)
       cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
      //  window.localStorage.setItem(
      //       "customer_auth",
      //       JSON.stringify(res.data.user)
      //     );
      //     window.localStorage.setItem(
      //       "customer_access_token",
      //       JSON.stringify(res.data?.user)
      //     );
      //   // dispatch({ type: 'SUCCESS_LOGIN', payload: res.data });
      //   setAuthToken(res.data.access_token);
        return true;
    } catch (err) {
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
        console.log(err)
        return false

    }
};

// log out
const logout = () => {
    dispatch({ type: 'LOG_OUT' });
    return true;
};


const customerResistration = async (values) => {
  const config = {
      header: {
          'Content-Type': 'application/json'
      }
  };
  try {
      const data = new FormData()
      Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
      const res=  await Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/auth/signup`,data)
      cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
      // dispatch({ type: 'CUSTOMER_REQ_REQ', payload: res.data });
      // setAuthToken(res.data.token);
     return true;
      
  } catch (err) {
      console.log(err)
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
      return false;
  }
};
  return (
    <CustomerAuthContext.Provider
      value={{
        token:state.token,
        user:state.user,
        isAuthenticated: state.isAuthenticated,
        logout,
        login,
        customerResistration
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
};

export const useAppContext = () => useContext(CustomerAuthContext);
export default CustomerAuthProvider;
