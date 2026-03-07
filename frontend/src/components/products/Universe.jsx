import React from "react";
import { Link } from "react-router-dom";

function UniverseSection({ heading, subheading, items }) {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          {heading}
          </h2>

          <p className="text-gray-600 mb-20 max-w-3xl mx-auto">
          {subheading}
          </p>

        {/* Flex rows */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-24">
          {items.map((item, i) => (
            <div key={i} className="w-full md:w-[30%] flex flex-col items-center text-center">
              <img
                src={item.imageUrl}
                className="h-14 mb-6 object-contain"
              />
              <p className="text-sm text-gray-600 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Link to="/signup" >
           <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
              Sign up for free
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default UniverseSection;
