import { Delete, Edit, Place } from "@mui/icons-material";
import { Button, IconButton, Pagination, Typography,     Dialog,
  DialogContent } from "@mui/material";
import { FlexBox } from "components/flex-box";
import Checkbox from '@mui/material/Checkbox';
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import TableRow from "components/TableRow";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewAddressForm from "components/customer/customerAddressFrom"; 
import EditAddressFrom from "components/customer/editAddressFrom"; 
import shopApi from "utils/api/superstore-shop";

import useAuth from "hooks/useAuth";

const AddressList = ({generalSetting}) => {
  const {token, getAllAddress, addAddress, updateAddress, deleteAddress, setDefaultAddress } = useAuth();
  const [addressfromOpen, setAddressfromOpen] = useState(false)
  const [editAddressfromOpen, setEditAddressfromOpen] = useState(false)
  const [editData, setEditdata] = useState(null)
  const [adressList, setAddressList] = useState([])
//data save
  const handleAddressForm =() => {
    setAddressfromOpen(!addressfromOpen)

  }
//data edit
  const handleEditAddressForm =(data) => {
    setEditdata(data)
    setEditAddressfromOpen(!editAddressfromOpen)
  }
  console.log(editData);
  const handleSetDefault=async(id)=> {
    const res = await setDefaultAddress(id)
    if(res){
      await  getAllHandleFetch()
    }
    
  };




  const getAllHandleFetch = async()=>{
    const res = await getAllAddress();
    setAddressList(res);
  }

  const addAddressHanle = async(value)=>{
    const res = await addAddress(value);
    if(res){
      await getAllHandleFetch()
      handleAddressForm()
    }
    
  }

  const editAddressSubmitHandle = async(value)=>{
    const res = await updateAddress(value);
    if(res){
      await getAllHandleFetch()
      handleEditAddressForm(null)
    }
  }

  const deleteAddressHandle = async(id)=>{
    const res = await deleteAddress(id);
    if(res){
     await getAllHandleFetch()
    }
  }


  useEffect(()=>{
    getAllHandleFetch();
  },[])
console.log(adressList);

  return (
    <CustomerDashboardLayout generalSetting={generalSetting}>
      <UserDashboardHeader
        icon={Place}
        title="My Addresses"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Button
            color="primary"
            sx={{
              bgcolor: "primary.light",
              px: 4,
            }}
            onClick={()=>handleAddressForm()}
          >
            Add New Address
          </Button>
        }
      />
         <TableRow
          sx={{
            my: 2,
            padding: "6px 18px",
          }}
          // key={ind}
        >

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            City
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
          Address
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
             Phone
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
             Postal Code
          </Typography> 

        </TableRow>
      {adressList?.map((item, ind) => (
        <TableRow
          sx={{
            my: 2,
            padding: "6px 18px",
          }}
          key={ind}
        >
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            {item?.city}
          </Typography>

          <Typography whiteSpace="pre"  m={0.75} textAlign="left">
            {item?.address}
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
          {item?.phone}
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
          {item?.postal_code}
          </Typography>

          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
             
              
          <IconButton>
                  <Checkbox
              checked={item.set_default == '0' ? false : true}
              onChange={()=>handleSetDefault(item.id)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
              </IconButton>


            
              <IconButton onClick={() => handleEditAddressForm(item)}>
                <Edit fontSize="small" color="inherit" />
              </IconButton>


            <IconButton onClick={() => deleteAddressHandle(item.id)}>
              <Delete fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>
      ))}

      {/* <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} onChange={(data) => console.log(data)} />
      </FlexBox> */}
    
      <Dialog open={addressfromOpen} onClose={()=>handleAddressForm()}>
          <DialogContent>
              <NewAddressForm addAddressHanle={addAddressHanle} getAllHandleFetch={getAllHandleFetch} />
          </DialogContent>
        </Dialog>


        <Dialog open={editAddressfromOpen} onClose={()=>handleEditAddressForm()}>
          <DialogContent>
              <EditAddressFrom editAddressSubmitHandle={editAddressSubmitHandle} editData={editData} />
          </DialogContent>
        </Dialog>
    </CustomerDashboardLayout>
  );
};
export async function getStaticProps() {
  const generalSetting = await shopApi.generalSetting();
  return {
    props: {
      generalSetting,
  
    },
  };
}
export default AddressList;
