import React, {  createContext, useContext, useMemo, useReducer } from "react"; // ============================================================
const BASE_URL = process.env.BASE_URL
import Axios from 'axios'
import api from "utils/api/auth";
import setAuthToken from "utils/setToken";
import cogoToast from 'cogo-toast';

const initialSettings = {
  token: null,
  user: null,
  isAuthenticated: false
};
export const AuthContext = createContext({
  initialSettings,
  dispatch: () => {},
}); // ============================================================

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS_LOGIN':
            return {
                user: action.payload.user,
                isAuthenticated: true,
                token: action.payload.access_token
            };
        case 'SET_CUSTOMER_PROFILE':
            return {
                  user: action.payload,
              };
        case 'LOG_OUT':
            // localStorage.clear();
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
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialSettings);

// get customer profile
  const getCustomerProfile = async (values) => {
    try {
       const result =  await api.getCustomerProfile()
      //  console.log(result);
       dispatch({ type: 'SET_CUSTOMER_PROFILE', payload: result.data });
    } catch (err) {
        console.log(err)

    }
};

  const login = async (values) => {
    try {
        const data = new FormData()
        Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
         const result =  await api.loginApi(values)
    //  setAuthToken(result.data.access_token);

       window.localStorage.setItem(
            "auth",
            JSON.stringify(result.data)
          );
        dispatch({ type: 'SUCCESS_LOGIN', payload: result.data });
        setAuthToken(result?.data?.access_token)
        // console.log(result?.data?.access_token)
        cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
        return result?.data;
    } catch (err) {
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
        console.log(err)
        return false

    }
};

// log out
const logout = () => {
    dispatch({ type: 'LOG_OUT' });
    window.localStorage.removeItem('auth')
    setAuthToken(null)
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
      dispatch({ type: 'CUSTOMER_REQ_REQ', payload: res.data });

     return true;
      
  } catch (err) {
      console.log(err)
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
      return false;
  }
};



React.useEffect(() => {
  if (!window) return null;
  const auth = window.localStorage.getItem("auth");
  if (auth ){
    dispatch({ type: 'SUCCESS_LOGIN', payload: JSON.parse(auth) });
  } 
}, []);

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  );
};

export const useAppContext = () => useContext(AuthContext);
export default AuthProvider;
