import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { APIContext } from "../../context/api-context";
import { BasketContext } from "../../context/basket-context";
import "./cards.css";

export default function Card(props) {
  const { addToBasket } = useContext(BasketContext);
  const { data } = useContext(APIContext);

  return (
    <>
      {props.data.map((data) => (
        <div key={data.id} className="card">
          <Link to={data.slug}>
            <img src={data.thumbnail} alt={""} />
          </Link>
          <h3>{data.brand}</h3>
          <h5>{data.title}</h5>
          <p>£{data.price}</p>
          <button className="button" onClick={() => addToBasket(data)}>
            {" "}
            Add to Basket
          </button>
          <br />
        </div>
      ))}
    </>
  );
}
