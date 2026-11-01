import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        Hello! I am Samar. I work as a teacher by day and study software development by night. 
        I am currently pursuing my Bachelor of Science in Software Development.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">My Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard 
          category="Frontend Development" 
          skills="React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS" 
        />
        <SkillCard 
          category="Backend & Database" 
          skills="Node.js, Express.js, Python, Java, PostgreSQL, SQLite" 
        />
      </div>
    </main>
  );
}