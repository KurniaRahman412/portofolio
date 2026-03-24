const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-cyan-400">Kurnia.dev</div>
        <div className="flex gap-8 text-sm font-medium">
          {/* Gunakan button agar lebih semantik untuk aksi scroll */}
          <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;