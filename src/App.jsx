import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ToDoList from "./components/plugins/Todolist"; 
import Pft from "./components/plugins/Personalfinancetracker";

// Komponen untuk Halaman Utama (Home)
const Home = () => (
  <>
    <Hero />
    <Skills />
    <Experience />
    <Projects />
  </>
);

// Komponen untuk Halaman Detail Proyek (ToDo App)
const ToDoPage = () => (
  <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
    <Link to="/" className="mb-8 text-cyan-400 hover:underline flex items-center gap-2">
      ← Kembali ke Portofolio
    </Link>
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Demo: ToDo Application</h2>
    <ToDoList />
  </div>
);

const PftPage = ()=>(
  <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
    <Link to="/" className="mb-8 text-cyan-400 hover:underline flex items-center gap-2">
      ← Kembali ke Portofolio
    </Link>
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Demo: Personal Finance Tracker</h2>
    <Pft />
  </div>
)
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 selection:bg-cyan-500/30 font-sans text-slate-300">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/todo" element={<ToDoPage />} />
            <Route path="/project/pft" element={<PftPage />} />
          </Routes>
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
    </Router>
  );
}

export default App;