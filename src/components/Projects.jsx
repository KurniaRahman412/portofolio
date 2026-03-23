import gambar1 from '../projects/web-1.png';
import gambar2 from '../projects/web-2.png';
import gambar3 from '../projects/web-3.png';
import gambar4 from '../projects/poster-1.jpg';
import gambar5 from '../projects/poster-2.png';
import gambar6 from '../projects/poster-3.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "CineExplora",
      desc: "Web yang terhubung dengan API Film",
      type: "Code",
      tech: ["Html/Css", "Javascript", "API"],
      image: gambar3,
      link: "https://uas-pem-web-eight.vercel.app"
    },
    {
      title: "To-Do-List",
      desc: "Aplikasi To-Do-List dengan React terintegrasi LocalStorage",
      type: "Code",
      tech: ["React", "State Management", "Tailwind"],
      image: gambar1,
      link: "/project/todo"
    },
    {
      title: "Personal Finance Tracker",
      desc: "Aplikasi Pencatat Pemasukan/Pengeluaran terintegrasi LocalStorage",
      type: "Code",
      tech: ["React","State Management", "Tailwind"],
      image: gambar2,
      link: "/project/pft"
    },
    {
      title: "Manusia dan AI",
      desc: "Poster kesadaran akan teknologi AI",
      type: "Design",
      tech: ["CorelDraw"],
      image: gambar4
    },
    {
      title: "Raih Prestasi Tanpa Narkoba",
      desc: "Poster tentang ",
      type: "Design",
      tech: ["CorelDraw"],
      image: gambar5
    },
    {
      title: "Tolak Narkoba",
      desc: "Poster Tolak Narkoba dengan data kasus dan kerugian ekonomi di tahun 2024 ",
      type: "Design",
      tech: ["CorelDraw"],
      image: gambar6
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
                <img src={proj.image} alt="Poster Design" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{proj.type}</span>
                <h3 className="text-xl font-bold text-white mt-2">{proj.title}</h3>
                <div>
                  {proj.tech.map((t, i) => (
                    <span className="text-[9pt] pr-2 text-blue-400 " key={i}>{t}</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-2">{proj.desc}</p>
                {proj.link && proj.link.startsWith('/') ? (
                  <Link to={proj.link} className="inline-block mt-4 text-sm text-cyan-400 hover:underline">
                    View Project →
                  </Link>
                ) : (
                  <a href={proj.link || proj.image} target={proj.link ? "_blank" : "_self"} rel="noreferrer" className="inline-block mt-4 text-sm text-cyan-400 hover:underline">
                    View Project →
                  </a>
                )}
                {/* <a href={proj.link || proj.image} className="inline-block mt-4 text-sm text-cyan-400 hover:underline">View Project →</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;