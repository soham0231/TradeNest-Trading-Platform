import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="/Assets/kite.png"
        productName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="/Assets/console.png"
        productName="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""  
      />
       <LeftSection
        imageUrl="/Assets/coin.png"
        productName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="/Assets/kiteconnect.png"
        productName="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <LeftSection
        imageUrl="/Assets/varsity.png"
        productName="Varsity Mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <Universe
      heading="The Zerodha Universe"
      subheading="Extend your trading and investment experience even further with our partner platforms"
      items={[
    {
      imageUrl: "/Assets/zerodhaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      imageUrl: "/Assets/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      imageUrl: "/Assets/goldenpiLogo.png",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      imageUrl: "/Assets/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      imageUrl: "/Assets/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.",
    },
    {
      imageUrl: "/Assets/dittoLogo.png",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ]}
/>

    </>
  );
}

export default ProductPage;
