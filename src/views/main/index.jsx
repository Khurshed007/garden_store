import React, {useEffect} from "react";
import { CardItem } from "../../components/card-item/card-item";
import { Head } from "./head/head";
import { Categories } from "../categories";

// Redux
import { requestAllProductItem } from "../../store/async-action";
import { getDiscountItems } from "../../store/selectors";
// Кастомный хук
import useData from "../../hooks/useData";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../loading/loading";

export const Main = () => {
  const DATA_DISCOUNT_ITEMS = useData(requestAllProductItem, getDiscountItems);
   const isLoading = useSelector(state => state.shop.isLoading)
   let dispatch = useDispatch()

    console.log(isLoading, "I am Loading")
   useEffect(() => {
    dispatch(requestAllProductItem());
  }, [dispatch]);


  // isLoading ? (<Loading/>) :
  return   (
    <>
      <Head />
      <Categories showBreadCrumbs = {false}  categoriesItem = {4} btnText = {"All Categories"} btnDispplay = {true} />
      <section>
        <CardItem
          dataItems={DATA_DISCOUNT_ITEMS}
          text={"Sales"}
          btnText={"All Sales"}
          btnDispplay={true}
          hideBreadCrumbs = {true}
        />
      </section>
    </>
  );
};
