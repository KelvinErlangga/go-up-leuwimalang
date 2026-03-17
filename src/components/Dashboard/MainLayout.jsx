"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = ({ children, title, activeRoute }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        activeRoute={activeRoute}
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleSidebarCollapse}
      />

      <main
        className={`flex-1 overflow-y-auto w-full transition-all duration-300 ${
          isSidebarCollapsed ? "md:ml-[80px]" : "md:ml-[280px]"
        }`}
      >
        <div className="p-4 md:p-8">
          <Navbar title={title} />
          <div className="mt-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;