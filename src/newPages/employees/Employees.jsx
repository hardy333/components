import React, { useState } from "react";
import { employeesData } from "./data/employeesData";
import EmployeeCard from "./components/EmployeeCard";
import { employeesContainer } from "./employees.module.css";
import BaseModal from "../../components/baseModal/BaseModal";

const Employees = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>

      <section className={`${employeesContainer}`}>
        {employeesData?.map((employee) => {
          return (
            <EmployeeCard
              setModalIsOpen={setModalIsOpen}
              key={employee.name}
              employee={employee}
            />
          );
        })}
      </section>

      <BaseModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>

          <button onClick={closeModal}>Close Modal</button>
        </>
      </BaseModal>
    </>
  );
};

export default Employees;
