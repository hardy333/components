import React, { useEffect, useState } from "react";
import useCustomers from "../../hooks/api/useCustomers";
import "./customers.css";

const Customers = () => {
  const [count, setCount] = useState(0);
  const { data: customers } = useCustomers({
    queryKey: "customers",
    customerFilerValue: "retailers",
    count,
  });



  return (
    <div>
      Customers
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <div className="text-123">Lorem ipsum dolor sit amet.</div>
    </div>
  );
};

export default Customers;
