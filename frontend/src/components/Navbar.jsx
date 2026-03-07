import React from "react";
import {Link}from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-2 ">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src="/Assets/logo.svg" alt="Zerodha" className="h-4 w-auto" />
          </div>

          {/* Right: Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-14 text-sm font-medium text-gray-600">
            <Link to="/signup" className="hover:text-blue-600">
              Signup
            </Link>
            <Link  to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link  to="/product" className="hover:text-blue-600">
              Products
            </Link>
            <Link  to="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
            <Link  to="/support"className="hover:text-blue-600">
              Support
            </Link>

            {/* Hamburger Icon */}
            <button className="text-gray-600 hover:text-blue-600">☰</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 text-xl">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
