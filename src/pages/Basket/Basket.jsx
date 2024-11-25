import React, { useContext } from "react";
import { BasketContext } from "../../context/basket-context";
import "./Basket.css";

export default function Basket() {
  const {
    basketItems,
    addToBasket,
    removeFromBasket,
    clearBasket,
    getBasketTotal,
    numberOfItemsInBasket,
  } = useContext(BasketContext);
  return (
    <div className="page">
      <div className="item-wrapper">
        <h1 className="title">Basket</h1>
        {basketItems.map((item) => (
          <div className="item" key={item.id}>
            <div className="">
              <img src={item.thumbnail} alt={item.title} className="" />
              <div className="">
                <h1 className="">{item.title}</h1>
                <p className="">£{item.price}</p>
              </div>
            </div>
            <div className="amount">
              <button
                className="plus"
                onClick={() => {
                  addToBasket(item);
                }}
              >
                +
              </button>
              <p className="quant">{item.quantity}</p>
              <button
                className="minus"
                onClick={() => {
                  removeFromBasket(item);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="basket-tot">
        {basketItems.length > 0 ? (
          <div className="">
            <h3 className="total">
              Total: £{parseFloat(getBasketTotal()).toFixed(2)}
            </h3>
            <p>There are {numberOfItemsInBasket()} items in your basket</p>
            <button
              className=""
              onClick={() => {
                clearBasket();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="">Your cart is empty</h1>
        )}
      </div>
    </div>
  );
}
