import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RetroBonuses from "./newPages/retroBonuses/RetroBonuses";
import Customers from "./newPages/customers/Customers";
import RetroBonusDetails from "./newPages/retroBonuses/RetroBonusDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/retro-bonuses" element={<RetroBonuses />} />
        <Route path="/retro-bonuse-details" element={<RetroBonusDetails />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
