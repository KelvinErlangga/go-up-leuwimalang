"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section
      className="bg-gray-50 border-y border-gray-100"
    >
      <div
        id="program"
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
              Mengapa Bergabung dengan
              <br className="hidden md:block" />
              <span
                className="text-[#629A1A]"
              >
                Go Up Leuwimalang?
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
              <div
                className="border-l-4 border-[#629A1A] pl-6"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Akses Mudah dan Gratis
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Belajar kapan saja dan di mana saja, tanpa biaya.
                </p>
              </div>

              <div
                className="border-l-4 border-[#629A1A] pl-6"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Materi Relevan
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Kursus dirancang untuk kebutuhan masyarakat Leuwimalang dengan fokus pada literasi digital, kebersihan, dan keterampilan praktis.
                </p>
              </div>

              <div
                className="border-l-4 border-[#629A1A] pl-6"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                  Komunitas Kolaboratif
                </h3>
                <p
                  className="text-base md:text-lg text-gray-500 leading-relaxed"
                >
                  Belajar bersama warga lainnya dan terlibat dalam inisiatif lokal yang mendukung perubahan.
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
                className="drop-shadow-2xl"
              >
                <Image
                  src="/assets/images/join.png"
                  alt="Mengapa Bergabung"
                  width={495}
                  height={456}
                  className="object-contain"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;