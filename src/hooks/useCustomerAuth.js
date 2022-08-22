


import { CustomerAuthContext } from "contexts/CustomerAuthContext";
import { useContext } from "react";

const useCustomersAuth = () => useContext(CustomerAuthContext);

export default useCustomersAuth;