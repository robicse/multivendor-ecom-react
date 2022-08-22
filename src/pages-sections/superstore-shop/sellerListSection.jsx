import { Box, Container, Grid, styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import CategorySectionHeader from "components/CategorySectionHeader";
import Category from "components/icons/Category";
import ShopCard1 from "components/shop/ShopCard1";
import LazyImage from "components/LazyImage";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import imageUrlFormat from "utils/imageUrlFormat";


import Link from "next/link";
const BASE_URL = process.env.BASE_URL
const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  display: "flex",
  borderRadius: 8,
  padding: "0.75rem",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
}));

const SellerListSection = ({ sellerList }) => {
    // console.log(sellerList)
    const shopList = [
      {
        rating: 5,
        name: "Scarlett Beauty",
        phone: "(613) 343-9004",
        shopUrl: "/shops/53244445",
        imgUrl: "/assets/images/faces/propic.png",
        coverImgUrl: "/assets/images/banners/cycle.png",
        address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      },
      {
        rating: 5,
        name: "Scroll Through",
        phone: "(613) 343-9004",
        shopUrl: "/shops/53244445",
        imgUrl: "/assets/images/faces/propic(1).png",
        coverImgUrl: "/assets/images/banners/banner.png",
        address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      },
      {
        rating: 4.5,
        name: "Coveted Clicks",
        phone: "(613) 343-9004",
        shopUrl: "/shops/53244445",
        imgUrl: "/assets/images/faces/propic(2).png",
        coverImgUrl: "/assets/images/banners/banner-3.png",
        address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      },
      // {
      //   rating: 4,
      //   phone: "(613) 343-9004",
      //   name: "Constant Shoppers",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(3).png",
      //   coverImgUrl: "/assets/images/banners/banner-4.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
      // {
      //   rating: 5,
      //   name: "Keyboard Kiosk",
      //   phone: "(613) 343-9004",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(4).png",
      //   coverImgUrl: "/assets/images/banners/banner-5.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
      // {
      //   rating: 5,
      //   name: "Anytime Buys",
      //   phone: "(613) 343-9004",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(5).png",
      //   coverImgUrl: "/assets/images/banners/banner-6.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
      // {
      //   rating: 4,
      //   phone: "(613) 343-9004",
      //   name: "Word Wide Wishes",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(6).png",
      //   coverImgUrl: "/assets/images/banners/banner-7.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
      // {
      //   rating: 5,
      //   name: "Cybershop",
      //   phone: "(613) 343-9004",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(7).png",
      //   coverImgUrl: "/assets/images/banners/banner-8.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
      // {
      //   rating: 5,
      //   name: "Scarlett Beauty",
      //   phone: "(613) 343-9004",
      //   shopUrl: "/shops/53244445",
      //   imgUrl: "/assets/images/faces/propic(8).png",
      //   coverImgUrl: "/assets/images/banners/banner-9.png",
      //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      // },
    ];

  return (
    <Container
      sx={{
        mb: "70px",
      }}
    >
      <CategorySectionHeader
        seeMoreLink="/shops"
        title="Best Sellers"
        icon={<Category color="primary" />}
      />
      <Grid container spacing={3}>
          {sellerList.slice(0.2).map((item, ind) => (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
              <ShopCard1 shopData={{name: item.name,address: item.address,phone: item.phone,coverImgUrl:imageUrlFormat(item?.cover_photo) ,imgUrl: imageUrlFormat(item?.logo),shopUrl: "/shops/53244445" }} />
            </Grid>
          ))}
        </Grid>



    </Container>
  );
};

export default SellerListSection;
