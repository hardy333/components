import { useNavigate } from "react-router";

const useRetroBonusNavigate = (retroBonus, selectedCustomer) => {
  const navigate = useNavigate();

    const urlParams = new URLSearchParams();



    const navigateToRetroBonusDetails = (retroBonus) => {

        urlParams.append("retroBonusID", retroBonus.retroBonusID);
        urlParams.append("documentNo", retroBonus.documentNo);
        urlParams.append("startDate", retroBonus.startDate);
        urlParams.append("startDate", retroBonus.endDate);
        urlParams.append("planAmount", retroBonus.planAmount);
        urlParams.append("condition", retroBonus.condition);
        urlParams.append("retroPercent", retroBonus.retroPercent);
        urlParams.append("customer", selectedCustomer?.value);
    navigate("/retro-bonus-details?" + urlParams.toString());

    }
    


    return {
        navigateToRetroBonusDetails
    }
    
 
}

export default useRetroBonusNavigate