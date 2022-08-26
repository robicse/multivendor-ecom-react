import { Box, Card, Grid } from "@mui/material";
import BazarAvatar from "components/BazarAvatar";
import { FlexRowCenter } from "components/flex-box";
import { H3, H4, H5 } from "components/Typography";
import Link from "next/link";
import React from "react"; // ====================================================
import imageUrlFormat from "utils/imageUrlFormat";

// ====================================================
const AvailableShops = ({shopList}) => {

  // <ShopCard1 shopData={{name: item.name,address: item.address,phone: item.phone,coverImgUrl:imageUrlFormat(item?.cover_photo) ,imgUrl: imageUrlFormat(item?.logo),shopUrl:`/shops/${item.id.toString()}`}} />
  return (
    <Box mb={7.5}>
      <H3 mb={3}>Also Available at</H3>

      <Grid container spacing={2}>
        {shopList.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={item.name}>
            <Link href={`/shops/${item.id.toString()}`}>
              <a>
                <FlexRowCenter
                  p={3.25}
                  width="100%"
                  component={Card}
                  flexDirection="column"
                >
                  <BazarAvatar height={48} width={48} src={imageUrlFormat(item?.logo)} />
                  <H5 mt={1.5} color="grey.800">
                    {item.name}
                  </H5>
                </FlexRowCenter>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// const shopList = [
//   {
//     name: "Tech Friend",
//     imgUrl: "/assets/images/faces/propic.png",
//   },
//   {
//     name: "Smart Shop",
//     imgUrl: "/assets/images/faces/propic(1).png",
//   },
//   {
//     name: "Gadget 360",
//     imgUrl: "/assets/images/faces/propic(8).png",
//   },
// ];
export default AvailableShops;
