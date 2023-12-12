import React from "react";
import { useSearchParams } from "react-router-dom";

const RetroBonusDetails = () => {
  const [searchParams] = useSearchParams();
  const retroBonusID =
    searchParams.get("retroBonusID") || "19ac6fd7-7f9e-11e8-80ef-005056b569bf";

  const documentNo = searchParams.get("documentNo");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const vendor = searchParams.get("vendor");

  const condition = searchParams.get("condition");
  const planAmount = searchParams.get("planAmount");
  const retroPercent = searchParams.get("retroPercent");

  return (
    <div>
      <h2>RetroBonusDetails</h2>
      <p>{documentNo}</p>
      <p>{startDate}</p>
      <p>{vendor}</p>
      <p>{retroPercent}</p>
    </div>
  );
};

export default RetroBonusDetails;
