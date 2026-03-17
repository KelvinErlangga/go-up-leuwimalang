"use client";

import React from "react";
import MainLayout from "@/components/Dashboard/MainLayout";

export default function PencapaianPage() {
  const achievements = [
    {
      id: 1,
      title: "Pelopor Kebersihan",
      description: "Menyelesaikan seluruh bab di kelas Peduli Bersih.",
      icon: "🌱",
      date: "12 Mar 2026",
      unlocked: true,
    },
    {
      id: 2,
      title: "Warga Digital",
      description: "Menyelesaikan seluruh bab di kelas Digital Ready.",
      icon: "💻",
      date: "15 Mar 2026",
      unlocked: true,
    },
    {
      id: 3,
      title: "Pahlawan Sampah",
      description: "Mengumpulkan 1000 Poin dari Bank Sampah RT.",
      icon: "♻️",
      date: "-",
      unlocked: false,
    },
    {
      id: 4,
      title: "Suhu Diskusi",
      description: "Mendapatkan 50 dukungan (likes) di Forum Diskusi.",
      icon: "🔥",
      date: "-",
      unlocked: false,
    }
  ];

  return (
    <MainLayout title="Pencapaian Saya" activeRoute="pencapaian">
      <div className="max-w-5xl mx-auto font-sans pb-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Lencana & Penghargaan
          </h2>
          <p className="text-gray-500 text-lg">
            Kumpulkan lencana dengan menyelesaikan kelas dan aktif di komunitas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-[2rem] p-6 flex flex-col items-center text-center transition-all duration-300 border ${
                item.unlocked
                  ? "bg-white shadow-xl shadow-[#629A1A]/10 border-[#629A1A]/20 hover:-translate-y-1"
                  : "bg-gray-50 shadow-sm border-gray-200 grayscale opacity-70"
              }`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner ${
                item.unlocked ? "bg-[#629A1A]/10" : "bg-gray-200"
              }`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="mt-4 pt-4 w-full border-t border-gray-100/50">
                <span className={`text-xs font-bold ${item.unlocked ? "text-[#629A1A]" : "text-gray-400"}`}>
                  {item.unlocked ? `Diraih pada: ${item.date}` : "Belum Terbuka"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}