import React from 'react'
import useInvoiceDetails from './useInvoiceDetails'
import {card, cardUl, cardLiLabel, cardLiValue, cardLi, cardsContainer} from "../../styles/tableCards.module.css";


const InvoiceDetailsCards = () => {
    const {data} = useInvoiceDetails()
    
  return (
    <div className={`${cardsContainer}`}>
      {data?.map((invoiceDetail, index) => {
        
        return (
          <article key={invoiceDetail.invoiceID} className={`${card}`} style={{borderLeft: `2px solid red`}}>
            <ul className={`${cardUl}`}>
              <li className={`${cardLi}  `}>
                <span className={`${cardLiLabel} `}>ბარკოდი</span>
                <span className={`${cardLiValue}`}>{invoiceDetail.barcode}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>პროდუქტი</span>
                <span className={`${cardLiValue}`}>{invoiceDetail.product}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>რაოდენობა</span>
                <span className={`${cardLiValue}`}>{invoiceDetail.invoiceQuantity} </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>შეკვეთის თანხა</span>    
                <span className={`${cardLiValue} `}>{invoiceDetail.orderAmount}</span>
              </li> 
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>ინვოისის თანხა</span>    
                <span className={`${cardLiValue} `}>{invoiceDetail.invoiceAmount}</span>
              </li> 
            </ul>
          </article>
        );
      })}
    </div>
  )
}

export default InvoiceDetailsCards
