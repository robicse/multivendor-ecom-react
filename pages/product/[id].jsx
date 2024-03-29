import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import AvailableShops from "components/products/AvailableShops";
import FrequentlyBought from "components/products/FrequentlyBought";
import ProductDescription from "components/products/ProductDescription";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import RelatedProducts from "components/products/RelatedProducts";
import { H2 } from "components/Typography";
import bazarReactDatabase from "data/bazar-react-database";
import { useEffect, useState } from "react";
import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/api/related-products";
import api from "utils/api/superstore-shop";
import vendorApi from "utils/api/vendor";
const BASE_URL = process.env.BASE_URL

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
})); // ===============================================================

// ===============================================================
const ProductDetails = (props) => {

  const itemChange = (item)=>{
    return{
      brand: item?.brand?.name,
      price: item.base_price || 0,
      title: item.name,
      imgUrl: `${BASE_URL}/public/${item.thumbnail_image}`,
      category: item.category?.name,
      unit: item?.unit,
      discount: item.discount,
      id: item.id,
      rating: 2,
      imgGroup: item.photos.map((img,index)=>`${BASE_URL}/public/${img}`)
    }
  }
  const {productDetails, shopList} = props
  const product = itemChange(productDetails);

  console.log(product)
  // {
  //   price: 168,
  //   title: "Lord 2019",
  //   imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
  //   category: "automotive",
  //   unit: "kg",
  //   discount: 8,
  //   id: "7222243834583537",
  //   rating: 2,
  //   imgGroup: [
  //     "/assets/images/products/Automotive/1.Ford2019.png",
  //     "/assets/images/products/Automotive/1.Ford2019.png",
  //     "/assets/images/products/Automotive/1.Ford2019.png",
  //   ],
  // },
  // const [product, setProduct] = useState(bazarReactDatabase[0]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [frequentlyBought, setFrequentlyBought] = useState([]);
  /**
   * Note:
   * ==============================================================
   * 1. We used client side rendering with dummy fake data for related products and frequently product
   * 2. Product details data is static data, we didn't call any rest api
   * 3. If you fetch data from server we recommended you to call getStaticProps function in below.
   *    The code is commented if want to call it just uncomment code and put the server url
   */

  useEffect(() => {
    getRelatedProducts().then((data) => setRelatedProducts(data));
    getFrequentlyBought().then((data) => setFrequentlyBought(data));
  }, []);

  const handleOptionClick = (_, value) => setSelectedOption(value);

  return (
    <ShopLayout1 navbar={<Navbar />}>
      <Container
        sx={{
          my: 4,
        }}
      >
        {product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}

        <StyledTabs
          textColor="primary"
          value={selectedOption}
          indicatorColor="primary"
          onChange={handleOptionClick}
        >
          <Tab className="inner-tab" label="Description" />
          <Tab className="inner-tab" label="Review (3)" />
        </StyledTabs>

        <Box mb={6}>
          {selectedOption === 0 && <ProductDescription />}
          {selectedOption === 1 && <ProductReview />}
        </Box>

        {/* {frequentlyBought && (
          <FrequentlyBought productsData={frequentlyBought} />
        )} */}

        <AvailableShops shopList={shopList}/>

        {relatedProducts && <RelatedProducts productsData={relatedProducts} />}
      </Container>
    </ShopLayout1>
  );
}; 


export  const getStaticPaths = async()=> {

  const newArrivalProduct = await api.getNewArrivalList();
  const paths =newArrivalProduct.slice(0, 3).map((item)=>{
   return{
     params: {
       id: item.id.toString()
     }
   };
 });
 return {
   paths,
   fallback:false,
 }
}

export  const getStaticProps = async(context)=> {
  const productDetails = await api.getProductDetailsById(context.params.id)
  const shopList = await vendorApi.getSellerList()
 return {
   props: {
    productDetails,
    shopList
   }
 }
}

// export const getStaticPaths = async () => {
//   const paths = bazarReactDatabase.slice(0, 2).map((pro) => ({ params: { id: pro.id } }));
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };
// export async function getStaticProps() {
//   const frequentlyBought = await getFrequentlyBought();
//   const relatedProducts = await getRelatedProducts();
//   return {
//     props: { frequentlyBought, relatedProducts },
//   };
// }

export default ProductDetails;
