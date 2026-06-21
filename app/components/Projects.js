import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "เป็นผู้สำเร็จราชการ",
    },
    {
      id: 2,
      title: "Todo App",
      description: "มีลูกเตะไมเคิลแจ็คสัน",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Hee Hee",
    },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}