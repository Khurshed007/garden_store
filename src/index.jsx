import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/theme.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { RequestContext } from "./context/category-request.jsx";
import { ProductsRequestContext } from "./context/products-request.jsx";
import { CartContext } from "./context/cart-context.jsx";
import { LikedContext } from "./context/likes-context.jsx";
import { Body } from "./views/body-class-toggle/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LikedContext>
    <CartContext> 
    <ProductsRequestContext>
    <RequestContext>
    <ThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext>
    </RequestContext>
    </ProductsRequestContext>
    </CartContext>
    </LikedContext>
  </Provider>
);
