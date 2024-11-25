import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "../../context/api-context";
import { BasketContext } from "../../context/basket-context";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { addToBasket } = useContext(BasketContext);
  const { data } = useContext(APIContext);
  const { slug } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const findDetails = data.filter((data) => data.slug === slug);
    if (findDetails.length > 0) {
      setDetails(findDetails[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  // const numberOfReviews = parseInt(details.reviews.length);
  return (
    <div>
      <div className="product-wrapper">
        <div className="product">
          <div>
            <img src={details.thumbnail} alt="" />
          </div>
          <div>
            <h1>{details.title}</h1>
            <div>
              <span>{details.rating}/5 </span>
              {/* <Link to={"/reviews"}></Link> */}
              <span>Read reviews ()</span>
            </div>

            <p>{details.description}</p>
            <p>£{details.price}</p>
          </div>
          <button onClick={() => addToBasket(details)}>Add</button>
        </div>
      </div>
    </div>
  );
}
