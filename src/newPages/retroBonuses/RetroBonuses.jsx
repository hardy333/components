import React, { useEffect, useState } from "react";
import useRetroBonuses from "./hooks/useRetroBonuses";
import useCustomers from "../../hooks/api/useCustomers";
import useRenderCount from "../../hooks/useRenderCount";

// css
import "./retro-bonuses.css";
import RetroBonusCard from "./components/RetroBonusCard";

const RetroBonuses = () => {
  const [retailerId, setRetailerId] = useState("R00001");
  const [vendorId, setVendorId] = useState("D00002");

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const { data: customers } = useCustomers({ customerFilerValue: "vendors" });
  const { data: retroBonuses } = useRetroBonuses({
    retailerId: retailerId,
    vendorId: selectedCustomer?.accountID,
  });

  useEffect(() => {
    if (!customers) return;
    setSelectedCustomer(customers[1]);
  }, [customers]);

  const renderCount = useRenderCount();
  const [count, setCount] = useState(0);

  return (
    <section>
      <header></header>
      <section className="retro-bonus-cards-container">
        {retroBonuses?.map((retroBonus) => {
          console.log("sss", retroBonus.retroBonusID);

          return (
            <RetroBonusCard
              retroBonus={retroBonus}
              key={retroBonus.retroBonusID}
            />
          );
        })}
      </section>
    </section>
  );
};

export default RetroBonuses;
