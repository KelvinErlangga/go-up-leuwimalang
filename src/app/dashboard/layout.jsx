export const metadata = {
  title: "GUL | Dashboard",
  description: "Dashboard untuk Program Agrotourism Leuwimalang",
};

export default function DashboardLayout({ children }) {
  // Hanya return {children} atau div pembungkus jika perlu.
  // JANGAN me-return <html> atau <body> lagi.
  return (
    <>
      {children}
    </>
  );
}