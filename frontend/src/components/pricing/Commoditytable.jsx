import React from "react";

export default function CommodityTable() {
  return (
    <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-sm font-medium text-gray-500"></th>
            <th className="p-4 text-sm font-medium text-gray-700">
              Commodity futures
            </th>
            <th className="p-4 text-sm font-medium text-gray-700">
              Commodity options
            </th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-700">
          <tr className="border-t">
            <td className="p-4 font-medium">Brokerage</td>
            <td className="p-4">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="p-4">₹20/executed order</td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">STT/CTT</td>
            <td className="p-4">0.01% on sell side (Non-Agri)</td>
            <td className="p-4">0.05% on sell side</td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">Transaction charges</td>
            <td className="p-4">
              MCX: 0.0021% <br />
              NSE: 0.0001%
            </td>
            <td className="p-4">
              MCX: 0.0418% <br />
              NSE: 0.001%
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">GST</td>
            <td className="p-4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className="p-4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">SEBI charges</td>
            <td className="p-4">
              Agri: ₹1 / crore <br />
              Non-agri: ₹10 / crore
            </td>
            <td className="p-4">₹10 / crore</td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">Stamp charges</td>
            <td className="p-4">0.002% or ₹200 / crore on buy side</td>
            <td className="p-4">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
