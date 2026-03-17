import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f1115] text-white pt-20 pb-10 border-t border-gray-800"
    >
      <div
        className="max-w-screen-xl mx-auto px-6 md:px-10"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          <div
            className="md:col-span-5"
          >
            <div
              className="flex items-center space-x-3 mb-6"
            >
              <a
                href="/"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/assets/images/logo-hero.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </a>
              <h2
                className="text-2xl font-bold tracking-tight text-white"
              >
                Go Up Leuwimalang
              </h2>
            </div>
            <p
              className="text-gray-400 leading-relaxed mb-8 max-w-sm"
            >
              Maju Bersama, Tingkatkan Literasi dan Kesadaran Lingkungan untuk masa depan desa yang lebih baik.
            </p>
            <ul
              className="space-y-4"
            >
              <li
                className="flex items-start text-gray-400"
              >
                <span
                  className="text-[#629A1A] mr-3 font-bold"
                >
                  P:
                </span>
                Leuwimalang, Jawa Barat
              </li>
              <li
                className="flex items-start text-gray-400"
              >
                <span
                  className="text-[#629A1A] mr-3 font-bold"
                >
                  E:
                </span>
                <a
                  href="mailto:admin@leuwimalang.ac.id"
                  className="hover:text-white transition-colors"
                >
                  admin@leuwimalang.ac.id
                </a>
              </li>
              <li
                className="flex items-start text-gray-400"
              >
                <span
                  className="text-[#629A1A] mr-3 font-bold"
                >
                  T:
                </span>
                +62 812 2200 2253
              </li>
            </ul>
          </div>

          <div
            className="md:col-span-3 md:col-start-7"
          >
            <h3
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
            >
              Produk
            </h3>
            <ul
              className="space-y-4"
            >
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#629A1A] transition-colors"
                >
                  Kursus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#629A1A] transition-colors"
                >
                  Tantangan Harian
                </a>
              </li>
            </ul>
          </div>

          <div
            className="md:col-span-3"
          >
            <h3
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
            >
              Lainnya
            </h3>
            <ul
              className="space-y-4"
            >
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#629A1A] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#629A1A] transition-colors"
                >
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#629A1A] transition-colors"
                >
                  Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p
            className="text-gray-500 text-sm"
          >
            © {currentYear} Copyrights by{" "}
            <span
              className="text-gray-300 font-semibold"
            >
              Trio Go Through
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;