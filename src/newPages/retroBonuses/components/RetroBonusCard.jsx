import React from "react";
import { useNavigate } from "react-router-dom";

const RetroBonusCard = ({ retroBonus }) => {
  const navigate = useNavigate();

  const showRetroBonusDetails = () => {
    const urlParams = new URLSearchParams();
    urlParams.append("retroBonusID", retroBonus.retroBonusID);
    urlParams.append("documentNo", retroBonus.documentNo);
    urlParams.append("startDate", retroBonus.startDate);
    urlParams.append("vendor", "ddd");
    urlParams.append("planAmount", retroBonus.planAmount);
    urlParams.append("condition", retroBonus.condition);
    urlParams.append("retroPercent", retroBonus.retroPercent);
    navigate("/retro-bonuse-details?" + urlParams.toString());
  };

  return (
    <article key={retroBonus.retroBonusID} className="retro-bonus-card">
      <p>Percent - </p>
      <p>{retroBonus.retroPercent} %</p>
      <p>სტატუსი : {retroBonus.status}</p>
      <p>დეით: {retroBonus.startDate}</p>
      <button onClick={showRetroBonusDetails}>Show</button>
    </article>
  );
};

export default RetroBonusCard;
