import React from "react";

function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1300px] text-center mt-20 px-6">
        <h1 className="text-2xl font-medium mb-4 text-gray-600">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
        <hr className="text-gray-200 mt-25" />
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="flex items-start ">
          {/* Left Content */}
          <div className="w-1/2 text-left text-[17px] ml-20">
            <p className="text-gray-600 ">
              We kick-started operations on the 15th of August, 2010 <br />with the
              goal of breaking all barriers that traders and <br /> investors face in
              India in terms of cost, support, and <br />technology. We named the
              company Zerodha, a <br /> combination of Zero and "Rodha", the Sanskrit
              word for <br /> barrier.
            </p>

            <p className="text-gray-600 mt-6">
              Today, our disruptive pricing models and in-house <br /> technology have
              made us the biggest stock broker in <br /> India.
            </p>

            <p className="text-gray-600  mt-6">
              Over 1.6+ crore clients place billions of orders every year <br />
              through our powerful ecosystem of investment <br /> platforms,
              contributing over 15% of all Indian retail <br /> trading volumes.
            </p>
          </div>

          {/* Right Image & Links */}
          <div className="w-1/2 text-[17px]">
            <p className="text-gray-600 ">
              In addition, we run a number of popular open online <br /> educational
              and community initiatives to empower retail <br />traders and investors.
            </p>

            <p className="text-gray-600 mt-6">
              <a href="" className="text-blue-600"> Rainmatter</a>, our fintech fund and incubator, has invested <br /> in
              several fintech startups with the goal of growing the <br />ndian
              capital markets.
            </p>

            <p className="text-gray-600  mt-6">
              And yet, we are always up to something new every day. <br />Catch up on
              the latest updates on our blog or see what <br /> the media is saying
              about us or learn more about our <br /> business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
