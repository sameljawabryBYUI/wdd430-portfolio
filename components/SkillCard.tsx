interface SkillCardProps {
  category: string;
  skills: string;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 my-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
      <p className="text-gray-600">{skills}</p>
    </div>
  );
}