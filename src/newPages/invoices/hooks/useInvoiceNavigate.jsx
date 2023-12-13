import { useNavigate } from "react-router";

const useInvoiceNavigate = () => {
    const navigate = useNavigate();

    
    
    const navigateToInvoiceDetails = (invoice) => {
        const urlParams = new URLSearchParams();
        urlParams.append("date", invoice.date);
        urlParams.append("waybillNumber", invoice.waybillNumber);
        urlParams.append("orderNumber", invoice.orderNumber);
        urlParams.append("invoiceNumber", invoice.invoiceNumber);
        urlParams.append("vendor", invoice.vendor);
        urlParams.append("shop", invoice.shop);
        urlParams.append("invoiceAmount", invoice.invoiceAmount);
        urlParams.append("amount", invoice.amount);
        urlParams.append("orderID", invoice.orderID);
        urlParams.append("invoiceID", invoice.invoiceID);

        navigate("/invoice-details?" + urlParams.toString());
        
    }
  

    return {navigateToInvoiceDetails}
}

export default useInvoiceNavigate