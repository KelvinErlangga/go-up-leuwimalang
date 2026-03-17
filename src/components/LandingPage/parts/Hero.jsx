"use client";

import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/dashboard");
  };

  return (
    <section
      id="beranda"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/assets/images/hero.png)"
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-0"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-screen-xl w-full mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <Fade
          direction="up"
          triggerOnce
          cascade
          damping={0.1}
        >
          <div
            className="text-center md:text-left text-white max-w-2xl mt-10 md:mt-0"
          >
            <h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              <span
                className="text-[#629A1A]"
              >
                Go Up
              </span>
              {" "}Leuwimalang
            </h1>

            <h2
              className="text-2xl md:text-4xl font-semibold text-gray-200 leading-snug mb-6"
            >
              Maju Bersama, Tingkatkan Literasi & Kesadaran Lingkungan
            </h2>

            <p
              className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            >
              Bergabunglah dengan kami dan wujudkan perubahan nyata di desa Anda. Langkah kecil untuk dampak yang besar.
            </p>

            <button
              onClick={handleButtonClick}
              className="px-8 py-3.5 text-[15px] font-semibold text-white bg-[#629A1A] rounded-full shadow-lg transition-all duration-300 hover:bg-[#507e15] hover:shadow-[#629A1A]/30 hover:-translate-y-1"
            >
              Belajar Sekarang
            </button>
          </div>
        </Fade>

        <Fade
          direction="up"
          triggerOnce
          delay={200}
        >
          <div
            className="flex-shrink-0 w-56 h-56 md:w-[420px] md:h-[420px] relative drop-shadow-2xl transition-transform duration-500 hover:scale-105 mx-auto md:mx-0"
          >
            <Image
              src="/assets/images/logo-hero.png"
              alt="Logo Go Up Leuwimalang"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;