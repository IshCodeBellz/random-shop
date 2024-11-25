import React, { useState, useContext } from "react";
import Card from "../../components/Cards/cards";
import { APIContext } from "../../context/api-context";
import "./Homepage.css";

export default function Homepage() {
  const { data } = useContext(APIContext);

  const [query, setQuery] = useState("");
  const filteredItems = data.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <input
        value={query}
        type="Search"
        placeholder="Search products"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="card-wrapper">
        <Card data={filteredItems} />
      </div>
    </div>
  );
}
