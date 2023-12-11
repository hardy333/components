import React from 'react'
import useInvoices from './useInvoices'
import baseCardStyles from "../../styles/tableRowCard.module.css";
import styles from "./invoiceCardsContainer.module.css"


const InvoiceCardsContainer = () => {
    const {data} = useInvoices()
    console.log(data)
    
  return (
    <div className={`${styles.invoiceCardsContainer}`}>
      {data?.map((product) => {

        
        return (
          <article className={`${baseCardStyles.card}`} style={{borderLeft: `2px solid red`}}>
            <ul className={`${baseCardStyles.cardUl}`}>
              <li className={`${baseCardStyles.cardLi} ${styles.cardHeading} `}>
                <span className={`${baseCardStyles.cardLiLabel} `}>მაღაზია</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.shop}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>მომწოდებელი</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.vendor}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>თარიღი</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.date} </span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>შეკვეთის თანხა</span>    
                <span className={`${baseCardStyles.cardLiValue} `}>{product.orderAmount}</span>
              </li> 
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>ინვოისის თანხა</span>    
                <span className={`${baseCardStyles.cardLiValue} `}>{product.invoiceAmount}</span>
              </li> 
            </ul>
          </article>
        );
      })}
    </div>
  )
}

export default InvoiceCardsContainer