"use client";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const progress = 43;
  const watchTime = 16;
  const learningProgress = [
    { title: "Pengenalan Literasi Digital", progress: 54 },
    { title: "Penggunaan Teknologi Secara Efektif", progress: 40 },
  ];

  const [classRecommendations, setClassRecommendations] = useState([]);

  useEffect(() => {
    const fetchClassRecommendations = async () => {
      try {
        const response = await fetch("/json/classRecommendations.json");
        const data = await response.json();
        setClassRecommendations(data);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      }
    };

    fetchClassRecommendations();
  }, []);

  // Komponen pembantu untuk Circular Progress menggunakan SVG (Versi yang sudah diperbaiki)
  const CircularProgress = ({ value, size = 160, strokeWidth = 12, color = "text-[#629A1A]", trackColor = "text-gray-100", textColor = "text-gray-900", textSize = "text-3xl md:text-4xl" }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90 w-full h-full absolute inset-0">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className={trackColor}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Menambahkan z-10 agar teks selalu di atas lingkaran */}
          <span className={`${textSize} font-extrabold ${textColor} z-10 drop-shadow-sm`}>{value}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kiri: Progress & Watch Time */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Linear Progress Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6 w-full text-left">Progress Belajar</h3>
            <div className="w-full flex flex-col items-center py-4">
              <span className="text-5xl font-extrabold text-gray-900 mb-6">{progress}%</span>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#629A1A] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Watch Time Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6 w-full text-left">Watch Time</h3>
            <div className="py-2">
              <CircularProgress value={watchTime} />
            </div>
          </div>
        </div>

        {/* Kanan: Rekomendasi Kelas */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Rekomendasi Kelas</h3>
              <button className="text-[#629A1A] font-bold text-sm flex items-center hover:text-[#507e15] transition-colors">
                Lihat Lanjut
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              {classRecommendations.map((classItem, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col sm:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full sm:w-40 h-32 sm:h-auto overflow-hidden bg-gray-50 flex-shrink-0">
                    <img 
                      src={classItem.imageUrl} 
                      alt={classItem.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col justify-center flex-grow">
                    <h4 className="text-lg font-bold text-[#629A1A] mb-1 line-clamp-1">{classItem.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed">{classItem.description}</p>
                    <div className="flex items-center space-x-1 text-[#FFAA00] text-sm">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bawah: Lanjut Belajar */}
      <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Lanjut Belajar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {learningProgress.map((course, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-[#629A1A] to-[#74B320] rounded-[1.5rem] p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between shadow-lg shadow-[#629A1A]/20"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
                {/* Penyesuaian ukuran SVG Circular Progress di sini */}
                <div className="flex-shrink-0 relative">
                  <CircularProgress 
                    value={course.progress} 
                    size={64} // Ukuran diperkecil agar tidak memotong teks
                    strokeWidth={5} 
                    color="text-white" 
                    trackColor="text-white/30" 
                    textColor="text-white"
                    textSize="text-lg md:text-xl" // Teks diproporsionalkan
                  />
                </div>
                <h4 className="text-white font-bold text-base md:text-lg leading-snug flex-1 pr-2">
                  {course.title}
                </h4>
              </div>
              <button className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#629A1A] font-bold text-sm rounded-xl shadow-sm hover:bg-gray-50 hover:shadow transition-all whitespace-nowrap shrink-0">
                Lanjutkan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2.5 border-2 border-[#629A1A] text-[#629A1A] font-bold rounded-full hover:bg-[#629A1A] hover:text-white transition-colors">
            Lihat lebih detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;