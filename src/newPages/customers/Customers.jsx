import React, { useEffect, useState } from "react";
import useCustomers from "../../hooks/api/useCustomers";

const Customers = () => {
    const [count, setCount] = useState(0)
    const {data: customers} = useCustomers({queryKey: "customers", customerFilerValue: "retailers", count})

    console.log(customers)


    useEffect(() => {
        console.log("In Effect")


    }, [customers])
 

  return <div>Customers
    <button onClick={() => setCount(count + 1)}>{count}</button>
    
    
  </div>;
};

export default Customers;
