import { Grid } from "@mui/material";
import BazarCard from "components/BazarCard";
import CategorySectionCreator from "components/CategorySectionCreator";
import NewArrival from "components/icons/NewArrival";
import ProductCard2 from "components/product-cards/ProductCard2";
import React from "react";

const Section5 = ({ newArrivalsList }) => {

  const itemChange = (item)=>{
    return{
      id:item.id,
      title:item.name,
      price:item.base_price,
      imgUrl:`${BASE_URL}/public/${item.thumbnail_image}`,
      rating:item.rating,
      discount:item.discount
    }

  }
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazarCard
        sx={{
          p: 2,
        }}
      >
        <Grid container spacing={3}>
          {newArrivalsList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 
               {...item} 
              />
            </Grid>
          ))}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>
  );
};

export default Section5;
