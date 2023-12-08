import React, { useEffect, useState } from "react";
import useOrderStatuses from "../../hooks/api/useOrderStatuses";

const OrderStatusMenu = () => {
  const [count, setCount] = useState(0);
  const { data, error, isFetching, isLoading } = useOrderStatuses();
  // useOrderStatuses()


  console.log(data)

  useEffect(() => {

    if(!data) return 
    
    console.log("---  effect")
    
    
    
    
    
  },[data])


  return (
    <div style={{border: "2px solid green"}}>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>isFetching : {String(isFetching)}</p>
      <p>isLoading : {String(isLoading)}</p>
    </div>
  );
};

export default OrderStatusMenu;
