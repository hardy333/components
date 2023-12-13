import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <ul style={{display: "flex", gap: "20px"}}>
        <li>
          <Link to="/customers">customers</Link>
        </li>
        <li>
          <Link to="/retro-bonuses">retro-bonuses</Link>
        </li>

        <li>-----------------------</li>
        <li>
          <Link to="order-cards">order Cards</Link>
        </li>
        <li>
          <Link to="order-detail-cards">order Details Cards</Link>
        </li>
        <li>
          <Link to="invoice-cards">invoice cards</Link>
        </li>
        <li>
          <Link to="invoice-detail-cards">invoice detail cards</Link>
        </li>
        <li>
          <Link to="catalogue-cards">catalogue cards</Link>
        </li>
        <li>
          <Link to="retro-bonus-detail-cards">retro bonus detail cards</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
