import { getColorByOrderStatus } from "../../components/orderStatusMenu/orderStatusColors";
import OrderStatusMenu from "../../components/orderStatusMenu/OrderStatusMenu";
import OrderDetailCards from "./components/OrderDetailCards";
import useGetOrderDetailsFromURL from "./hooks/useGetOrderDetailsFromURL";
import AsyncMenu from "../../components/asyncMenu/AsyncMenu";
import RetroBonusConditionsMenu from "../../components/retroBonusConditionsMenu/RetroBonusConditionsMenu";

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

  console.log("-----", orderID);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Order Details</h1>
      <p>{orderID}</p>
      <div style={{ border: "1px solid red" }}>
        <h2>Hello</h2>
        <OrderStatusMenu statusName={status} orderID={orderID} />
        {/* <RetroBonusConditionsMenu orderID={orderID}/> */}
      </div>

      <OrderDetailCards statusColor={getColorByOrderStatus(status)} />
    </div>
  );
};

export default OrderDetails;
