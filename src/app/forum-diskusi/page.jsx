"use client";

import { useState } from "react";
import MainLayout from "@/components/Dashboard/MainLayout";

export default function ForumPage() {
  const [comment, setComment] = useState("");

  const ForumContent = (
    <div className="max-w-4xl mx-auto font-sans pb-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Forum Diskusi Leuwimalang
        </h2>
        <p className="text-gray-500 text-lg">
          Bagikan gagasan, bertanya, dan berdiskusi dengan sesama warga.
        </p>
      </div>

      {/* Kartu Postingan Diskusi */}
      <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 mb-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
              A
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                Andi Saputra
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                2 jam yang lalu • Ide Lingkungan
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#629A1A]/10 text-[#629A1A] text-xs font-bold rounded-full uppercase tracking-wider shrink-0 ml-2">
            Diskusi Aktif
          </span>
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          Usulan Pengelolaan Sampah Plastik di RT 03
        </h4>
        <p className="text-gray-600 leading-relaxed mb-6">
          Halo Bapak/Ibu sekalian, saya melihat belakangan ini tumpukan sampah plastik di pojok desa mulai tidak terkendali. Bagaimana kalau kita adakan program bank sampah yang dikelola pemuda karang taruna? Hasilnya nanti bisa ditukar dengan poin di aplikasi ini.
        </p>
        
        <div className="flex items-center space-x-6 border-t border-gray-100 pt-5 mt-auto">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-[#629A1A] transition-colors font-medium">
            <span>👍</span>
            <span>24 Dukungan</span>
          </button>
          <button className="flex items-center space-x-2 text-[#629A1A] transition-colors font-medium">
            <span>💬</span>
            <span>12 Komentar</span>
          </button>
        </div>
      </div>

      {/* Area Input Komentar */}
      <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 relative">
        <h4 className="text-lg font-bold text-gray-900 mb-4">
          Ikut Berdiskusi
        </h4>
        <div className="relative">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tulis pendapat atau pertanyaan Anda di sini..."
            rows={4}
            className="w-full bg-gray-50 text-gray-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-[#629A1A] focus:bg-white transition-all resize-none outline-none shadow-inner"
          ></textarea>
          <button
            className={`absolute bottom-4 right-4 px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md ${
              comment.trim().length > 0
                ? "bg-[#629A1A] text-white hover:bg-[#507e15] hover:shadow-[#629A1A]/30 hover:-translate-y-0.5 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
            disabled={comment.trim().length === 0}
          >
            Kirim Komentar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <MainLayout title="Forum Diskusi" activeRoute="diskusi">
      {ForumContent}
    </MainLayout>
  );
}