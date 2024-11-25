import React, { createContext, useState, useEffect } from "react";

export const BasketContext = createContext(null);

export const BasketContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );

  const addToBasket = (item) => {
    const isItemInBasket = basketItems.find(
      (basketItems) => basketItems.id === item.id
    ); // check if the item is already in the cart

    if (isItemInBasket) {
      setBasketItems(
        basketItems.map(
          (
            basketItems // if the item is already in the cart, increase the quantity of the item
          ) =>
            basketItems.id === item.id
              ? { ...basketItems, quantity: basketItems.quantity + 1 }
              : basketItems // otherwise, return the cart item
        )
      );
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  };

  const removeFromBasket = (item) => {
    const isItemInBasket = basketItems.find(
      (basketItems) => basketItems.id === item.id
    );

    if (isItemInBasket.quantity === 1) {
      setBasketItems(
        basketItems.filter((basketItems) => basketItems.id !== item.id)
      ); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setBasketItems(
        basketItems.map((basketItems) =>
          basketItems.id === item.id
            ? { ...basketItems, quantity: basketItems.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : basketItems
        )
      );
    }
  };

  const clearBasket = () => {
    setBasketItems([]); // set the cart items to an empty array
  };

  const getBasketTotal = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // calculate the total price of the items in the cart
  };

  const numberOfItemsInBasket = () => {
    return basketItems.reduce((total, items) => total + items.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  useEffect(() => {
    const basketItems = localStorage.getItem("basketItems");
    if (basketItems) {
      setBasketItems(JSON.parse(basketItems));
    }
  }, []);

  const contextValue = {
    basketItems,
    addToBasket,
    removeFromBasket,
    clearBasket,
    getBasketTotal,
    numberOfItemsInBasket,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {props.children}
    </BasketContext.Provider>
  );
};
