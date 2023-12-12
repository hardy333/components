import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import InvoiceDetailsCards from "./newPages/invoiceDetails/InvoiceDetailsCards";
import "./css/App.css";
import InvoiceCards from "./newPages/invoices/InvoiceCards";
import CatalogueCards from "./newPages/catalogue/CatalogueCards";
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
import Employees from "./newPages/employees.jsx/Employees";
const queryClient = new QueryClient();

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {

    console.log("Param")
    
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />

      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <ul>
          <li>Hello</li>
        </ul>
      </BaseModal>

      <Routes>
        <Route path="/retro-bonuses" element={<RetroBonuses />} />
        {/* <Route path="/retro-bonuse-details" element={<RetroBonusDetails />} /> */}
        <Route path="/customers" element={<Customers />} />

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
        {/* Real Pages End*/}
        {/* Real Pages End*/}
      </Routes>

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
