import React, {  createContext, useContext, useMemo, useReducer } from "react"; // ============================================================
const BASE_URL = process.env.BASE_URL
import Axios from 'axios'
import api from "utils/api/auth";
import setAuthToken from "utils/setToken";
import cogoToast from 'cogo-toast';

const initialSettings = {
  token: null,
  user: null,
  isAuthenticated: false,
  wishList: [],
};
export const AuthContext = createContext({
  initialSettings,
  dispatch: () => {},
}); 

const AuthReducer = (state, action) => {
    switch (action.type) {
      case 'SUCCESS_LOGIN':
            return {  ...state, user: action.payload.user, isAuthenticated: true, token: action.payload.access_token };
      case 'SET_CUSTOMER_PROFILE':
            return { ...state, user: action.payload};
      case 'LOG_OUT':
            // localStorage.clear();
            return { isAuthenticated: false, user: {},token: null,wishList: [] };
      case "SET_ALL_WISH_LIST":
            let wishListAll = action.payload;
            console.log(wishListAll, '30')
            return { ...state, wishList: wishListAll}
      case "ADD_WISH_LIST":
            let wishList = state.wishList;
            let wishListItem = action.payload;
            let existWishList = wishList.find((item) => item.id === wishListItem.id);
    
            if (existWishList) {
            const newWishList = wishList.filter((item) => item.id !== wishListItem.id)
            return { ...state, wishList: [] };
            }
            return { ...state, wishList: [...wishList, []] }
        default:
            return state;
    }
  };
// ============================================================
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialSettings);
    const config =  {
      headers: { Authorization: `Bearer ${state.token}`},
    }

// get customer profile
const getCustomerProfile = async (values) => {
    try {
      //  const result =  await api.getCustomerProfile()
      const result = await Axios.get(`${BASE_URL}/api/v1/customer-profile`, config);
       dispatch({ type: 'SET_CUSTOMER_PROFILE', payload: result.data });
    } catch (err) {
       // console.log(err)
    }
};

const login = async (values) => {
    try {
        const data = new FormData()
        Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
        const result =  await api.loginApi(values)
        window.localStorage.setItem("auth",JSON.stringify(result.data));
        dispatch({ type: 'SUCCESS_LOGIN', payload: result.data });
        setAuthToken(result?.data?.access_token)
        cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
        return result?.data;
    } catch (err) {
        cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
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
  try {
      const data = new FormData()
      Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
      const res=  await Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/auth/signup`,data)
      cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
      dispatch({ type: 'CUSTOMER_REQ_REQ', payload: res.data });
      return true;
  } catch (err) {
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
      return false;
  }
};


const sellerResistration = async (values) => {
  try {
      const data = new FormData()
      Object.entries(values).forEach(([key, value]) =>  data.append(key, value));
      const res=  await Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/auth//seller-register`,data)
      cogoToast.success(`${'Login Success'}`, { position: 'top-right', bar: { size: '10px' } });
      dispatch({ type: 'CUSTOMER_REQ_REQ', payload: res.data });
      return true;
  } catch (err) {
     // console.log(err)
      cogoToast.error(`${'Invalid Credentials'}`, { position: 'top-right', bar: { size: '10px' } });
      return false;
  }
};


// get wishListForLoginCustomer
const getAllWishList = async () => {
  try {
    //const result =  await api.getCustomerProfile()
    const res=  await Axios.get(`http://ecommerce.staritltd-devemon.one/api/v1/wishlists`,config)
    console.log(res?.data?.data,'124')
    if(!!res?.data?.data.length){
      //  console.log(first)
       dispatch({ type: 'SET_ALL_WISH_LIST', payload: res?.data?.data });
    }
   
  } catch (err) {
    console.log(err)
    // dispatch({ type: 'SET_ALL_WISH_LIST', payload: [] });
    //  console.log(err)
  }
};

const addNewWishList = async (productId) => {
  try {
    //const result =  await api.getCustomerProfile()
    const res=  await Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/wishlists`,{product_id:productId},config)
    // console.log(res.data?.response?.data)
    dispatch({ type: 'SET_ALL_WISH_LIST', payload: res.data?.response?.data});
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
  } catch (err) {
    console.log(err)
     // console.log(err)
  }
};

const removefromWishList = async (wishListId) => {
  try {
    //const result =  await api.getCustomerProfile()
    const res=  await Axios.delete(`http://ecommerce.staritltd-devemon.one/api/v1/wishlists/${wishListId}`,config)
    dispatch({ type: 'SET_ALL_WISH_LIST', payload: res.data?.response?.data});
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
  } catch (err) {
    console.log(err)
     // console.log(err)
  }
};




const getAllAddress = async () => {
  try {
    const res=  await Axios.get(`http://ecommerce.staritltd-devemon.one/api/v1/user/shipping/address`,config)
    // cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
     return res?.data?.data || null;
  } catch (err) {
    console.log(err)
  }
};

const addAddress = async (value) => {
  try {
    const res=  await Axios.post(`http://ecommerce.staritltd-devemon.one/api/v1/user/shipping/create`,value, config)
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
    return true
  } catch (err) {
    cogoToast.error(`Server Error`, { position: 'top-right', bar: { size: '10px' } });
    return false
  }
};


const updateAddress = async (value) => {
  try {
    const res=  await Axios.put(`http://ecommerce.staritltd-devemon.one/api/v1/user/shipping/edit/${value.id}`,value,config)
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
    return true
  } catch (err) {
    cogoToast.error(`Server Error`, { position: 'top-right', bar: { size: '10px' } });
    return false
  }
};
const deleteAddress = async (id) => {
  try {
    const res=  await Axios.delete(`http://ecommerce.staritltd-devemon.one/api/v1/user/shipping/delete/${id}`,config)
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
    return true
  } catch (err) {
    cogoToast.error(`Server Error`, { position: 'top-right', bar: { size: '10px' } });
    return false
  }
};

// const getCustomerProfile = async (token) => {
//   try {
//      const config =  {
//         headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlN2EzZGM4MTU2YmY2YWVlNzg2OTIzMjg0YjA0ZDZiMGRkYTc0YjBjMzY0ZjIxNDM3YjYwNmZjZjUzOTMyZGI1MmFhMDZhZjFlYmQwZWRlIn0.eyJhdWQiOiIxIiwianRpIjoiOGU3YTNkYzgxNTZiZjZhZWU3ODY5MjMyODRiMDRkNmIwZGRhNzRiMGMzNjRmMjE0MzdiNjA2ZmNmNTM5MzJkYjUyYWEwNmFmMWViZDBlZGUiLCJpYXQiOjE2NjEyMzE2NzMsIm5iZiI6MTY2MTIzMTY3MywiZXhwIjoxNjkyNzY3NjczLCJzdWIiOiIxNTciLCJzY29wZXMiOltdfQ.bI8-PW3AHYiNiBCrko5qjoX6MwnBYOxD4gdF9zL0LwKUk6vjMsEEGca2Fogy_9-UlpaisCWfE4OOem32u4K7AHPXL1045ELakDTWHyy_EXxh5Mf957132CiTj_lbxhOdhu3ZOxDy6SzjAirSEkp7Ctsa1f2f5_V6nCIq0k9HQu5rlsbNAri9jF_qvJ3eG1GdhWZGjf1ekcnaJIcsE2CyOd--shghgfuyBEYOOPMqHav0raJAMA2BAxBJ2Fcr3TLVicsXG73hGuT7euFOKPWa8bdV14NhFtksBm-rWV44nkSCeAMebRJ_PMGfEjLqxC_XEqXSDIZ3jG818dI2RL85rhPldxj8MNOKo-Moai7z4j2HQLznok5xUvUK_ilCgrt7nzQJPjMOzLON6zizIwlIxDnGggFjOOZLtn8F29hnJmd3Je8zL6vI8fmMxuazw-d6Cu1bQAuA3Ph8EHLDFP7joumSrRra3wodOwZgfo0AQLZBmtZJFPBurtSSbbAEYoG097W3UUKBrEpPoV6zA0iMQSt2Cbq1AAV-q2IrpdH--9SYh_VV_kYY4iWChUZnhWt_r9dBTC4fhthvhG7j_AudCHmyodN8YpvM1VHSYnwGAPyaCxtei4kp5bDO6LyzlmYukAmy8lZhn8wPoWaA4hNmCZg4IBwvOpha_GCux8sHZtw"},
//       }
//      const response = await Axios.get(`${BASE_URL}/api/v1/customer-profile`, config);
//      return response?.data;
//   } catch (error) {
//    // console.log(error)
//     return null
  
//   }
// };

const getCustomerDashboard = async (token) => {
  try {
     const config =  {
        headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlN2EzZGM4MTU2YmY2YWVlNzg2OTIzMjg0YjA0ZDZiMGRkYTc0YjBjMzY0ZjIxNDM3YjYwNmZjZjUzOTMyZGI1MmFhMDZhZjFlYmQwZWRlIn0.eyJhdWQiOiIxIiwianRpIjoiOGU3YTNkYzgxNTZiZjZhZWU3ODY5MjMyODRiMDRkNmIwZGRhNzRiMGMzNjRmMjE0MzdiNjA2ZmNmNTM5MzJkYjUyYWEwNmFmMWViZDBlZGUiLCJpYXQiOjE2NjEyMzE2NzMsIm5iZiI6MTY2MTIzMTY3MywiZXhwIjoxNjkyNzY3NjczLCJzdWIiOiIxNTciLCJzY29wZXMiOltdfQ.bI8-PW3AHYiNiBCrko5qjoX6MwnBYOxD4gdF9zL0LwKUk6vjMsEEGca2Fogy_9-UlpaisCWfE4OOem32u4K7AHPXL1045ELakDTWHyy_EXxh5Mf957132CiTj_lbxhOdhu3ZOxDy6SzjAirSEkp7Ctsa1f2f5_V6nCIq0k9HQu5rlsbNAri9jF_qvJ3eG1GdhWZGjf1ekcnaJIcsE2CyOd--shghgfuyBEYOOPMqHav0raJAMA2BAxBJ2Fcr3TLVicsXG73hGuT7euFOKPWa8bdV14NhFtksBm-rWV44nkSCeAMebRJ_PMGfEjLqxC_XEqXSDIZ3jG818dI2RL85rhPldxj8MNOKo-Moai7z4j2HQLznok5xUvUK_ilCgrt7nzQJPjMOzLON6zizIwlIxDnGggFjOOZLtn8F29hnJmd3Je8zL6vI8fmMxuazw-d6Cu1bQAuA3Ph8EHLDFP7joumSrRra3wodOwZgfo0AQLZBmtZJFPBurtSSbbAEYoG097W3UUKBrEpPoV6zA0iMQSt2Cbq1AAV-q2IrpdH--9SYh_VV_kYY4iWChUZnhWt_r9dBTC4fhthvhG7j_AudCHmyodN8YpvM1VHSYnwGAPyaCxtei4kp5bDO6LyzlmYukAmy8lZhn8wPoWaA4hNmCZg4IBwvOpha_GCux8sHZtw"},
      }
     const response = await Axios.get(`${BASE_URL}/api/v1/customer-dashboard/info`, config);
     return response?.data;
  } catch (error) {
   // console.log(error)
    return null
  
  }
};

const updateCustomerProfile = async (data) => {
  try {
     console.log(data)
     const response = await Axios.post(`${BASE_URL}/api/v1/customer-profile/update`,data,config);
     cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
   //  console.log(response)
     return response?.data;
  } catch (error) {
    // console.log(error)
     return null
  
  }
}

const setDefaultAddress = async (id) => {
  try {
    const res=  await Axios.get(`http://ecommerce.staritltd-devemon.one/api/v1/user/shipping/set/default/${id}`,config)
    cogoToast.success(`${res.data?.message}`, { position: 'top-right', bar: { size: '10px' } });
    return true
  } catch (err) {
    cogoToast.error(`Server Error`, { position: 'top-right', bar: { size: '10px' } });
    return false
  }
}

React.useEffect(() => {
  if (!window) return null;
  const auth = window.localStorage.getItem("auth");
  if (auth ){
    const payLoad = JSON.parse(auth)
    dispatch({ type: 'SUCCESS_LOGIN', payload: payLoad });
    // setAuthToken(payLoad.access_token)
    getAllWishList()

  //  console.log(Axios.defaults?.headers,'134')
  } 

}, []);
//console.log(Axios.defaults?.headers,'138')
  return (
    <AuthContext.Provider
      value={{
        token:state.token,
        user:state.user,
        isAuthenticated: state.isAuthenticated,
        logout,
        login,
        customerResistration,
        wishList: state.wishList,
        addNewWishList,
        removefromWishList,
        getAllAddress,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        getCustomerProfile,
        getCustomerDashboard,
        updateCustomerProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = () => useContext(AuthContext);
export default AuthProvider;
