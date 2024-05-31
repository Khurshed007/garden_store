import React, { useState } from "react";

export const cartContext = React.createContext({});

const Provider = cartContext.Provider;

export const CartContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  let [goodsData, setGoodsData] = useState({});
  let [counter, SetCounter] = useState(0);
 
 
 
  function deleteFromCart(e) {
   let target = e.target.dataset.articul;
   setGoodsData(prevData => {
     const newData = { ...prevData };
 
     if (newData[target] <= 1) {
       // Если элемент с таким articul еще не существует, добавляем его в объект с начальным счетчиком 1
       delete newData[target]
     } else if(newData[target] > 0 && !Number.isNaN(newData[target])){
       // Если элемент с таким articul уже существует, увеличиваем его счетчик на 1
       newData[target]--
     }
     // else if(newData)
 
     return newData;
   });  
   SetCounter((prev) => --prev)
  }  
 
 
 
   function addtoCart(e) {
    // console.log(e.target, "event target")
      let target = e.target.dataset.articul;
   
      setGoodsData(prevData => {
      //  console.log(prevData,"prevdata")
         const newData = { ...prevData };
         
     
         if (!newData[target]) {
           // Если элемент с таким articul еще не существует, добавляем его в объект с начальным счетчиком 1
           newData[target] = 1;
         } else {
           // Если элемент с таким articul уже существует, увеличиваем его счетчик на 1
           newData[target] += 1;
         }
     
         return newData;
       });
 
  
       SetCounter((prev) => ++prev)
           

    
  }     

  // TODO: решить самостоятельно нужен ли useMemo ? и useCallback ? 

  const value = { goodsData, counter, addtoCart, deleteFromCart };

  return <Provider value={value}>{children}</Provider>;
};
