import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useGetOrderDetailsFromURL = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  let date = searchParams.get("date") || "Unknown";
  let scheduledDate = searchParams.get("scheduledDate") || "Unknown";
  let shopAddress = searchParams.get("shop") || "Unknown";
  let vendor = searchParams.get("vendor") || "Unknown";
  let status = searchParams.get("status") || "Unknown";
  let amount = searchParams.get("amount") || "Unknown";
  let invoiceAmount = searchParams.get("invoiceAmount") || "Unknown";
  let orderNumber = searchParams.get("orderNumber") || "Unknown";
  const orderID = searchParams.get("orderID");
  

  useEffect(() => {
    if (!orderID) {
      console.log("hello");
      navigate("/orders");
    }
  },[])


  return {
    date,
    scheduledDate,
    orderID,
    shopAddress,
    vendor,
    status,
    amount,
    invoiceAmount,
    orderNumber,
  };
};

export default useGetOrderDetailsFromURL;
