"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/Dashboard/MainLayout";

// --- DATA DUMMY KELAS ---
const courseData = {
  "peduli-bersih": {
    title: "Peduli Bersih",
    description: "Langkah Kecil untuk Lingkungan Sehat",
    chapters: [
      { id: "ch1", title: "1. Pengenalan Kebersihan Lingkungan", content: "Kebersihan lingkungan adalah tanggung jawab kita bersama. Di bab ini, kita akan belajar..." },
      { id: "ch2", title: "2. Pengelolaan Sampah yang Benar", content: "Pisahkan sampah organik dan anorganik. Gunakan tempat sampah yang sesuai..." },
      { id: "ch3", title: "3. Dampak Polusi & Cara Menguranginya", content: "Polusi udara, air, dan tanah dapat berdampak buruk pada kesehatan. Mari kurangi polusi dengan..." },
      { id: "ch4", title: "4. Peran Edukasi Meningkatkan Kesadaran", content: "Pendidikan adalah kunci perubahan. Beri tahu tetangga dan keluarga tentang pentingnya..." },
      { id: "ch5", title: "5. Tugas Akhir - Aksi Nyata Lingkungan", content: "Lakukan kerja bakti di lingkungan RT Anda akhir pekan ini. Dokumentasikan dan laporkan hasilnya!" },
    ],
  },
  "digital-ready": {
    title: "Digital Ready",
    description: "Menghadapi Tantangan Dunia Online",
    chapters: [
      { id: "ch0", title: "0. Pengenalan Digital Ready", content: "Selamat datang di era digital! Mari kita persiapkan diri untuk..." },
      { id: "ch1", title: "1. Pengenalan Literasi Digital", content: "Literasi digital adalah kemampuan untuk memahami dan menggunakan informasi dari berbagai sumber digital..." },
      { id: "ch2", title: "2. Penggunaan Teknologi Efektif", content: "Gunakan smartphone dan internet untuk hal-hal yang produktif, bukan hanya hiburan semata..." },
      { id: "ch3", title: "3. Keamanan & Privasi Digital", content: "Jaga password Anda. Jangan sembarangan membagikan data pribadi di media sosial..." },
      { id: "ch4", title: "4. Pemikiran Kritis Mengakses Informasi", content: "Jangan mudah percaya hoax. Saring sebelum sharing. Cek kebenaran berita dari sumber terpercaya..." },
      { id: "ch5", title: "5. Tugas Akhir - Penerapan Literasi", content: "Buat sebuah konten positif (artikel, poster, atau video singkat) dan bagikan di grup warga desa." },
    ],
  },
};

export default function CourseDetailPage({ params }) {
  const router = useRouter(); // Inisialisasi router
  const { courseId } = params;
  const course = courseData[courseId];

  const [activeChapterId, setActiveChapterId] = useState(course?.chapters[0]?.id || null);

  if (!course) {
    return (
      <MainLayout title="Kelas Tidak Ditemukan" activeRoute="kelas">
        <div className="text-center py-20 font-sans">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kelas Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-8">URL kelas tidak valid atau kelas belum tersedia.</p>
          <button 
            onClick={() => router.back()}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Kembali ke Daftar Kelas
          </button>
        </div>
      </MainLayout>
    );
  }

  const activeChapter = course.chapters.find((ch) => ch.id === activeChapterId);

  return (
    <MainLayout title={course.title} activeRoute="kelas">
      <div className="max-w-6xl mx-auto font-sans pb-10">
        
        {/* Header Kelas dengan Tombol Back */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-sm font-semibold text-gray-500 hover:text-[#629A1A] transition-colors mb-4 group"
          >
            <svg 
              className="w-4 h-4 mr-1.5 transform transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Kelas Saya
          </button>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            {course.title}
          </h2>
          <p className="text-gray-500 text-lg">
            {course.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* KIRI: Daftar Bab */}
          <div className="w-full md:w-80 bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex-shrink-0 sticky top-28">
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-2">Daftar Materi</h3>
            <div className="space-y-2">
              {course.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 text-sm font-semibold leading-snug ${
                    activeChapterId === chapter.id
                      ? "bg-[#629A1A]/10 text-[#629A1A] border border-[#629A1A]/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                  }`}
                >
                  {chapter.title}
                </button>
              ))}
            </div>
          </div>

          {/* KANAN: Konten Materi */}
          <div className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 min-h-[500px] flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-6 border-b border-gray-100">
              {activeChapter?.title}
            </h3>
            
            <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed flex-grow">
              <p>{activeChapter?.content}</p>
              
              <div className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-medium mt-8 border-2 border-dashed border-gray-200">
                [ Area Video Pembelajaran ]
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
               <button className="px-6 py-2.5 text-gray-500 font-semibold hover:text-gray-900 transition-colors">
                 &larr; Sebelumnya
               </button>
               <button className="px-6 py-2.5 bg-[#629A1A] text-white font-bold rounded-full hover:bg-[#507e15] shadow-md shadow-[#629A1A]/20 transition-all hover:-translate-y-0.5">
                 Selesai & Lanjut &rarr;
               </button>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}