// Clicking order row/card result navigation on order details page 

import { useNavigate } from "react-router";



const useOrderNavigate = () => {
  const navigate = useNavigate();

    
    
    const navigateToOrderDetails = (order) => {
        const urlParams = new URLSearchParams();
        urlParams.append("shop", order.shop);
        urlParams.append("date", order.date);
        urlParams.append("scheduledDate", order.scheduledDate);
        urlParams.append("vendor", order.vendor);
        urlParams.append("status", order.status);
        urlParams.append("orderID", order.orderID);
        urlParams.append("amount", order.amount);
        urlParams.append("invoiceAmount", order.invoiceAmount);
        urlParams.append("orderNumber", order.orderNumber);

        navigate("/order-details?" + urlParams.toString());
        
    }
  

    return {navigateToOrderDetails}
}

export default useOrderNavigate