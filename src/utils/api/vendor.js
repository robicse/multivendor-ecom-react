import axios from "axios";
const BASE_URL = process.env.BASE_URL

import setAuthToken from "utils/setToken";
const  config ={
  headers: { Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVkMmUzMDBiMWNiZTg5MjZkZDIyMTZlNzI1MWMyNjAxMTRmN2RlYTc1YjU2Y2UyNWZmODEwODE4NWE4MjUxMzc5NjQzNGFhNGE0MWRlMDdiIn0.eyJhdWQiOiIxIiwianRpIjoiNWQyZTMwMGIxY2JlODkyNmRkMjIxNmU3MjUxYzI2MDExNGY3ZGVhNzViNTZjZTI1ZmY4MTA4MTg1YTgyNTEzNzk2NDM0YWE0YTQxZGUwN2IiLCJpYXQiOjE2NjEyNTI5NTIsIm5iZiI6MTY2MTI1Mjk1MiwiZXhwIjoxNjkyNzg4OTUyLCJzdWIiOiIxNTkiLCJzY29wZXMiOltdfQ.nN168aS977VSdkM_lkUOnWu8sTiPL4GdmdH93k3A4Dv6xA4E4R6KvdfPXNVl5XcYw7XdL47t-nR6dF3vUbTcs8sw7xk3hiWIS89G_t9WPD9VSU2lEf1HLiVOaaiJyaDhL_CQ3C1fmZPV51BttftPq2jHD1ZRf8ATSJtdr55cU4XfK2TMXh6fB2cjz7FRt8RASOtedxDgiTw-Q0MlIdIXKGYKkIwEaD3E5Z2Au9ygjmR1esoUoIIKW8oBCyeAccnqnsT6y5waCSkbZVKaPb-f1PLvKahG1L2nO9KIty6QsFyuGhhNTZhHSNMYwTfRjxsPTPbALwHG2c0VZJmYSrSFhfU1ssPaNO6L9I15z2V3C41YzUK69CEOc1SNRVuuSf3cfba5L_yEy06-Pla9f4mKMlv8yUs_Xjvx76bPYhMqawK6MbnmO7JHbbrsPE235I4HMmeHNzQvyvbDv4AN_pVsxQmP7bApZnwsQ7YwwreFDmZh36KR3MvwYj7ydyTmA3Yy8bqXoLCXR2d9kgvmGeg4TfxAdPRpZdRNOOU8Uu3ipnGMAHwusQhqBZRjSyScegnjjt8W_p8oBbddvWtGvB0HDfO8oDb-bsHbmunUNn6Nlya7QGAdP6Ik4EfCLVXcsLq4FMcuhkwdrILNNDrMUafhrzOfyNts2XnY0vz_DBFmEyY`},
}

// const setConfig=async()=>{
//   console.log('call')
//   // setTimeout(()=>{

//   // },2000)
//   if (typeof window !== 'undefined') {
// const auth = localStorage.getItem("auth");
// console.log('token paici')
// if (auth ){
//   const payLoad = JSON.parse(auth)
//   // setConfig(payLoad.access_token)
//   // setAuthToken(payLoad?.access_token)
//   const a = {
//       headers: { Authorization:`Bearer ${payLoad.access_token}`},
//   }
//   config = a
//   console.log(a)
// }
//  }
//   return true 
// }
// if (typeof window !== 'undefined') {
// const auth = localStorage.getItem("auth");
// if (auth ){
//   const payLoad = JSON.parse(auth)
//   setConfig(payLoad.access_token)
//   // setAuthToken(payLoad?.access_token)
//   //  config = {
//   //     headers: { Authorization:`Bearer ${payLoad.access_token}`},
//   // //     }
// }
// }
// console.log(axios.defaults?.headers, config)



  const getVendorProfile = async () => {
    try {
      // console.log('start')
      // await setConfig()
      // console.log('ens')
      // console.log(config)
       const response = await axios.get(`${BASE_URL}/api/v1/auth/user`,config);
      // console.log(response)
       return response?.data;
    } catch (error) {
      console.log(error)
      return null
    
    }
  };


  const getSellerDdashboard = async () => {
    try {

       const response = await axios.get(`${BASE_URL}/api/v1/seller-dashboard`,config);
       //(response,'dfg')
       return response?.data.response;
    } catch (error) {
      // console.log(error)
       return null
    
    }
  }


  const updateVendorProfile = async (data) => {
    try {

       const response = await axios.get(`${BASE_URL}/api/v1/seller-profile-update`,data,config);
      // console.log(response)
       return response?.data;
    } catch (error) {
      // console.log(error)
       return null
    
    }
  }


  const getShopDetails = async () => {
    try {
       const response = await axios.get(`${BASE_URL}/api/v1/shop-details`,config);
       //console.log(response)
       return response?.data?.data[0];
    } catch (error) {
      // console.log(error)
      return null
    
    }
  };

  const getShopDetailsById = async (id) => {
    try {
       const response = await axios.get(`${BASE_URL}/api/v1/shop/${id}`);
      // console.log(response)
       return response?.data?.data[0]
    } catch (error) {
      // console.log(error)
      return null
    
    }
  };

  const updateVendorShop = async (data) => {
    try {
       console.log(data)
       const response = await axios.post(`${BASE_URL}/api/v1/shop/settings`,data,config);
     //  console.log(response)
       return response?.data;
    } catch (error) {
      // console.log(error)
       return null
    
    }
  }

  const getSellerList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/shops`);
     // console.log(response)
      return response.data?.data
    } catch (error) {
      return []
    }
   
  };

  export default {
    // setConfig,
    getVendorProfile,
    getSellerDdashboard,
    updateVendorProfile,
    getShopDetails,
    updateVendorShop,
    getShopDetailsById,
    getSellerList
  };