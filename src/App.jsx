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

const queryClient = new QueryClient();

function App() {
  const [isShowing, setIsShowing] = useState(false);


  
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <button onClick={() => setIsShowing(!isShowing)}>Toggle</button>
        {/* {isShowing ? <OrderStatusMenu /> : null} */}
        {/* <Customers /> */}
        <RetroBonuses />
        <MobileSwitch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
