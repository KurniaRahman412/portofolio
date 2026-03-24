import fotoProfil from '/assets/profil/Profil.jpg'
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="pt-36 pb-20 px-10 flex">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        
        {/* === BAGIAN FOTO PROFIL === */}
        <div className="shrink-0 relative group">
          {/* Efek Bingkai Glow saat di-hover */}
          <div className="absolute -inset-1 bg-cyan-500 rounded-full opacity-30 group-hover:opacity-60 blur transition-opacity"></div>
          
          {/* Lingkaran Foto */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl shadow-slate-950/50">
            <img 
              src={fotoProfil} 
              alt="Arif Kurnia Profil" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* === BAGIAN TEKS PERKENALAN === */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-800">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 leading-tight">
            I'm <span className="text-cyan-400 underline decoration-cyan-400/30">Arif Kurnia</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
            Technical Informatics student with strong skills in Web Development (React/NodeJS), IT Operations (Dapodik/ANBK), and Graphic Design. Let's build something efficient together.
          </p>
          <div className="mt-12 flex gap-4">
            <button onClick={() => scrollToSection('projects')} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-cyan-500/20 text-sm cursor-pointer">
              View My Work
            </button>
            {/* Pastikan kamu punya file CV-mu di folder public/ dengan nama cv-kurnia.pdf */}
            <a href="/CV - Moh Arif Kurnia Rahman.pdf" target="_blank" className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 px-8 py-3 rounded-full font-bold transition-all text-sm">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;