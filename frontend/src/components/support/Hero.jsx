import { useState } from "react";
import {
  PlusIcon,
  UserCircleIcon,
  ChartBarIcon,
  CurrencyRupeeIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const [openIndex, setOpenIndex] = useState(0);

  const supportData = [
    {
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  const icons = [
    PlusIcon,
    UserCircleIcon,
    ChartBarIcon,
    CurrencyRupeeIcon,
    Cog6ToothIcon,
    CircleStackIcon,
  ];

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT */}
          <div className="col-span-12 md:col-span-8 space-y-5">
            {supportData.map((section, index) => {
              const Icon = icons[index];
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border border-gray-200 rounded-md">
                  
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-lg font-medium text-gray-800">
                        {section.title}
                      </span>
                    </div>

                    <ChevronDownIcon
                      className={`h-5 w-5 text-blue-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Body */}
                  {isOpen && (
                    <div className="border-t bg-white px-16 py-6">
                      <ul className="space-y-3 list-disc text-blue-600">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="ml-5 hover:underline cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="border-l-4 border-orange-500 bg-orange-50 px-5 py-4 text-sm text-gray-700">
              Due to high volume,{" "}
              <span className="text-blue-600 cursor-pointer">
                reactivation
              </span>{" "}
              requests may take an extra 24–48 business hours to process.
            </div>

            <div className="border border-gray-200 rounded-md">
              <div className="bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700">
                Quick links
              </div>
              <ul className="divide-y text-sm text-blue-600">
                <li className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  1. Track account opening
                </li>
                <li className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  2. Track segment activation
                </li>
                <li className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  3. Intraday margins
                </li>
                <li className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  4. Kite user manual
                </li>
                <li className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  5. Learn how to create a ticket
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
