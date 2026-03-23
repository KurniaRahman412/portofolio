const Skills = () => {
  const skillCategories = [
    {
      title: "Development & Coding",
      skills: ["HTML/CSS", "JavaScript", "React", "PHP", "C++", "Python"]
    },
    {
      title: "Infrastructure & Ops",
      skills: ["LAN/WIFI Config", "Hardware Troubleshooting", "Database Dapodik", "Linux Mint"]
    },
    {
      title: "Design & Creative",
      skills: ["CorelDraw", "Photoshop", "Canva", "Filmora", "MS Office"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="p-6 rounded-2xl border border-slate-800 bg-slate-800/30 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-cyan-400 font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-200 text-xs rounded-full border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;