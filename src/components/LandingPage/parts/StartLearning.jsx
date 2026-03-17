"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const StartLearning = () => {
  return (
    <section
      className="bg-white pb-24"
    >
      <div
        className="max-w-screen-xl mx-auto px-6 md:px-10"
      >
        <Fade
          direction="up"
          triggerOnce
        >
          <div
            className="bg-gradient-to-br from-[#629A1A] to-[#4a7514] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#629A1A]/20 relative overflow-hidden"
          >
            <div
              className="flex-1 text-center md:text-left relative z-10"
            >
              <h2
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6"
              >
                Mulai Perjalanan Belajar Anda!
              </h2>
              <p
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-lg"
              >
                Tingkatkan kualitas hidup dan keterampilan Anda hari ini. Daftarkan diri Anda dan ikuti kursus yang paling sesuai dengan kebutuhan.
              </p>
              <button
                className="px-8 py-4 bg-white text-[#629A1A] text-base font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1"
              >
                Daftar Gratis Sekarang!
              </button>
            </div>

            <div
              className="flex-1 w-full flex justify-center md:justify-end relative z-10"
            >
              <div
                className="drop-shadow-2xl"
              >
                <Image
                  src="/assets/images/learning.png"
                  alt="Mulai Perjalanan Belajar"
                  width={380}
                  height={380}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default StartLearning;