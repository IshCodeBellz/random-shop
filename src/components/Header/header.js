import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { BasketContext } from "../../context/basket-context";
import "./header.css";
import { useContext } from "react";

export default function Header() {
  const [hover, setHover] = useState(false);
  const { numberOfItemsInBasket } = useContext(BasketContext);
  return (
    <div className="header">
      <div className="links">
        <div className="menu"></div>
        <div className="shop-title">
          <Link to="/">
            <h1>RandomShop</h1>
          </Link>
        </div>
        <div
          className="basket"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div>
            <Link to="/basket" className="basket-icon">
              {hover ? (
                <ShoppingCart size={32} color={"grey"} />
              ) : (
                <ShoppingCart size={32} color={"whitesmoke"} />
              )}
            </Link>
          </div>
          <div>
            <h3 className="basket-number">{numberOfItemsInBasket()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
