import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";

export const likedProductsContext = React.createContext({});

const Provider = likedProductsContext.Provider;

export const LikedProductsContext = ({ children }) => {
  const [requestItems, setRequestItems] = useState([]);
//    console.log(children)
  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data, "data")
        setRequestItems([...data]);
      });
  }, []);


  // TODO: решить самостоятельно нужен ли useMemo ? и useCallback ? 

  const value = {requestItems};

  return <Provider value={value}>{children}</Provider>;
};
