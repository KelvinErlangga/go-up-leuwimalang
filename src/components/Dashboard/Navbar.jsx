"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = ({ title }) => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-white rounded-[20px] px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row justify-between items-center shadow-sm border border-gray-100 mt-16 md:mt-0"
    >
      <h2
        className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight text-center md:text-left mb-4 md:mb-0"
      >
        {title}
      </h2>

      <div
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-3 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors rounded-full py-1.5 px-2 md:py-2 md:px-3 border border-transparent hover:border-gray-200"
        >
          <span
            className="text-sm font-semibold text-gray-700 ml-2"
          >
            Hi, {session?.user?.name || "User"}
          </span>
          <div
            className="w-10 h-10 rounded-full bg-[#629A1A]/20 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            ) : (
              <span
                className="text-[#629A1A] font-bold text-lg"
              >
                {session?.user?.name?.charAt(0) || "U"}
              </span>
            )}
          </div>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden z-50 transform origin-top-right transition-all"
          >
            <div
              className="py-2"
            >
              <button
                className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#629A1A] transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Profil
              </button>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-5 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50 mt-1"
              >
                Keluar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;