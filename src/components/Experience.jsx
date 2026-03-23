const Experience = () => {
  const experiences = [
    {
      year: "2024 - Sekarang",
      title: "S1 - Teknik Informatika",
      company: "UNISS Kendal",
      desc: "Sedang menempuh pendidikan semester 4 dengan fokus pada pengembangan perangkat lunak.",
      category: "Education"
    },
    {
      year: "2017 - 2020",
      title: "SMA AL FADLLU BRANGSONG - IPA",
      company: "Pondok Pesantren Al Fadllu 2",
      desc: "Lulus dari SMA jurusan IPA pada tahun 2020 (Covid-19) dengan nilai rata-rata ujian sekolah 82",
      category: "Education"
    },
    {
      year: "2021 - 2024",
      title: "Operator Sekolah & Proktor ANBK",
      company: "SMP Al Fadllu",
      desc: "Mengelola Data Dapodik, sinkronisasi data nasional, dan bertanggung jawab atas integritas data sekolah dengan nasional.",
      category: "Work"
    },
    {
      year: "2021 - 2023",
      title: "Panitia PPDB SMP & SMA Al Fadllu",
      company: "Pondok Pesantren Al Fadllu 2",
      desc: "Mengelola administrasi pendaftaran siswa baru secara digital dan fisik.",
      category: "Organization"
    },
    {
      year: "2018 - 2020",
      title: "Sekretaris Jamiyah",
      company: "Pondok Pesantren Al Fadllu 2",
      desc: "Bertanggung jawab atas notulensi dan persuratan organisasi.",
      category: "Organization"
    },
    {
      year: "2025 - sekarang",
      title: "Sekretaris HIMTIF",
      company: "Fakultas Komputer dan Desain UNISS",
      desc: "Bertanggung jawab atas seluruh administrasi, persuratan, dan dokumentasi organisasi.",
      category: "Organization"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience & Education</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-400 transition-colors group">
              <div className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 rounded-full -left-2.25 top-1 transition-colors"></div>
              <div className="flex justify-between">
                <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{exp.year}</span>
                <span className="text-sm font-bold text-cyan-700 ">{exp.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
              <p className="text-slate-300 font-medium">{exp.company}</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;