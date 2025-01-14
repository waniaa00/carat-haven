import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Branches */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                BRANCHES
              </h2>
              <nav className="list-none mb-10">
                {["UK", "USA", "UAE", "KSA"].map((branch) => (
                  <li key={branch}>
                    <a className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                      {branch}
                    </a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SOCIALS
              </h2>
              <nav className="list-none mb-10">
                {["Instagram", "Facebook", "X", "Telegram"].map((social) => (
                  <li key={social}>
                    <a className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                      {social}
                    </a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Team Mates */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                TEAM MATES
              </h2>
              <nav className="list-none mb-10">
                {["Burak S.", "Jane K.", "Angelina H.", "Sam D."].map((name) => (
                  <li key={name}>
                    <a className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                      {name}
                    </a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Subscribe */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Mail
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-300 ease-in-out rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
             <Image
                            src="/images/logo.jpg"
                            alt="logo"
                            width={50}
                            height={50}
                            className="flex rounded-lg"
                          />
              <span className="ml-3 text-xl">Carat Haven</span>
            </a>
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              © 2025 WANIA —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-500 ml-1 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                @wnxd_00
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out ml-3"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    {/* Example Icons */}
                  </svg>
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
