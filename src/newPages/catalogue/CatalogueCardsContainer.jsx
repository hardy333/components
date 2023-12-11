import React from 'react'
import useCatalogue from './useCatalogue'
import baseCardStyles from "../../styles/tableRowCard.module.css";
import styles from "./catalogueCardsContainer.module.css"


const CatalogueCardsContainer = () => {
    const {data} = useCatalogue()
    
    
  return (
    <div className={`${styles.catalogueCardsContainer}`}>
      {data?.map((product) => {

        
        return (
          <article className={`${baseCardStyles.card}`} style={{borderLeft: `2px solid #6e0ff5`}}>
            <ul className={`${baseCardStyles.cardUl}`}>
              <li className={`${baseCardStyles.cardLi} ${styles.cardHeading} `}>
                <span className={`${baseCardStyles.cardLiLabel} `}>ბარკოდი: {product.barcode}</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.date}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>პროდუქტი</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.product}</span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>ფასი</span>
                <span className={`${baseCardStyles.cardLiValue}`}>{product.price ? product.price + " GEL" : "უცნობია"} </span>
              </li>
              <li className={`${baseCardStyles.cardLi}`}>
                <span className={`${baseCardStyles.cardLiLabel}`}>სტატუსი</span>    
                <span className={`${baseCardStyles.cardLiValue} `}>{product.status ? product.status : "უცნობია"}</span>
              </li> 
            </ul>
          </article>
        );
      })}
    </div>
  )
}

export default CatalogueCardsContainer