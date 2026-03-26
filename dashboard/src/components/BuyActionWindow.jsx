import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import ReactDOM from "react-dom";

export default function BuyActionWindow({ uid }) {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:5000/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      .then(() => {
        generalContext.closeBuyWindow();
      })
      .catch((err) => {
        console.error("Order failed:", err);
        generalContext.closeBuyWindow();
      });
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return ReactDOM.createPortal(
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">Margin required ₹140.65</span>

        <div>
          <Link
            to=""
            className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
            onClick={handleBuyClick}
          >
            Buy
          </Link>

          <Link
            to=""
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>,

    document.getElementById("portal"),
  );
}
