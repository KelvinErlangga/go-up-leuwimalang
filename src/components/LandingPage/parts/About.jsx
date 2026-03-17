"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      className="bg-white relative overflow-hidden"
    >
      <div
        id="tentang"
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
              Tentang
              <span
                className="text-[#629A1A] ml-2"
              >
                Go Up Leuwimalang
              </span>
            </h2>
          </Fade>
        </div>

        <div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20"
        >
          <div
            className="flex-1 space-y-10"
          >
            <Fade
              direction="up"
              triggerOnce
              cascade
              damping={0.1}
            >
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Edukasi
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Go Up Leuwimalang adalah platform edukasi online yang dirancang khusus untuk warga Desa Leuwimalang.
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Komitmen
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Kami berkomitmen untuk memberikan akses mudah ke berbagai kursus yang relevan dengan kehidupan sehari-hari, mulai dari literasi digital, kebersihan lingkungan, hingga keterampilan praktis lainnya.
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Harapan
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Melalui program ini, kami berharap bisa mendorong perubahan positif, memberdayakan masyarakat, dan meningkatkan kualitas hidup di desa Leuwimalang.
                </p>
              </div>
            </Fade>
          </div>

          <div
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50"
              >
                <Image
                  src="/assets/images/about.jpg"
                  alt="Tentang Kami"
                  width={375}
                  height={456}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;