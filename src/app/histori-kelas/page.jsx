"use client";

import React from "react";
import MainLayout from "@/components/Dashboard/MainLayout";

export default function HistoriKelasPage() {
  const historyData = [
    {
      id: 1,
      course: "Digital Ready",
      activity: "Menyelesaikan Bab 1: Pengenalan Literasi Digital",
      date: "17 Maret 2026",
      time: "09:15 WIB",
      status: "Selesai",
    },
    {
      id: 2,
      course: "Digital Ready",
      activity: "Memulai Bab 0: Pengenalan Digital Ready",
      date: "16 Maret 2026",
      time: "14:30 WIB",
      status: "Selesai",
    },
    {
      id: 3,
      course: "Peduli Bersih",
      activity: "Menyelesaikan Tugas Akhir - Aksi Nyata Lingkungan",
      date: "12 Maret 2026",
      time: "10:00 WIB",
      status: "Selesai",
    },
    {
      id: 4,
      course: "Peduli Bersih",
      activity: "Memulai Bab 3: Dampak Polusi & Cara Menguranginya",
      date: "10 Maret 2026",
      time: "16:45 WIB",
      status: "Selesai",
    }
  ];

  return (
    <MainLayout title="Histori Kelas" activeRoute="histori-kelas">
      <div className="max-w-4xl mx-auto font-sans pb-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Riwayat Aktivitas
          </h2>
          <p className="text-gray-500 text-lg">
            Pantau jejak perjalanan belajar Anda di Go Up Leuwimalang.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {historyData.map((item) => (
              <li key={item.id} className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#629A1A]/10 flex items-center justify-center text-[#629A1A] shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {item.activity}
                    </h4>
                    <p className="text-gray-500 font-medium">
                      Kelas: <span className="text-[#629A1A]">{item.course}</span>
                    </p>
                  </div>
                </div>
                <div className="text-left md:text-right shrink-0 md:ml-4 pl-14 md:pl-0">
                  <p className="text-sm font-bold text-gray-900">{item.date}</p>
                  <p className="text-sm text-gray-400">{item.time}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}