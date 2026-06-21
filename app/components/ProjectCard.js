export default function ProjectCard({
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
      <h3 className="text-2xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}