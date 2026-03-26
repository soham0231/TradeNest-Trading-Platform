import { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";
// import { holdings } from "../data/data";

///holding data is fetched from backend and displayed in table format. Also a graph is plotted using chartjs to show the distribution of stocks in the portfolio
export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/allHoldings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllHoldings(response.data || []);
      })
      .catch((error) => {
        // log more details to help debugging (status, response data)
        if (error.response) {
          console.error(
            "Holdings fetch failed:",
            error.response.status,
            error.response.data,
          );
        } else {
          console.error("Error fetching holdings:", error.message || error);
        }
        setAllHoldings([]);
      });
  }, []);

  /// chart data preparing data for graph (guard numeric fields)
  const labels = allHoldings.map((h) => h?.name ?? "-");
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => Number(stock?.price ?? 0)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="text-xl font-light text-gray-700 mb-2">
        Holdings ({allHoldings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = Number(stock?.qty ?? 0);
              const avg = Number(stock?.avg ?? 0);
              const price = Number(stock?.price ?? 0);
              const curValue = price * qty;
              const isProfit = curValue - avg * qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock?.isLoss ? "loss" : "profit";

              return (
                <tr key={stock?._id ?? index}>
                  <td>{stock?.name ?? "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - avg * qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock?.net ?? "-"}</td>
                  <td className={dayClass}>{stock?.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between mt-6">
        <div className="w-full md:w-1/3">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="w-full md:w-1/3">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="w-full md:w-1/3">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}
