const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-slate-300">
        <div className="font-bold text-xl text-cyan-400">Kurnia.dev</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;