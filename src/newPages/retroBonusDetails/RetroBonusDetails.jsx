import React from "react";
import RetroBonusDetailCards from "./components/RetroBonusDetailCards";
import useGetRetroBonusDetailsFromURL from "./hooks/useGetRetroBonusDetailsFromURL";

const RetroBonusDetails = () => {
  const {
    retroBonusID,
    documentNo,
    startDate,
    endDate,
    condition,
    planAmount,
    retroPercent,
    customer,
  } = useGetRetroBonusDetailsFromURL();

  

  console.log({
    retroBonusID,
    documentNo,
    startDate,
    endDate,
    condition,
    planAmount,
    retroPercent,
    customer,
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>RetroBonusDetails</h1>
      
      <RetroBonusDetailCards />
    </div>
  );
};

export default RetroBonusDetails;
