import React from "react";
import InvoiceDetailsCards from "./components/InvoiceDetailsCards";
import useGetInvoiceDetailsFromURL from "./hooks/useGetInvoiceDetailsFromURL";

const InvoiceDetails = () => {
  const {
    invoiceAmount,
    invoiceID,
    waybillNumber,
    orderNumber,
    invoiceNumber,
    orderID,
    amount,
    vendor,
    shop,
    date,
  } = useGetInvoiceDetailsFromURL();

  console.log({
    invoiceAmount,
    invoiceID,
    waybillNumber,
    orderNumber,
    invoiceNumber,
    orderID,
    amount,
    vendor,
    shop,
    date,
  })

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>InvoiceDetails</h1>
      <InvoiceDetailsCards />
    </div>
  );
};

export default InvoiceDetails;
