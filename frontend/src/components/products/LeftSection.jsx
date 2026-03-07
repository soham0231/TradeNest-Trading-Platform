import React from "react";

function LeftSection({
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
          {/* Left Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src={imageUrl}
              alt="Largest Broker"
              className="w-full max-w-[1000px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {productName}
            </h2>

            <p className="text-gray-600 text-base max-w-xl mb-8">
              {description}
            </p>
            <a href={tryDemo} className="text-blue-600"> Try Demo <i className="fa-solid fa-arrow-right"></i></a>  
            <a href={learnMore} className="text-blue-600 ml-10"> learnMore <i className="fa-solid fa-arrow-right"></i> </a>

            <div className="flex gap-4 mt-8"> 
                <a href={googlePlay}> <img src="/Assets/googlePlayBadge.svg"/></a> 
                <a href={appStore}> <img src="/Assets/appstoreBadge.svg"/> </a>  
           </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default LeftSection;
