"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [activeLink, setActiveLink] = useState("beranda");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
      setActiveLink(id);
    }
    setIsDrawerOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { id: "beranda", label: "Beranda" },
    { id: "program", label: "Program" },
    { id: "tentang", label: "Tentang" }
  ];

  return (
    <nav
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 w-full transition-all duration-300"
    >
      <div
        className="max-w-screen-xl mx-auto py-3 px-6 md:px-10 flex items-center justify-between"
      >
        <div
          className="md:hidden"
        >
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>

        <div
          className="hidden md:block"
        >
          <button
            onClick={handleLogoClick}
            className="focus:outline-none transition-transform hover:scale-105"
          >
            <Image
              src="/assets/images/logo-navbar.png"
              alt="Logo"
              width={42}
              height={42}
              className="rounded-full shadow-sm"
            />
          </button>
        </div>

        <div
          className="hidden md:flex space-x-9 items-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`cursor-pointer text-[14px] font-medium tracking-wide transition-colors duration-300 ${
                activeLink === link.id
                  ? "text-[#629A1A]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/forum-diskusi"
            className={`cursor-pointer text-[14px] font-medium tracking-wide transition-colors duration-300 ${
              activeLink === "Forum Diskusi"
                ? "text-[#629A1A]"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Forum Diskusi
          </a>

          <a
            href="/go-up-mart"
            className={`cursor-pointer text-[14px] font-medium tracking-wide transition-colors duration-300 ${
              activeLink === "Tukar Poin"
                ? "text-[#629A1A]"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Tukar Poin
          </a>
        </div>

        <div
          className="flex items-center"
        >
          {session?.user ? (
            <button
              onClick={signOut}
              className="px-5 py-2 text-[14px] font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900"
            >
              Keluar
            </button>
          ) : (
            providers &&
            Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="px-5 py-2 text-[14px] font-medium text-white bg-[#629A1A] rounded-full shadow-sm transition-all duration-300 hover:bg-[#507e15] hover:shadow-md"
              >
                Masuk
              </button>
            ))
          )}
        </div>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <div
            className="flex flex-col p-6 space-y-6 w-72 bg-white h-full"
          >
            <div
              className="flex justify-start border-b border-gray-100 pb-4"
            >
              <button
                onClick={handleLogoClick}
                className="focus:outline-none"
              >
                <Image
                  src="/assets/images/logo-navbar.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </button>
            </div>

            <div
              className="flex flex-col space-y-5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`cursor-pointer text-[15px] font-medium transition-colors ${
                    activeLink === link.id
                      ? "text-[#629A1A]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/forum-diskusi"
                className="cursor-pointer text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Forum Diskusi
              </a>
              <a
                href="/go-up-mart"
                className="cursor-pointer text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Tukar Poin
              </a>
            </div>

            <div
              className="pt-6 mt-auto border-t border-gray-100"
            >
              {session?.user ? (
                <button
                  onClick={signOut}
                  className="w-full px-4 py-3 text-[15px] font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-all"
                >
                  Keluar
                </button>
              ) : (
                providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="w-full px-4 py-3 text-[15px] font-medium text-white bg-[#629A1A] rounded-full shadow-sm hover:bg-[#507e15] transition-all"
                  >
                    Masuk
                  </button>
                ))
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;