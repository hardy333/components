import React from "react";
import UserSvg from "../svgs/UserSvg";

const EmployeeCard = ({ employee, setModalIsOpen }) => {
  const { name, status, access } = employee;

  return (
    <article className="">
      <div className="employee-card__img-container">
        <UserSvg />
      </div>

      <h2>{name}</h2>
      <h3>{status}</h3>
      <h4>წვდომა:</h4>
      <ul>
        <li>{access}</li>
      </ul>
      <button className="btn btn-success" onClick={() => setModalIsOpen(true)}>
        რედაქტირება
      </button>
    </article>
  );
};

export default EmployeeCard;
