"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Store as StoreIcon,
  History as HistoryIcon,
  Star as StarIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  Chat as ChatIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

const Sidebar = ({ activeRoute, isCollapsed, toggleCollapse }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (routeId) => {
    if (routeId === "home") {
      router.push("/");
    } else if (routeId === "dashboard") {
      router.push("/dashboard");
    } else if (routeId === "go-up-mart") {
      router.push("/go-up-mart");
    } else if (routeId === "diskusi") {
      router.push("/forum-diskusi");
    } else if (routeId === "kelas") {
      router.push("/kelas");
    } else {
      router.push(`/${routeId}`);
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuItem = ({ id, label, Icon }) => {
    const isActive = activeRoute === id;
    return (
      <button
        onClick={() => handleMenuClick(id)}
        className={`w-full flex items-center ${
          isCollapsed ? "justify-center px-0" : "space-x-4 px-5"
        } py-3.5 rounded-2xl transition-all duration-300 ${
          isActive
            ? "bg-[#629A1A] text-white shadow-md shadow-[#629A1A]/20"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
        title={isCollapsed ? label : ""}
      >
        <Icon
          className={isActive ? "text-white" : "text-gray-400"}
          fontSize="small"
        />
        {!isCollapsed && (
          <span className="font-semibold text-[15px]">
            {label}
          </span>
        )}
      </button>
    );
  };

  const SidebarContent = (
    <div
      className={`flex flex-col h-full bg-white border-r border-gray-100 transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[280px]"
      }`}
    >
      <div className="flex items-center justify-center py-6 border-b border-gray-100 relative min-h-[100px]">
        {isCollapsed ? (
          <div className="w-10 h-10 rounded-full bg-[#629A1A] flex items-center justify-center text-white font-bold">
            G
          </div>
        ) : (
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        )}
        
        <button
          onClick={toggleCollapse}
          className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-500 hover:text-[#629A1A] hover:border-[#629A1A] shadow-sm transition-colors z-50"
        >
          {isCollapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-hide overflow-x-hidden">
        <div>
          {!isCollapsed && (
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Menu
            </p>
          )}
          <div className="space-y-1">
            <MenuItem id="home" label="Home" Icon={HomeIcon} />
            <MenuItem id="dashboard" label="Dashboard" Icon={DashboardIcon} />
            <MenuItem id="go-up-mart" label="Go Up Mart" Icon={StoreIcon} />
            <MenuItem id="diskusi" label="Diskusi" Icon={ChatIcon} />
          </div>
        </div>

        <div>
          {!isCollapsed && (
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Kelas
            </p>
          )}
          <div className="space-y-1">
            {/* Hanya satu menu Kelas Saya, menggantikan semua dropdown yang memicu 404 */}
            <MenuItem id="kelas" label="Kelas Saya" Icon={AssignmentIcon} />
            
            <MenuItem id="pencapaian" label="Pencapaian" Icon={StarIcon} />
            <MenuItem id="histori-kelas" label="Histori Kelas" Icon={HistoryIcon} />
          </div>
        </div>

        <div>
          {!isCollapsed && (
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Pengguna
            </p>
          )}
          <div className="space-y-1">
            <MenuItem id="profil" label="Profil" Icon={PersonIcon} />
            <MenuItem id="settings" label="Settings" Icon={SettingsIcon} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden fixed top-0 w-full bg-[#629A1A] text-white z-50 flex items-center px-4 h-16 shadow-md">
        <button onClick={handleDrawerToggle} className="p-2 -ml-2 rounded-full focus:outline-none focus:bg-white/10">
          <MenuIcon />
        </button>
        <span className="ml-3 font-bold text-lg">Go Up Leuwimalang</span>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleDrawerToggle}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-[280px] h-full">
          {SidebarContent}
        </div>
        <button
          onClick={handleDrawerToggle}
          className="absolute top-4 -right-12 p-2 bg-white rounded-full shadow-lg text-gray-600 focus:outline-none"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>

      <div className="hidden md:block fixed inset-y-0 left-0 z-40">
        {SidebarContent}
      </div>
    </>
  );
};

export default Sidebar;