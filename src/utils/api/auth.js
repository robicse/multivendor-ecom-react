import axios from "axios";
const BASE_URL = process.env.BASE_URL

const loginApi = async (data) => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/login`,data);
    return response;
  };


  const getCustomerPurchaseHistory = async () => {
    try {
       const config =  {
          headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkYzdiMGYyYTViYWJiYzU0NzM0ZGNlOGM5MWE3MGI1ZWIzZTE4NWFkYmU0YzE1MWMzOWE1MDhkODY4OTFhYjkyMGYzNTdmNGJiYzJlMTVkIn0.eyJhdWQiOiIxIiwianRpIjoiN2RjN2IwZjJhNWJhYmJjNTQ3MzRkY2U4YzkxYTcwYjVlYjNlMTg1YWRiZTRjMTUxYzM5YTUwOGQ4Njg5MWFiOTIwZjM1N2Y0YmJjMmUxNWQiLCJpYXQiOjE2NjAxMTA5ODMsIm5iZiI6MTY2MDExMDk4MywiZXhwIjoxNjkxNjQ2OTgzLCJzdWIiOiIxNTciLCJzY29wZXMiOltdfQ.UHR5R2XaJbdfRnOJ9WgMqDjpb4NKOc84079r4Cb7oFu0rBzy9PtEIJKmgb5Yrw25sTtceQ_jHAopWDnU30cZHKMQZERkwFJgx_pKiDs4OCX7tFZIvAwoOqAvkWRLMxXdSi156DaD44N2o9yIP9ICPV3RnXdcIXEFuLDTvRaD-0Md90XZx87jrR4ebZpeICfXaZZloRrCyiW_kwjGYAxw45aJNcpSvIzu4BkKRos1FizTWpTqvAoO2aszC2xQst8uySM4wdVE-rWZybkSQH7qovMIjVCMPHWtX_OUAa62OMwIWNW0LXJgKTBFM-YadMS478w5yr7HbOwzubOStkuvxq9aqvTI10w615b4dfR_m_FSPX1nAsmuA1G_ZEPRrfiKbdJDKeNzM4mQ36Af4mucCRRJpbw6hEX5KNn_krca7ZnkRSdis_TsaPPz4mztFZ_UReCJVC5NLKmNEqFsgnrkd7uIzbyy6QLrrdsyVdmrKHvUlAAAvtCVPDaNNeQ889wJFu-_rg79Kg7SYoa79B3gYCfKi6e-q4l7eKaZmgKiOyQ65k8PCF1MpzhTLn1-O1ZVeFa-_BsmRRYDobVcesvAOOsoSQkvFEq7Jj3Ry2ZdRHDrejeztxPLwR9SzkwkiDln1mRMOhXl_ceSp4E4LUWLKGe7iYqynhIOnRCoBVhHEBo"},
        }
       const response = await axios.get(`https://ecommerce.staritltd-devemon.one/api/v1/purchase-history/157`, config);

    return response;
    } catch (error) {
      console.log(error)
      return []
    
    }
  };

  const getCustomerProfile = async (token) => {
    try {
       const config =  {
          headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkYzdiMGYyYTViYWJiYzU0NzM0ZGNlOGM5MWE3MGI1ZWIzZTE4NWFkYmU0YzE1MWMzOWE1MDhkODY4OTFhYjkyMGYzNTdmNGJiYzJlMTVkIn0.eyJhdWQiOiIxIiwianRpIjoiN2RjN2IwZjJhNWJhYmJjNTQ3MzRkY2U4YzkxYTcwYjVlYjNlMTg1YWRiZTRjMTUxYzM5YTUwOGQ4Njg5MWFiOTIwZjM1N2Y0YmJjMmUxNWQiLCJpYXQiOjE2NjAxMTA5ODMsIm5iZiI6MTY2MDExMDk4MywiZXhwIjoxNjkxNjQ2OTgzLCJzdWIiOiIxNTciLCJzY29wZXMiOltdfQ.UHR5R2XaJbdfRnOJ9WgMqDjpb4NKOc84079r4Cb7oFu0rBzy9PtEIJKmgb5Yrw25sTtceQ_jHAopWDnU30cZHKMQZERkwFJgx_pKiDs4OCX7tFZIvAwoOqAvkWRLMxXdSi156DaD44N2o9yIP9ICPV3RnXdcIXEFuLDTvRaD-0Md90XZx87jrR4ebZpeICfXaZZloRrCyiW_kwjGYAxw45aJNcpSvIzu4BkKRos1FizTWpTqvAoO2aszC2xQst8uySM4wdVE-rWZybkSQH7qovMIjVCMPHWtX_OUAa62OMwIWNW0LXJgKTBFM-YadMS478w5yr7HbOwzubOStkuvxq9aqvTI10w615b4dfR_m_FSPX1nAsmuA1G_ZEPRrfiKbdJDKeNzM4mQ36Af4mucCRRJpbw6hEX5KNn_krca7ZnkRSdis_TsaPPz4mztFZ_UReCJVC5NLKmNEqFsgnrkd7uIzbyy6QLrrdsyVdmrKHvUlAAAvtCVPDaNNeQ889wJFu-_rg79Kg7SYoa79B3gYCfKi6e-q4l7eKaZmgKiOyQ65k8PCF1MpzhTLn1-O1ZVeFa-_BsmRRYDobVcesvAOOsoSQkvFEq7Jj3Ry2ZdRHDrejeztxPLwR9SzkwkiDln1mRMOhXl_ceSp4E4LUWLKGe7iYqynhIOnRCoBVhHEBo"},
        }
       const response = await axios.get(`${BASE_URL}/api/v1/auth/user`, config);
       return response?.data;
    } catch (error) {
      console.log(error)
      return null
    
    }
  };

  const updateCustomerProfile = async (data,token) => {
    // console.log(data)
    // try {
    //    const config =  {
    //       headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkYzdiMGYyYTViYWJiYzU0NzM0ZGNlOGM5MWE3MGI1ZWIzZTE4NWFkYmU0YzE1MWMzOWE1MDhkODY4OTFhYjkyMGYzNTdmNGJiYzJlMTVkIn0.eyJhdWQiOiIxIiwianRpIjoiN2RjN2IwZjJhNWJhYmJjNTQ3MzRkY2U4YzkxYTcwYjVlYjNlMTg1YWRiZTRjMTUxYzM5YTUwOGQ4Njg5MWFiOTIwZjM1N2Y0YmJjMmUxNWQiLCJpYXQiOjE2NjAxMTA5ODMsIm5iZiI6MTY2MDExMDk4MywiZXhwIjoxNjkxNjQ2OTgzLCJzdWIiOiIxNTciLCJzY29wZXMiOltdfQ.UHR5R2XaJbdfRnOJ9WgMqDjpb4NKOc84079r4Cb7oFu0rBzy9PtEIJKmgb5Yrw25sTtceQ_jHAopWDnU30cZHKMQZERkwFJgx_pKiDs4OCX7tFZIvAwoOqAvkWRLMxXdSi156DaD44N2o9yIP9ICPV3RnXdcIXEFuLDTvRaD-0Md90XZx87jrR4ebZpeICfXaZZloRrCyiW_kwjGYAxw45aJNcpSvIzu4BkKRos1FizTWpTqvAoO2aszC2xQst8uySM4wdVE-rWZybkSQH7qovMIjVCMPHWtX_OUAa62OMwIWNW0LXJgKTBFM-YadMS478w5yr7HbOwzubOStkuvxq9aqvTI10w615b4dfR_m_FSPX1nAsmuA1G_ZEPRrfiKbdJDKeNzM4mQ36Af4mucCRRJpbw6hEX5KNn_krca7ZnkRSdis_TsaPPz4mztFZ_UReCJVC5NLKmNEqFsgnrkd7uIzbyy6QLrrdsyVdmrKHvUlAAAvtCVPDaNNeQ889wJFu-_rg79Kg7SYoa79B3gYCfKi6e-q4l7eKaZmgKiOyQ65k8PCF1MpzhTLn1-O1ZVeFa-_BsmRRYDobVcesvAOOsoSQkvFEq7Jj3Ry2ZdRHDrejeztxPLwR9SzkwkiDln1mRMOhXl_ceSp4E4LUWLKGe7iYqynhIOnRCoBVhHEBo"},
    //     }
    //    const response = await axios.get(`https://ecommerce.staritltd-devemon.one/api/v1/purchase-history/157`, config);

    // return response;
    // } catch (error) {
    //   console.log(error)
    //   return []
    
    // }
  };
  export default {
    loginApi,
    getCustomerPurchaseHistory,
    getCustomerProfile,
    updateCustomerProfile
  };