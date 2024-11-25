import React, { createContext, useContext, useState, useEffect } from "react";

export const APIContext = createContext(null);

export const APIContextProvider = (props) => {
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState([]);

  const fectData = () => {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.products.forEach((item) => {
          // Generate slug from the title
          const slug = item.title
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, "_") // Replace spaces with underscores
            .replace(/[^\w_]/g, ""); // Remove non-word characters except underscores

          // Add the new key-value pair
          item.slug = slug;
        });
        setData(data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fectData();
  }, []);

  const contextAPI = { data };

  return (
    <APIContext.Provider value={contextAPI}>
      {props.children}
    </APIContext.Provider>
  );
};
