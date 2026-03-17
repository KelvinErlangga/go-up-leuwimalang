// src/app/kelas/page.jsx
import MainLayout from "@/components/Dashboard/MainLayout";

export default function KelasPage() {
  const classes = [
    {
      id: "peduli-bersih",
      title: "Peduli Bersih",
      desc: "Langkah Kecil untuk Lingkungan Sehat",
      progress: 60,
    },
    {
      id: "digital-ready",
      title: "Digital Ready",
      desc: "Menghadapi Tantangan Dunia Online",
      progress: 25,
    }
  ];

  return (
    <MainLayout title="Kelas Saya" activeRoute="kelas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto font-sans">
        {classes.map((cls) => (
          <a
            key={cls.id}
            href={`/kelas/${cls.id}`} // Route dinamis ke detail kelas
            className="block bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md group"
          >
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#629A1A] transition-colors">
              {cls.title}
            </h3>
            <p className="text-gray-500 mt-2 mb-6">{cls.desc}</p>
            
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
              <div
                className="bg-[#629A1A] h-2 rounded-full"
                style={{ width: `${cls.progress}%` }}
              ></div>
            </div>
            <p className="text-sm font-bold text-gray-700 text-right">{cls.progress}% Selesai</p>
          </a>
        ))}
      </div>
    </MainLayout>
  );
}