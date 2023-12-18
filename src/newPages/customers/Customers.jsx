import React, { useEffect, useState } from "react";
import useCustomers from "../../hooks/api/useCustomers";
import "./customers.css";
import CustomerCard from "./components/CustomerCard";

const Customers = () => {
  const { data: customers } = useCustomers({
    queryKey: "customers",
    customerFilerValue: "retailers",
  });




  return (
    <div>
      <h2>customers</h2>
      <section className="vendors-card-container">
        {
          customers?.map(customer => {
            return (
              <CustomerCard  key={customer.accountID} productsCount={customer.productsCount} customerName={customer.name} />
            )
          })
        }
      </section>
      
    </div>
  );
};

export default Customers;
