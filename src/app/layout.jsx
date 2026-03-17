// src/app/layout.jsx
import localFont from "next/font/local";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GUL | Home Page",
  description: "Website untuk Program Agrotourism Leuwimalang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/assets/images/logo-navbar.png" type="image/png" />
      </head>
      {/* Tambahkan font-sans di sini agar Poppins dipakai sebagai default */}
      <body className={`${poppins.variable} ${inter.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased text-gray-900 bg-gray-50`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}