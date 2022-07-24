import React, { useState, useEffect } from "react";
import ProducLineComponent from "../components/productLine.js";

export const Cosmetics = () => {
  const baseApiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json";

  const productBrands = ["covergirl", "dior", "almay", "piggy paint", "nyx"];

  const productCategories = ["Powder", "Liquid", "Cream", "Gell", "Pencil"];
  const productTypes = [
    "Blush",
    "Bronzer",
    "Eyebrow",
    "Eyeliner",
    "Eyeshadow",
    "Foundation",
    "Lipstick",
    "Lip liner"
  ];

  const [data, setData] = useState([]);
  const [productCategory, setProductCategory] = useState(productCategories[0]);
  const [productType, setProductType] = useState(productTypes[0]);
  const [productBrand, setProductBrand] = useState(productBrands[0]);

  function logProduct() {
    console.log(`You selected category with : ${productCategory} `);
  }

  useEffect(() => {
    logProduct();
    const url = getUrl(productBrand, productCategory, productType);
    getProducts(url);
  });

  const getUrl = (brand, category, productType) => {
    return `${baseApiUrl}?brand=${brand}&product_category=${category}&product_type=${productType}`;
  };

  const getProducts = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>Cosmetics</h2>
        </header>
        <div>
          <div>
            Brand:
            <select
              value={productBrand || ""}
              id="product-Brand"
              onChange={(e) => setProductBrand(e.target.value)}
            >
              {productBrands.map((b) => {
                const dispay = b ? b : "";
                return (
                  <option key={b} value={b}>
                    {dispay}
                  </option>
                );
              })}
            </select>
            Category:
            <select
              value={productCategory || ""}
              id="product-Category"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              {productCategories.map((cat) => {
                const dispay = cat ? cat : "";
                return (
                  <option key={cat} value={cat}>
                    {dispay}
                  </option>
                );
              })}
            </select>
            Type:
            <select
              value={productType || ""}
              id="product-Type"
              onChange={(e) => setProductType(e.target.value)}
            >
              {productTypes.map((t) => {
                const dispay = t ? t : "";
                return (
                  <option key={t} value={t}>
                    {dispay}
                  </option>
                );
              })}
            </select>
          </div>
          <ul>
            {data.map((p) => {
              return (
                <div>
                  <ProducLineComponent product={p} />
                </div>
                //<div>ModalInFunctionalComponent</div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cosmetics;
