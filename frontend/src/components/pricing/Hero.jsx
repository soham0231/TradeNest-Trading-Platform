import React from "react";

function Hero({ items }) {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[1200px] text-center px-6">

        <h1 className="text-3xl text-gray-700 font-medium mb-4">Charges</h1>
        <p className="text-xl text-gray-500 mb-6">List of all charges and taxes</p>
     

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-24 mt-43">
          {items.map((item, i) => (
            <div key={i} className="w-full md:w-[30%] flex flex-col items-center text-center">
              <img
                src={item.imageUrl}
                className="h-45 mb-6 object-contain"
              />
              <h2 className="text-3xl font-semibold text-gray-700 mb-3">
                {item.title}
              </h2>
              <p className="text-lg text-gray-500 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
       
    </div>  
</section>
  );
}

export default Hero;
