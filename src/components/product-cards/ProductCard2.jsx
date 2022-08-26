import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import Link from "next/link";
import React from "react"; // ==========================================================
const BASE_URL = process.env.BASE_URL
// ==========================================================
const ProductCard2 = (props) => {
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

  const data =  itemChange(props)
  const { imgUrl, title, price, id } = data;
  return (
    <Link href={`/product/${id}`}>
      <a>
        <HoverBox borderRadius="8px" mb={1}>
          <LazyImage
            src={imgUrl}
            width={0}
            height={0}
            layout="responsive"
            alt={title}
          />
        </HoverBox>
        <H4 fontSize={14} mb={0.5}>
          {title}
        </H4>
        <H4 fontSize={14} color="primary.main">
        ৳{Math.ceil(price).toLocaleString()}
        </H4>
      </a>
    </Link>
  );
};

export default ProductCard2;
