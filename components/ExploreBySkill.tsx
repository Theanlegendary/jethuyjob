import Link from 'next/link'

const skills = [
  { name: 'Java', count: 342 },
  { name: 'React', count: 218 },
  { name: 'Python', count: 195 },
  { name: 'JavaScript', count: 287 },
  { name: 'Node.js', count: 156 },
  { name: 'Flutter', count: 98 },
  { name: 'AI/ML', count: 124 },
  { name: 'DevOps', count: 142 },
  { name: 'iOS', count: 87 },
  { name: 'Android', count: 92 },
]

export default function ExploreBySkill({ language }: { language: 'vi' | 'en' }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark mb-8 text-center">
          {language === 'vi' ? 'Khám phá theo kỹ năng' : 'Explore by skill'}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              href={`/jobs?skill=${skill.name.toLowerCase()}`}
              className="px-5 py-2.5 bg-surface dark:bg-surface-dark hover:bg-primary-light dark:hover:bg-primary/20 border border-border dark:border-border-dark rounded-full text-text dark:text-text-dark font-medium text-sm transition-colors tap-target"
            >
              {skill.name} ({skill.count})
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
