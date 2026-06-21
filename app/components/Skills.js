
export default function Skills() {
   
    const skills = [
        "JavaScript",
         "นอน"
         , "นอนต่อ"
        ];
  return (
<div>
    <h3 className="text-4xl font-bold mb-8">
        ทักษะ
        </h3>
{skills.map((skill) => (
  <span key={skill}>{skill}</span>
))}
</div>
  )
}