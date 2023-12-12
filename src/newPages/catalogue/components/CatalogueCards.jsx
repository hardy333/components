import React from 'react'
import useCatalogue from '../hooks/useCatalogue'
import {cardHeading} from "./catalogueCards.module.css"
import {card, cardUl, cardLiLabel, cardLiValue, cardLi, cardsContainer} from "../../../styles/tableCards.module.css";



const CatalogueCards = () => {
    const {data} = useCatalogue()
    
    
  return (
    <div className={`${cardsContainer}`}>
      {data?.map((product) => {

        
        return (
          <article key={product.id} className={`${card}`} style={{borderLeft: `2px solid #6e0ff5`}}>
            <ul className={`${cardUl}`}>
              <li className={`${cardLi} ${cardHeading} `}>
                <span className={`${cardLiLabel} `}>ბარკოდი: {product.barcode}</span>
                <span className={`${cardLiValue}`}>{product.date}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>პროდუქტი</span>
                <span className={`${cardLiValue}`}>{product.product}</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>ფასი</span>
                <span className={`${cardLiValue}`}>{product.price ? product.price + " GEL" : "უცნობია"} </span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>სტატუსი</span>    
                <span className={`${cardLiValue} `}>{product.status ? product.status : "უცნობია"}</span>
              </li> 
            </ul>
          </article>
        );
      })}
    </div>
  )
}

export default CatalogueCards