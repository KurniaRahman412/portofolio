import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience"; // Tambahkan ini
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-cyan-500/30 font-sans text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">Moh Arif Kurnia Rahman</h3>
            <p className="text-sm text-slate-500">Kendal, Jawa Tengah, Indonesia</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="mailto:kmoharif@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
            <a href="https://wa.me/6282324741692" target="_blank" className="hover:text-cyan-400 transition-colors">WhatsApp</a>
            <a href="https://github.com/kurniarahman412" target="_blank" className="hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;