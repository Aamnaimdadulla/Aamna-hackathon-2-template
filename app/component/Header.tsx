// In Header.tsx or Header.js (depending on your setup)
"use client";

import Link from "next/link";  // Import for Link
import { IoSearch } from "react-icons/io5";  // Import for search icon
import { CgProfile } from "react-icons/cg";  // Import for profile icon
import { MdOutlineShoppingCart } from "react-icons/md";  // Import for shopping cart icon
import Image from "next/image";  // Import for Next.js Image component

// Header Component
const Header = () => {
  return (
    <>
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 lg:flex-1">
            <div className="lg:block hidden">
              <IoSearch className="text-xl" />
            </div>
          </div>

          <h1 className="text-[#22202E] text-2xl font-semibold text-left lg:text-center">
            Avion
          </h1>

          <div className="hidden lg:flex gap-3 text-xl lg:flex-1 justify-end">
            <MdOutlineShoppingCart />
            <CgProfile />
          </div>
        </div>

        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Plant pots
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Ceramics
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tables
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Chairs
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Crockery
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tableware
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Cutlery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;  // Make sure to export Header
