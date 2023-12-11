
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import InvoiceDetailsCards from "./newPages/invoiceDetails/InvoiceDetailsCards";
import "./css/App.css";
import InvoiceCards from "./newPages/invoices/InvoiceCards";
import CatalogueCards from "./newPages/catalogue/CatalogueCards";
import OrdersCards from "./newPages/orders/OrdersCardsContainer";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Routes>
        <Route path="/retro-bonuses" element={<RetroBonuses />} />
        <Route path="/retro-bonuse-details" element={<RetroBonusDetails />} />
        <Route path="/customers" element={<Customers />} />
      </Routes> */}

      {/* <LoadingSpinner size="small"/>
        <LoadingSpinner />
        <LoadingSpinner size="large"/> */}

        {/* Cards */}
        {/* Cards */}
      {/* <OrdersCards /> */}
      {/* <CatalogueCards /> */}
      {/* <InvoiceCards /> */}
      {/* <InvoiceDetailsCards /> */}
      <RetroBonuses />


    </QueryClientProvider>
  );
}

export default App;
