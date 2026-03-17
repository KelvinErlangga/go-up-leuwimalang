"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import MainLayout from "@/components/Dashboard/MainLayout";

export default function ProfilPage() {
  const { data: session } = useSession();

  return (
    <MainLayout title="Profil Saya" activeRoute="profil">
      <div className="max-w-4xl mx-auto font-sans pb-10">
        
        {/* Header Profil */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 mb-8 relative overflow-hidden">
          {/* Ornamen Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#629A1A]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden shrink-0 z-10">
            {session?.user?.image ? (
              <Image 
                src={session.user.image} 
                alt="Profile Picture" 
                width={160} 
                height={160} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-5xl font-bold text-[#629A1A]">
                {session?.user?.name?.charAt(0) || "U"}
              </span>
            )}
          </div>
          
          <div className="text-center md:text-left z-10 flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {session?.user?.name || "Nama Pengguna"}
            </h2>
            <p className="text-gray-500 font-medium mb-4">
              {session?.user?.email || "email@example.com"}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1.5 bg-[#629A1A]/10 text-[#629A1A] font-bold rounded-full text-sm">
                Warga RT 03
              </span>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 font-bold rounded-full text-sm">
                Member Sejak 2026
              </span>
            </div>
          </div>

          <div className="z-10 w-full md:w-auto">
             <button className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-md">
               Edit Profil
             </button>
          </div>
        </div>

        {/* Statistik Cepat */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 font-medium mb-1">Total Poin</p>
            <h3 className="text-3xl font-extrabold text-[#629A1A]">2.500</h3>
          </div>
          <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 font-medium mb-1">Kelas Diikuti</p>
            <h3 className="text-3xl font-extrabold text-gray-900">2</h3>
          </div>
          <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 font-medium mb-1">Pencapaian</p>
            <h3 className="text-3xl font-extrabold text-[#FFAA00]">2</h3>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}