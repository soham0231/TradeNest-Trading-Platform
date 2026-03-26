import React from "react";
import { Link} from "react-router-dom";

function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">

        {/* Hero Image */}
        <img
          src="/Assets/homeHero.png"
          alt="Hero"
          className="mx-auto mb-16 max-w-full h-auto"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
          Invest in everything
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-base">
          Online platform to invest in stocks, derivatives, mutual funds,
          and more.
        </p>

        {/* CTA Button */}
        <Link to={"/signup"}>
        <button className="bg-blue-500 text-white px-8 py-2 rounded-md shadow-md hover:shadow-lg transition">
          Signup now
        </button>
        </Link>
        

      </div>
    </section>
  );
}

export default Hero;
