import useRetroBonusDetails from '../hooks/useRetroBonusDetails'
import {
  card,
  cardUl,
  cardLiLabel,
  cardLiValue,
  cardLi,
  cardsContainer,
} from "../../../styles/tableCards.module.css";


const RetroBonusDetailCards = () => {
  const {data} = useRetroBonusDetails()
  
  return (
    <div className={`${cardsContainer}`}>
      {data?.map((obj) => {
        
        
        return (
          <article
            key={obj.barcode}
            className={`${card}`}
            style={{ borderLeft: `2px solid var(--color-success )` }}
          >
            <ul className={`${cardUl}`}>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>პროდუქტი</span>
                <span className={`${cardLiValue}`}>{obj.product}</span>
              </li>
              <li className={`${cardLi}`} style={{display: typeof obj.retroPercent === "number" ? "flex" : "none" }}>
                <span className={`${cardLiLabel}`}>ბონუსი</span>
                <span className={`${cardLiValue}`}>{obj.retroPercent} %</span>
              </li>
              <li className={`${cardLi}`}>
                <span className={`${cardLiLabel}`}>ბარკოდი </span>
                <span className={`${cardLiValue} `}>
                  {obj.barcode}
                </span>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export default RetroBonusDetailCards