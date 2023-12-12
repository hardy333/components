
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import InvoiceDetailsCards from "./newPages/invoiceDetails/InvoiceDetailsCards";
import "./css/App.css";
import InvoiceCards from "./newPages/invoices/InvoiceCards";
import CatalogueCards from "./newPages/catalogue/CatalogueCards";
import OrdersCards from "./newPages/orders/OrdersCardsContainer";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
import OrderDetailCards from "./newPages/orderDetails/components/OrderDetailCards";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Customers from "./newPages/customers/Customers";
import RetroBonusDetailCards from "./newPages/retroBonusDetails/components/RetroBonusDetailCards";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Routes>
        <Route path="/retro-bonuses" element={<RetroBonuses />} />
        {/* <Route path="/retro-bonuse-details" element={<RetroBonusDetails />} /> */}
        <Route path="/customers" element={<Customers />} />

        <Route path="/order-cards" element={<OrdersCards />} />
        <Route path="/order-detail-cards" element={<OrderDetailCards />} />
        <Route path="/catalogue-cards" element={<CatalogueCards />} />
        <Route path="/retro-bonus-detail-cards" element={<RetroBonusDetailCards />} />
        <Route path="/invoice-cards" element={<InvoiceCards />} />
        <Route path="/invoice-detail-cards" element={<InvoiceDetailsCards />} />
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
