import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CareerLaunch Job Tracker',
    description: 'A full-stack job application tracking application built with a senior project team.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com/sameljawabryBYUI' 
  },
  {
    title: 'French & Egyptian Food Finder',
    description: 'A responsive web application integrating Spoonacular and Unsplash APIs with local storage.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    link: 'https://github.com/sameljawabryBYUI'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8">
          I am a software development student and teacher. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}