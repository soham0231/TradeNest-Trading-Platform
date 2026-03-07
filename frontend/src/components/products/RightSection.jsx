import React from "react";

function RightSection({
  imageUrl,
  productName,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="flex items-center gap-26">
         
          {/* Right Content */}
         <div className="w-1/2 text-left">
             <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {productName}
             </h2>

            <p className="text-gray-600 text-base max-w-xl mb-8">
              {description}
            </p>

            <a href={learnMore} className="text-blue-600"> Learn More <i className="fa-solid fa-arrow-right"></i></a> 

        </div>

           {/* Left Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src={imageUrl}
              alt="Largest Broker"
              className="w-full max-w-[1000px] h-auto"
            />
          </div>


        </div>
      </div>
    </section>
  );
}

export default RightSection;
