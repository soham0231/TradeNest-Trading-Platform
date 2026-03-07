import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-[1100px] text-center mt-18 px-6">
        <h1 className="text-3xl text-gray-700 font-medium mb-4">Zerodha Products</h1>
        <p className="text-xl text-gray-700 mb-6">Sleek, modern,and intuitive trading platforms</p>
        <p className="text-gray-700">Check out our <a href="" className="text-blue-600">investment offerings <i className="fa-solid fa-arrow-right"></i> </a>  </p>
        <hr className="text-gray-200 mt-25" />
      </div>

    </section>
  );
}

export default Hero;
