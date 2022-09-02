import Favorite from "@mui/icons-material/Favorite";
import { Button, Grid, Pagination } from "@mui/material";
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import ProductCard1 from "components/product-cards/ProductCard1";
import productDatabase from "data/product-database";
import useAuth from 'hooks/useAuth'
import imageUrlFormat from 'utils/imageUrlFormat'


const WishList = () => {
  // const {
  //   generalSetting,
  // } = props;
  const { wishList } = useAuth();
  

  console.log('wishList',wishList);

  const itemChange = (item)=>{
    return{
      id:item.id,
      title:item.name,
      price:item.base_price,
      imgUrl:imageUrlFormat(item.thumbnail_image),
      rating:item.rating,
      discount:item.discount
    }

  }
  
  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Favorite}
        title="My Wish List"
        navigation={<CustomerDashboardNavigation />}
        // button={
        //   <Button
        //     color="primary"
        //     sx={{
        //       px: 4,
        //       bgcolor: "primary.light",
        //     }}
        //   >
        //     Add All to Cart
        //   </Button>
        // }
      />

      <Grid container spacing={3}>
        {wishList.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
           <ProductCard1 hoverEffect {...itemChange(item.product)} />
          </Grid>
        ))}
      </Grid>

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          color="primary"
          variant="outlined"
          onChange={(data) => console.log(data)}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};

export default WishList;
