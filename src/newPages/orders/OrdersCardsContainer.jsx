import React from "react";
import useOrders from "./useOrders";
import styles from "./ordersCardsContainer.module.css";
import baseCardStyles from "../../styles/tableRowCard.module.css";
import { getColorByOrderStatus } from "../../constants/orderStatusColors";

const OrdersCardsContainer = () => {
  const { data } = useOrders();

  console.log(data);

  return (
    <div className={`${styles.ordersCardsContainer}`}>
      {data?.map((order) => {
        return (
          <article className={`${baseCardStyles.card}`} style={{borderLeft: `2px solid ${getColorByOrderStatus(order.status)}`}}>
            <ul className={`${baseCardStyles.cardUl}`}>
              <li className={`${baseCardStyles.cardLi} ${styles.cardHeading}`}>
                <span className={`${baseCardStyles.cardLiLabel} ${styles.vendorName}`}>{order.vendor}</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{order.date}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>მაღაზია</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{order.shop}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>თანხა</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{order.amount} GEL</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>სტატუსი</span>
                <span className={`${baseCardStyles.cardLiValue} ${styles.cardStatus}`} style={{color: getColorByOrderStatus(order.status)}}>{order.status}</span>
              </li> 
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>სერვისის დონე</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{order.serviceLevel ? order.serviceLevel + " %" : "უცობია" } </span>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default OrdersCardsContainer;
