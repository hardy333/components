import { getColorByOrderStatus } from "../../constants/orderStatusColors";
import OrderStatusMenu from "../../components/orderStatusMenu/OrderStatusMenu";
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

  console.log("-----", orderID)


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Order Details</h1>
      <p>{orderID}</p>
      <OrderStatusMenu  orderID={orderID} statusColor={getColorByOrderStatus(status)}/>
      <OrderDetailCards statusColor={getColorByOrderStatus(status)} />
    </div>
  );
};

export default OrderDetails;
