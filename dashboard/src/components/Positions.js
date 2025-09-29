import React from "react";

import { useState } from "react";

import { useEffect } from "react";

import axios from "axios";

// import { positions } from "../data/data";

import "./Positions.css";

const Positions = () => {
  const [allPositins, setAllPositins] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allPositins`).then((res) => {
      console.log("res.data");

      setAllPositins(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositins.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositins.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;

            const profClass = isProfit ? "profit" : "loss";

            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
