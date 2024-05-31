import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import { getDiscountPercent } from "../utils/getDiscountPercent";

export const productsRequestContext = React.createContext({});

const Provider = productsRequestContext.Provider;

export const ProductsRequestContext = ({ children }) => {
  const [productsAll, setproductsAll] = useState([]);
  const [productsSalesAll, setproductsSalesAll] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data, "data")
        setproductsAll([...data]);
        return data;
      })
      .then((data) => {
        setproductsSalesAll(
            data
              .sort(
                (elem, elem2) =>
                    getDiscountPercent(elem2.price, elem2.discont_price) -
                    getDiscountPercent(elem.price, elem.discont_price)
                )
              .filter(
                ({ discont_price }, index) => discont_price !== null
              )
          );
      });
  }, []);

  // console.log(productsSalesAll, "all");
  // TODO: решить самостоятельно нужен ли useMemo ? и useCallback ?

  const value = { productsAll, productsSalesAll };

  return <Provider value={value}>{children}</Provider>;
};
