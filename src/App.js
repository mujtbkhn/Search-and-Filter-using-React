import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './index.css'

//Database
import products from './db/data';
import Card from "./Components/Card";


function App() {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [query, setQuery] = useState("")

  //-----------Input Filter------------

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //-----------Radio Filter------------
  const handleChange = (event) => {
    setSelectedQuery(event.target.value)
  }
  //  ------------button filter-------------
  const handleClick = (event) => {
    setSelectedQuery(event.target.value)
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products

    //filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, company, color, newPrice, title }) => category === selected || company === selected || color === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }
  const result = filteredData(products, selectedQuery, query)
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
