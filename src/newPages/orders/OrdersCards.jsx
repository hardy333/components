import useOrders from "./useOrders";
import {cardHeading, vendorName, cardStatus} from "./ordersCards.module.css";
import { getColorByOrderStatus } from "../../components/orderStatusMenu/orderStatusColors";
import {card, cardUl, cardLiLabel, cardLiValue, cardLi, cardsContainer} from "../../styles/tableCards.module.css";
import useOrderNavigate from "./hooks/useOrderNavigate";




const OrdersCards = () => {
  const { data } = useOrders();

  const {navigateToOrderDetails} = useOrderNavigate()

  return (
    <div className={`${cardsContainer}`}>
      {data?.map((order) => {
        return (
          <article onClick={() => navigateToOrderDetails(order)} key={order.orderID} className={`${card}`} style={{borderLeft: `2px solid ${getColorByOrderStatus(order.status)}`}}>
            <ul className={`${cardUl}`}>
              <li className={`${cardLi} ${cardHeading}`}>
                <span className={`${cardLiLabel} ${vendorName}`}>{order.vendor}</span>
                <span className={`${cardLiValue}`}>{order.date}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>მაღაზია</span>
                <span className={`${cardLiValue}`}>{order.shop}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>თანხა</span>
                <span className={`${cardLiValue}`}>{order.amount} GEL</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>სტატუსი</span>
                <span className={`${cardLiValue} ${cardStatus}`} style={{color: getColorByOrderStatus(order.status)}}>{order.status}</span>
              </li> 
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>სერვისის დონე</span>
                <span className={`${cardLiValue}`}>{order.serviceLevel ? order.serviceLevel + " %" : "უცობია" } </span>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default OrdersCards;
