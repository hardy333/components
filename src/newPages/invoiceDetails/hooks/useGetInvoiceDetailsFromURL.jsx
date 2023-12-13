import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useGetInvoiceDetailsFromURL = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  
  const invoiceID = searchParams.get("invoiceID");

  const waybillNumber = searchParams.get("waybillNumber");
  const orderNumber = searchParams.get("orderNumber");

  const invoiceNumber = searchParams.get("invoiceNumber");
  const invoiceAmount = searchParams.get("invoiceAmount");
  const orderID = searchParams.get("orderID");
  const amount = searchParams.get("amount");
  const vendor = searchParams.get("vendor");
  const shop = searchParams.get("shop");
  const date = searchParams.get("date");


    
  useEffect(() => {
    if (!invoiceID) {
      navigate("/invoices");
    }
  },[])


  return {
    invoiceAmount, invoiceID, waybillNumber, orderNumber, invoiceNumber, orderID, amount, vendor, shop, date
  }
};

export default useGetInvoiceDetailsFromURL;
