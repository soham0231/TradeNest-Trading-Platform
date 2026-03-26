
import { Route, Routes } from "react-router-dom";

import Apps from "./components/Apps";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";
import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";
import { GeneralContextProvider } from "./components/GeneralContext";

const Dashboard = () => {
  return (
  <div className="w-full h-screen flex">
  <div className="flex-shrink-0 w-[500px] border-r">
    <GeneralContextProvider>
      <WatchList />
    </GeneralContextProvider>
  </div>

  <div className="flex-1 h-full overflow-y-auto p-6">
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/funds" element={<Funds />} />
      <Route path="/apps" element={<Apps />} />
    </Routes>
  </div>
</div>
  );
};

export default Dashboard;
