import  { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);


export default function WatchList () {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full h-full p-4 bg-white rounded shadow h-full overflow-y-auto">

      <div className="flex items-center gap-2 mb-3 relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full px-4 py-2 border-b border-gray-200 text-gray-700 placeholder-gray-400"
        />
        <span className="absolute right-4 text-sm text-gray-500">
          {" "}
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="divide-y divide-gray-200">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};



///another component to show the actions that can be performed on a stock in watchlist when hovered over. Actions include buy, sell, analytics and more options
const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="flex items-center justify-between text-sm font-light py-3">
        <p className={stock.isDown ? "text-red-500" : "text-green-500"}>
          {stock.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-500" />
          )}
          <span className="text-gray-700">{stock.price}</span>
        </div>

      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};


// Actions include buy, sell, analytics and more options
const WatchListActions = ({ uid }) => {
  
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <div className="flex items-center space-x-2 mt-2">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
          Buy
        </button>
      </Tooltip>
      
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">
          <BarChartOutlined className="text-gray-600" />
        </button>
      </Tooltip>

      <Tooltip 
        title="More" 
        placement="top" 
        arrow 
        TransitionComponent={Grow}
        >
        <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">
          <MoreHoriz className="text-gray-600" />
        </button>
      </Tooltip>

    </div>
  );
};
