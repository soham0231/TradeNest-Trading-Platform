import React from "react";

export default function EquityTable() {
  return (
    <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-sm font-medium text-gray-500"></th>
            <th className="p-4 text-sm font-medium text-gray-700">
              Equity delivery
            </th>
            <th className="p-4 text-sm font-medium text-gray-700">
              Equity intraday
            </th>
            <th className="p-4 text-sm font-medium text-gray-700">
              F&O - Futures
            </th>
            <th className="p-4 text-sm font-medium text-gray-700">
              F&O - Options
            </th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-700">
          <tr className="border-t">
            <td className="p-4 font-medium">Brokerage</td>
            <td className="p-4">Zero Brokerage</td>
            <td className="p-4">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="p-4">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="p-4">Flat Rs. 20 per executed order</td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">STT/CTT</td>
            <td className="p-4">0.1% on buy & sell</td>
            <td className="p-4">0.025% on the sell side</td>
            <td className="p-4">0.02% on the sell side</td>
            <td className="p-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  0.125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">Transaction charges</td>
            <td className="p-4">
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td className="p-4">
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td className="p-4">
              NSE: 0.00173% <br />
              BSE: 0
            </td>
            <td className="p-4">
              NSE: 0.03503% (on premium) <br />
              BSE: 0.0325% (on premium)
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
            <td className="p-4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className="p-4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">SEBI charges</td>
            <td className="p-4">₹10 / crore</td>
            <td className="p-4">₹10 / crore</td>
            <td className="p-4">₹10 / crore</td>
            <td className="p-4">₹10 / crore</td>
          </tr>

          <tr className="border-t">
            <td className="p-4 font-medium">Stamp charges</td>
            <td className="p-4">0.015% or ₹1500 / crore on buy side</td>
            <td className="p-4">0.003% or ₹300 / crore on buy side</td>
            <td className="p-4">0.002% or ₹200 / crore on buy side</td>
            <td className="p-4">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
