import { Box, Container, Grid } from "@mui/material";
import CarouselCard1 from "components/carousel-cards/CarouselCard1";
import Carousel from "components/carousel/Carousel";
const BASE_URL = process.env.BASE_URL
// ======================================================
const Section1 = ({ carouselData }) => {
  return (
    <Box bgcolor="white" mb={7.5}>
      <Grid container>
  <Grid item xs={3}>
   
  </Grid>
  <Grid item xs={9}>
  <Carousel
          totalSlides={carouselData.length}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
          spacing="0px"
        >
          {carouselData.map((data, ind) => (
            <CarouselCard1 carousel={{photoUrl:`${BASE_URL}/public/${data?.photo}`, buttonText: 'jfga', description:'test', buttonLik:'#' }} key={ind} />
          ))}
        </Carousel>
  </Grid>
</Grid>
      {/* <Container
        sx={{
          py: 4,
        }}
      >

        <Carousel
          totalSlides={carouselData.length}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
          spacing="0px"
        >
          {carouselData.map((data, ind) => (
            <CarouselCard1 carousel={{photoUrl:`${BASE_URL}/public/${data.photo}`, buttonText: 'jfga', description:'test', buttonLik:'#' }} key={ind} />
          ))}
        </Carousel>
      </Container> */}
    </Box>
  );
};

export default Section1;
