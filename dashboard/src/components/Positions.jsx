import { useState, useEffect } from "react";
import axios from "axios";
// import { positions } from "../data/data";

export default function Positions() {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/allPositions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAllPositions(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
        setAllPositions([]);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const qty = Number(stock?.qty ?? 0);
              const avg = Number(stock?.avg ?? 0);
              const price = Number(stock?.price ?? 0);
              const curValue = price * qty;
              const isProfit = curValue - avg * qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock?.isLoss ? "loss" : "profit";
              return (
                <tr key={stock?._id ?? index}>
                  <td>{stock?.product ?? "-"}</td>
                  <td>{stock?.name ?? "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - avg * qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock?.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
