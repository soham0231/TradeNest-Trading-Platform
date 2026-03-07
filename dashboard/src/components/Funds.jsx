import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="w-full md:w-1/2 border rounded-md p-4">
  <p className="text-sm font-medium mb-3">Equity</p>

  {/* Row */}
  <div className="flex justify-between py-1">
    <p className="text-gray-500">Available margin</p>
    <p className="text-blue-600 font-semibold">4,043.10</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Used margin</p>
    <p className="font-medium">3,757.30</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Available cash</p>
    <p className="font-medium">4,043.10</p>
  </div>

  <hr className="my-3" />

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Opening balance</p>
    <p>4,043.10</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Opening balance</p>
    <p>3,736.40</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Payin</p>
    <p>4,064.00</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">SPAN</p>
    <p>0.00</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Delivery margin</p>
    <p>0.00</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Exposure</p>
    <p>0.00</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Options premium</p>
    <p>0.00</p>
  </div>

  <hr className="my-3" />

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Collateral (Liquid funds)</p>
    <p>0.00</p>
  </div>

  <div className="flex justify-between py-1">
    <p className="text-gray-500">Collateral (Equity)</p>
    <p>0.00</p>
  </div>

  <div className="flex justify-between py-1 font-semibold">
    <p>Total Collateral</p>
    <p>0.00</p>
  </div>
</div>
    </>
  );
};

export default Funds;
