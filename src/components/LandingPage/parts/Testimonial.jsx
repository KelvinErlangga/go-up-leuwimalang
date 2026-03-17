"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi",
      role: "Warga Leuwimalang",
      text: "Kalau proyek ini benar-benar bisa berjalan, saya berharap banyak warga, termasuk saya, akan merasa lebih percaya diri menggunakan internet untuk kebutuhan sehari-hari. Apalagi sekarang semuanya serba online, jadi kemampuan seperti ini pasti berguna banget."
    },
    {
      name: "Rahma",
      role: "Warga Leuwimalang",
      text: "Jika kursus ini benar-benar terwujud, saya berharap dapat membantu saya memahami teknologi dengan lebih baik dan mengaplikasikannya dalam kehidupan sehari-hari. Ini pasti akan sangat bermanfaat untuk aktivitas sehari-hari yang semakin terhubung dengan teknologi."
    },
    {
      name: "Abdul",
      role: "Warga Leuwimalang",
      text: "Saya berharap program ini benar-benar bisa terwujud, karena pasti akan sangat membantu saya dan warga lainnya untuk memanfaatkan internet dan penjualan UMKM di desa ini jadi lebih baik di kehidupan sehari-hari."
    }
  ];

  return (
    <section
      className="bg-white relative"
    >
      <div
        className="max-w-screen-xl mx-auto py-24 px-6 md:px-10"
      >
        <div
          className="text-center mb-16 md:mb-20"
        >
          <Fade
            direction="up"
            triggerOnce
          >
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
            >
              Apa Kata
              <span
                className="text-[#629A1A] ml-2"
              >
                Warga Leuwimalang?
              </span>
            </h2>
          </Fade>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Fade
            direction="up"
            triggerOnce
            cascade
            damping={0.1}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 flex flex-col h-full shadow-xl shadow-gray-200/40 transition-transform duration-300 hover:-translate-y-2 group"
              >
                <div
                  className="relative flex-grow mb-8"
                >
                  <p
                    className="text-base md:text-lg text-gray-600 leading-relaxed font-medium italic relative z-10"
                  >
                    "{item.text}"
                  </p>
                </div>
                
                <div
                  className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#629A1A] font-bold text-xl"
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-gray-900 group-hover:text-[#629A1A] transition-colors"
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-medium"
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;