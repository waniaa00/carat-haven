import React from "react";
import Image from "next/image"

const Hero = () => {
  return (
    <div >
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/hero.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
             A haven for exquisite diamonds.
            </h1>
            <p className="leading-relaxed mb-8">
              Experience the allure of extraordinary diamonds at Carat Haven.
              Discover a curated selection of exquisite gemstones, each a
              masterpiece of nature's artistry. Find the perfect diamond for any
              occasion, from timeless classics to contemporary designs. Let us
              guide you on a journey of brilliance.
            </p>
            <div className="flex justify-center" >
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 font-medium focus:outline-none hover:bg-indigo-600  transition duration-300 rounded text-lg">
               Shop now
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
