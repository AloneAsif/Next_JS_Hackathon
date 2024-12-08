'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div>
        <header className="bg-[#F5F5F5] border-b font-['Helvetica Neue'] flex justify-between items-center px-10 py-2">
          <Image src="logos/logo1.svg" alt="Logo" width={50} height={50} />
          <nav>
            <ul className="flex items-center space-x-3  text-black text-[11px] font-bold">
              <li>
                <Link href="#">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="gethelp">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="memberForm">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="loginPage">Sign In</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center">
            <Image src="logos/logo2.svg" alt="Logo" width={50} height={50} />
          </div>

          <div className="hidden md:flex space-x-4">
          <Link href="/">New & Featured</Link>
              <Link href="/Men">Men</Link>
              <Link href="/Woman">Woman</Link>
              <Link href="/Kids">Kids</Link>
              <Link href="/Sale">Sale</Link>
              <Link href="/SNKRS">SNKRS</Link>
          </div>

     
            <div className="md:flex justify-center items-center gap-3 hidden">
           
            <div className="flex items-center justify-center">
      <div className="relative w-[180px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[40px] rounded-full pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
               
               <div><BsBag  className="w-4 h-4 " /></div>
               <div><CiHeart className="w-6 h-6 " /></div>
            </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="space-y-2 flex flex-col font-semibold px-4 py-2">
              <Link href="/">New & Featured</Link>
              <Link href="/about">Men</Link>
              <Link href="/products">Woman</Link>
              <Link href="/blog">Kids</Link>
              <Link href="/contact">Sale</Link>
              <Link href="/contact">SNKRS</Link>
            </div>
          </div>

            

        )}
      </nav>
    </>
  );
};

export default Navbar;
