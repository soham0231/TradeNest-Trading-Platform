import React from "react";

function Stats() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1100px] px-6 py-20">

        <div className="flex items-start gap-10">

          {/* Left Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-10">
              Trust with confidence
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Customer-first always
                </h3>
                <p className="text-gray-600 max-w-xl">
                  That’s why 1.3+ crore customers trust Zerodha with over
                  ₹3.5 lakh crores worth of equity investments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  No spams or gimmicks
                </h3>
                <p className="text-gray-600 max-w-xl">
                  No gimmicks, spam, gamification, or annoying push
                  notifications. High-quality apps you use at your pace.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  The Zerodha universe
                </h3>
                <p className="text-gray-600 max-w-xl">
                  Not just an app, but a whole ecosystem. Our investments in
                  30+ fintech startups offer tailored services for your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do better with money
                </h3>
                <p className="text-gray-600 max-w-xl">
                  With initiatives like Nudge and Kill Switch, we actively help
                  you make better financial decisions.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image & Links */}
          <div className="w-1/2">
            <img
              src="/Assets/ecosystem.png"
              alt="Ecosystem"
              className="w-full max-w-md mx-auto"
            />

            <div className="flex justify-center gap-6 mt-8">
              <a className="text-blue-500 inline-flex items-center gap-1">
                Explore our products <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a className="text-blue-500 inline-flex items-center gap-1">
                Try Kite <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
