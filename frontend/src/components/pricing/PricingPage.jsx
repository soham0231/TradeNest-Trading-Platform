import OpenAccount from "../OpenAccount";
import Hero from "./Hero";
import Brokerage from "./Brokerage";

function PricingPage() {
  return (
    <>
  
      <Hero
        items={[
    {
      imageUrl: "/Assets/pricingEquity.svg",
      title:"Free equity delivery",
      desc:"All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
    },
    {
      imageUrl: "/Assets/intradayTrades.svg",
      title:"Intraday and F&O trades",
      desc: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades",
    },
    {
      imageUrl: "/Assets/pricingEquity.svg",
      title:"Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    }
  
  ]}
      />
      <OpenAccount />
      <Brokerage />

    </>
  );
}

export default PricingPage;
