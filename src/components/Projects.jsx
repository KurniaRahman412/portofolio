const Projects = () => {
  const projects = [
    {
      title: "Manusia dan AI",
      desc: "Poster kesadaran akan teknologi AI",
      type: "Design",
      link: "/assets/projects/poster-1.jpg"
    },
    {
      title: "Raih Prestasi Tanpa Narkoba",
      desc: "Poster tentang ",
      type: "Design",
      link: "/assets/projects/poster-2.png"
    },
    {
      title: "Tolak Narkoba",
      desc: "Poster Tolak Narkoba dengan data kasus dan kerugian ekonomi di tahun 2024 ",
      type: "Design",
      link: "/assets/projects/poster-3.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:scale-[1.02] transition-transform">
              <div className="h-64 bg-slate-700 flex items-center justify-center text-slate-500 font-mono">
                {/* Ganti dengan <img src={...} /> jika sudah ada gambarnya */}
                <img src={proj.link} alt="Poster Design" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{proj.type}</span>
                <h3 className="text-xl font-bold text-white mt-2">{proj.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{proj.desc}</p>
                <a href={proj.link} className="inline-block mt-4 text-sm text-cyan-400 hover:underline">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;