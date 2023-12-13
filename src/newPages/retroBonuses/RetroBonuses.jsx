import React, { useEffect, useState } from "react";
import useRetroBonuses from "./hooks/useRetroBonuses";
import useCustomers from "../../hooks/api/useCustomers";
import useRenderCount from "../../hooks/useRenderCount";

// css
import "./retro-bonuses.css";
import RetroBonusCard from "./components/RetroBonusCard";
import SelectMenu from "../../components/selectMenu/SelectMenu";

const RetroBonuses = () => {
  const [retailerId, setRetailerId] = useState("R00001");
  const [vendorId, setVendorId] = useState("D00002");

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const { data: customers, isLoading: customersIsLoading } = useCustomers({
    customerFilerValue: "vendors",
  });
  const { data: retroBonuses } = useRetroBonuses({
    retailerId: retailerId,
    vendorId: selectedCustomer?.accountID,
  });

  useEffect(() => {
    if (!customers) return;
    const { name, customerID } = customers[1];
    setSelectedCustomer({ value: name, label: name, customerID });
  }, [customers]);

  const renderCount = useRenderCount();
  const [count, setCount] = useState(0);

  console.log({ selectedCustomer });

  return (
    <section>
      <header>
        <SelectMenu
          isLoading={customersIsLoading}
          selectedMenuOption={selectedCustomer}
          setSelectedMenuOption={setSelectedCustomer}
          options={
            customers
              ? customers.map((obj) => ({
                  label: obj.name,
                  value: obj.name,
                  accountID: obj.accountID,
                }))
              : []
          }
        />
      </header>
      <section className="retro-bonus-cards-container">
        {retroBonuses?.map((retroBonus) => {
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
