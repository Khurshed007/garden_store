import React, { useMemo, useState } from "react";

export const likeContext = React.createContext({});

const Provider = likeContext.Provider;

export const LikedContext = ({ children }) => {
  let [likesData, setLikesData] = useState({});
  let [isLikActive, setLikeActive] = useState("unliked")
  let [counter, SetCounter] = useState(0);
 
 
 
 
   function addtoLikes(e) {

      let target = e;
    //  console.log(e.target)
     console.log(isLikActive, "islikeactive")
     setLikesData(prevData => {
        // Создаем новый объект для обновления состояния, чтобы избежать мутации предыдущего состояния
        const newData = { ...prevData };

        newData[target] = newData[target] === "liked" ? "unliked" : "liked";

        return newData;
      });
    
    
  }     
//   useMemo(() => {
// //    addtoLikes(e)
//   }, likesData)

//   function deleteLikes(e) {
//     console.log(e.target, "event target")
//       let target = e.target.dataset.articul;
//       setLikesData(prevData => {
//        console.log(prevData,"prevdata")
//          const newData = { ...prevData };
//          if (newData[target] && newData[target] === "liked") {
//            // Если элемент с таким articul еще не существует, добавляем его в объект с начальным счетчиком 1
//            newData[target] = "unliked";
//          }
     
//          return newData;
//        });
 
  
//        setLikeActive((prev) => prev === "unliked" ? "liked" : "unliked")
           
//      // let articul = {}
//      //  articul[target] = 0;
//          // console.log(goodsData,"Asd")      
//      //    setGoodsData([...data, {allcounter : 0}] )
    
//   }     


  // TODO: решить самостоятельно нужен ли useMemo ? и useCallback ? 

  const value = {addtoLikes, isLikActive, likesData };

  return <Provider value={value}>{children}</Provider>;
};
