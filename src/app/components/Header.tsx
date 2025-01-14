import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <div>
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="flex rounded-lg"
            />
            <span className="ml-3 text-xl">Carat Haven</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-white transition duration-300">
              About
            </Link>
            <Link href="/product" className="mr-5 hover:text-white transition duration-300">
              Products
            </Link>
            <Link href="/contact" className="mr-5 hover:text-white transition duration-300">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 transition duration-300 rounded text-base mt-4 md:mt-0">
            View Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
