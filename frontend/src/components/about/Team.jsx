import React from "react";

function Team() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1300px] text-center mt-3 px-6">
        <h1 className="text-2xl font-medium mb-4 text-gray-600">People</h1>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-20 ">
        <div className="flex items-start ">
          {/* Left Content */}
          <div className="w-1/2 ">
            <img
              src="/Assets/nithinKamath.jpg"
              alt=""
              className="w-75 rounded-full ml-30"
            />
            <p className="ml-52 text-[18px] mt-4">Nithin Kamath</p>
            <p className="ml-55 text-gray-600 text-[14px] mt-3">Founder,CEO</p>
          </div>

          {/* Right Image & Links */}
          <div className="w-1/2 text-[17px] mr-27 ">
            <p className="text-gray-600 ">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p className="text-gray-600 mt-6">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p className="text-gray-600  mt-6">
              Playing basketball is his zen.
            </p>

             <p className="text-gray-600 mt-6 ">
              Connect on {" "}
              <a href="" className="text-blue-600">Homepage</a> / {" "}
              <a href="" className="text-blue-600">TradingQnA</a> / {" "}
              <a href="" className="text-blue-600">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
