import React from 'react'
import useInvoiceDetails from './useInvoiceDetails'
import {card, cardUl, cardLiLabel, cardLiValue, cardLi, cardsContainer} from "../../styles/tableCards.module.css";


const InvoiceDetailsCards = () => {
    const {data} = useInvoiceDetails()
    
  return (
    <div className={`${cardsContainer}`}>
      {data?.map((invoice) => {
        
        return (
          <article key={invoice.invoiceID} className={`${card}`} style={{borderLeft: `2px solid red`}}>
            <ul className={`${cardUl}`}>
              <li className={`${cardLi}  `}>
                <span className={`${cardLiLabel} `}>მაღაზია</span>
                <span className={`${cardLiValue}`}>{invoice.shop}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>მომწოდებელი</span>
                <span className={`${cardLiValue}`}>{invoice.vendor}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>თარიღი</span>
                <span className={`${cardLiValue}`}>{invoice.date} </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>შეკვეთის თანხა</span>    
                <span className={`${cardLiValue} `}>{invoice.orderAmount}</span>
              </li> 
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>ინვოისის თანხა</span>    
                <span className={`${cardLiValue} `}>{invoice.invoiceAmount}</span>
              </li> 
            </ul>
          </article>
        );
      })}
    </div>
  )
}

export default InvoiceDetailsCards
