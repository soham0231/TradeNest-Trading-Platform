import { useState } from "react";
import CurrencyTable from "./CurrencyTable";
import EquityTable from "./Equitytable";
import CommodityTable from "./Commoditytable";

export default function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  const tabs = ["Equity", "Currency", "Commodity"];

  return (
  <div className="w-full py-10">

    <div className="max-w-[1200px] mx-auto px-4">

        {/* Tabs */}
        <div className="flex gap-10 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-lg font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tables */}
        {activeTab === "Equity" && <EquityTable />}
        {activeTab === "Currency" && <CurrencyTable />}
        {activeTab === "Commodity" && <CommodityTable />}

        <div className="mt-12 text-center text-xl">
          <a className="text-blue-600"> Calculate your costs upfront</a>{" "}
             using our brokerage calculator
        </div>


    </div>
    
</div>

    
  );
}
