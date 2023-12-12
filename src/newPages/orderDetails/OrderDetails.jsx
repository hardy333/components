import OrderDetailCards from "./components/OrderDetailCards";
import useGetOrderDetailsFromURL from "./hooks/useGetOrderDetailsFromURL";

const OrderDetails = () => {
  const {
    date,
    scheduledDate,
    orderID,
    shopAddress,
    vendor,
    status,
    amount,
    invoiceAmount,
    orderNumber,
  } = useGetOrderDetailsFromURL();



  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Order Details</h1>
      <button
      
      >
        navigate
      </button>
      <OrderDetailCards />
    </div>
  );
};

export default OrderDetails;
