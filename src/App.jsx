import "./App.css";

import 'tippy.js/dist/tippy.css'; // optional
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import InvoiceDetailsCards from "./newPages/invoiceDetails/components/InvoiceDetailsCards";
import InvoiceCards from "./newPages/invoices/components/InvoiceCards";
import CatalogueCards from "./newPages/catalogue/components/CatalogueCards";
import OrdersCards from "./newPages/orders/OrdersCards";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
import OrderDetailCards from "./newPages/orderDetails/components/OrderDetailCards";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Customers from "./newPages/customers/Customers";
import RetroBonusDetailCards from "./newPages/retroBonusDetails/components/RetroBonusDetailCards";
import BaseModal from "./components/baseModal/BaseModal";
import { useEffect, useState } from "react";
import Orders from "./newPages/orders/Orders";
import OrderDetails from "./newPages/orderDetails/OrderDetails";
import Invoices from "./newPages/invoices/Invoices";
import InvoiceDetails from "./newPages/invoiceDetails/InvoiceDetails";
import Catalogue from "./newPages/catalogue/Catalogue";
import RetroBonusDetails from "./newPages/retroBonusDetails/RetroBonusDetails";
import SelectMenu from "./components/selectMenu/SelectMenu";
import Employees from "./newPages/employees/Employees";
import { Menu, MenuItem } from "@szhsin/react-menu";
import Test from "./newPages/Test";
const queryClient = new QueryClient();

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };



  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
     

      <Routes>
        {/* <Route path="/retro-bonuse-details" element={<RetroBonusDetails />} /> */}
        <Route path="test" element={<Test />}/>

        <Route path="/order-cards" element={<OrdersCards />} />
        <Route path="/order-detail-cards" element={<OrderDetailCards />} />
        <Route path="/catalogue-cards" element={<CatalogueCards />} />
        <Route
          path="/retro-bonus-detail-cards"
          element={<RetroBonusDetailCards />}
        />
        <Route path="/invoice-cards" element={<InvoiceCards />} />
        <Route path="/invoice-detail-cards" element={<InvoiceDetailsCards />} />

        {/* Real Pages Start*/}
        {/* Real Pages Start*/}
        <Route path="/order-details" element={<OrderDetails  />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoice-details" element={<InvoiceDetails />} />
        
        <Route path="/catalogue" element={<Catalogue />} />

        <Route path="/retro-bonuses" element={<RetroBonuses />} />
        <Route path="/retro-bonus-details" element={<RetroBonusDetails />} />
        {/* Real Pages End*/}
        {/* Real Pages End*/}
      </Routes>
      {/* <OrderStatusMenu /> */}
      
      

      {/* <LoadingSpinner size="small"/>
        <LoadingSpinner />
        <LoadingSpinner size="large"/> */}

      {/* Cards */}
      {/* Cards */}
      {/* <OrdersCards /> */}
      {/* <CatalogueCards /> */}
      {/* <InvoiceCards /> */}
      {/* <InvoiceDetailsCards /> */}
      {/* <RetroBonuses /> */}
      {/* <OrderDetailCards /> */}

    </QueryClientProvider>
  );
}

export default App;
