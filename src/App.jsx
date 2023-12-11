import { useState } from "react";

import "./App.css";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import OrderStatusMenu from "./components/orderStatusMenu.jsx/orderStatusMenu";
import {
  QueryClient,
  QueryClientContext,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { axiosPrivate } from "./axios/axios";
import Customers from "./newPages/customers/Customers";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
import MobileSwitch from "./components/mobileSwitch/MobileSwitch";
import OrdersCardsContainer from "./newPages/orders/OrdersCardsContainer";
import CatalogueCardsContainer from "./newPages/catalogue/CatalogueCardsContainer";
import InvoiceCardsContainer from "./newPages/invoices/InvoiceCardsContainer";

const queryClient = new QueryClient();

function App() {


  
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <LoadingSpinner size="small"/>
        <LoadingSpinner />
        <LoadingSpinner size="large"/> */}
        {/* <OrdersCardsContainer /> */}
        {/* <CatalogueCardsContainer /> */}
        <InvoiceCardsContainer />
    

        
      </div>
    </QueryClientProvider>
  );
}

export default App;
