'use client'
import React from 'react'

const Product = () => {
  return (
    <div>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              { id: 1, name: 'Eternal Radiance', price: '$16000.00', src: './images/producti.jpg' },
              { id: 2, name: 'Celestial Necklace', price: '$10.000', src: './images/productii.jpg' },
              { id: 3, name: 'Sparkling Dreams', price: '$12000.00', src: './images/productiii.jpg' },
              { id: 4, name: 'Diamond Dew', price: '$18000.00', src: './images/productiv.jpg' },
              { id: 5, name: 'Starlight Serenade', price: '$17000.00', src: './images/productv.jpg' },
              { id: 6, name: 'Moonstone Magic', price: '$21000.00', src: './images/productvi.jpg' },
              { id: 7, name: 'Diamond Dust', price: '$19000.00', src: './images/productvii.jpg' },
              { id: 8, name: 'Midnight Sun', price: '$18000.40', src: './images/productviii.jpg' },
            ].map((product, index) => (
              <div
                key={product.id}
                className={`lg:w-1/4 md:w-1/2 p-4 w-full animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a className="block relative h-48 rounded overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    alt={`product ${index + 1}`}
                    className="object-cover object-center w-full h-full block"
                    src={product.src}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">NECK-PIECE</h3>
                  <h2 className="text-white title-font text-lg font-medium">{product.name}</h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Product
