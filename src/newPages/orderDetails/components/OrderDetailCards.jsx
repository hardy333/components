import {
  card,
  cardUl,
  cardLiLabel,
  cardLiValue,
  cardLi,
  cardsContainer,
} from "../../../styles/tableCards.module.css";
import useOrdeDetails from "../hooks/useOrdeDetails";

const OrderDetailCards = () => {
  const { data } = useOrdeDetails();

  return (
    <div className={`${cardsContainer}`}>
      {data?.map((orderDetail) => {
        console.log(orderDetail)
        
        
        return (
          <article
            key={orderDetail.barcode}
            className={`${card}`}
            style={{ borderLeft: `2px solid red` }}
          >
            <ul className={`${cardUl}`}>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel} `}>ბარკოდი</span>
                <span className={`${cardLiValue}`}>{orderDetail.barcode}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>პროდუქტი</span>
                <span className={`${cardLiValue}`}>{orderDetail.product}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>თანხა</span>
                <span className={`${cardLiValue}`}>{orderDetail.price} </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>ფასი </span>
                <span className={`${cardLiValue} `}>
                  {orderDetail.price}
                </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>რაოდენობა</span>
                <span className={`${cardLiValue} `}>
                  {orderDetail.quantity}
                </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>დარეზერვებული</span>
                <span className={`${cardLiValue} `} style={{color: orderDetail.redStatus ? "red" : ""}}>
                  {orderDetail.reservedQuantity}
                </span>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default OrderDetailCards;
