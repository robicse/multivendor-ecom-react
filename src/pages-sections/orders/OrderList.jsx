import React, {useEffect, useState} from 'react'
import { Pagination } from "@mui/material";
import { FlexBox } from "components/flex-box";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { Fragment } from "react";
import OrderRow from "./OrderRow"; // ============================================================
import api from "utils/api/auth";
import useAuth from "hooks/useAuth";

// ============================================================
const IndexPage = (props) => {
  const {logout, isAuthenticated, login, token, user} = useAuth()
  const [data, setData] = useState([])
  // const {
  //   orderListF
  // } = props;

const fetchOrderList = async() =>{
  const orderLis = await api.getCustomerPurchaseHistory(user?.id,token);
  setData(orderLis)
}
useEffect(()=>{
  fetchOrderList()
},[])
console.log(data, user, )
  return (
    <Fragment>
      <TableRow
        elevation={0}
        sx={{
          padding: "0px 18px",
          background: "none",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Order #
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Status
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Date purchased
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          Total
        </H5>
        <H5 flex="0 0 0 !important" color="grey.600" px={2.75} my={0} />
      </TableRow>

      {orderList.map((item, ind) => (
        <OrderRow item={item} key={ind} />
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          color="primary"
          variant="outlined"
          onChange={(data) => console.log(data)}
        />
      </FlexBox>
    </Fragment>
  );
};

const orderList = [
  {
    orderNo: "1050017AS",
    status: "Pending",
    purchaseDate: new Date(),
    price: 350,
    href: "/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Processing",
    purchaseDate: new Date(),
    price: 500,
    href: "/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
    href: "/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
    href: "/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Cancelled",
    purchaseDate: "2020/12/15",
    price: 300,
    href: "/orders/5452423",
  },
];

// export async function getStaticProps() {
//   const orderListF = await api.getCustomerPurchaseHistory();
//   return {
//     props: {
//       orderListF,
  
//     },
//   };
// }
export default IndexPage;
