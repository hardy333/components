import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useGetRetroBonusDetailsFromURL = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const retroBonusID = searchParams.get("retroBonusID");
  const documentNo = searchParams.get("documentNo");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const condition = searchParams.get("condition");
  const planAmount = searchParams.get("planAmount");
  const retroPercent = searchParams.get("retroPercent");
  const customer = searchParams.get("customer");

  useEffect(() => {
    if (!retroBonusID) {
      navigate("/retro-bonuses");
    }
  }, []);



  return {
    retroBonusID, documentNo, startDate, endDate, condition, planAmount, retroPercent, customer

  }
};

export default useGetRetroBonusDetailsFromURL;
