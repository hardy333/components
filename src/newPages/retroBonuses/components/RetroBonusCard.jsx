import React from "react";
import { useNavigate } from "react-router-dom";
import useRetroBonusNavigate from "../hooks/useRetroBonusNavigate";

const RetroBonusCard = ({ retroBonus }) => {
  const {navigateToRetroBonusDetails} = useRetroBonusNavigate()

  return (
    <article  key={retroBonus.retroBonusID} className="retro-bonus-card">
      <p>Percent - </p>
      <p>{retroBonus.retroPercent} %</p>
      <p>სტატუსი : {retroBonus.status}</p>
      <p>დეით: {retroBonus.startDate}</p>
      <button onClick={() => navigateToRetroBonusDetails(retroBonus)}>Show</button>
    </article>
  );
};

export default RetroBonusCard;
