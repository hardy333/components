import { useState } from "react";

import "./App.css";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import OrderStatusMenu from "./components/orderStatusMenu.jsx/orderStatusMenu";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { axiosPrivate } from "./axios/axios";
import Customers from "./newPages/customers/Customers";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
import MobileSwitch from "./components/mobileSwitch/MobileSwitch";
import CatalogueCards from "./newPages/catalogue/CatalogueCards";
import InvoiceCards from "./newPages/invoices/InvoiceCards";
import OrdersCards from "./newPages/orders/OrdersCardsContainer";
import InvoiceDetailsCards from "./newPages/invoiceDetails/InvoiceDetailsCards";

const queryClient = new QueryClient();

function App() {


  
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <LoadingSpinner size="small"/>
        <LoadingSpinner />
        <LoadingSpinner size="large"/> */}
        {/* <OrdersCards /> */}
        {/* <CatalogueCards /> */}
        {/* <InvoiceCards /> */}
        <InvoiceDetailsCards />
    

        
      </div>
    </QueryClientProvider>
  );
}

export default App;
