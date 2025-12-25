import { Terminal, Code2, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              More than just code. <br />
              <span className="text-zinc-500">I build reliable systems.</span>
            </h1>

            <div className="prose prose-invert prose-lg text-zinc-400 mb-16">
              <p>
                I am a Backend-Focused Full-Stack Engineer with over 6 years of experience building production-grade software. 
                My career hasn't been about just closing tickets; it's been about owning systems end-to-end.
              </p>
              <p>
                I specialize in the "hard parts" of web development: database schema design, handling race conditions, 
                managing distributed state, and ensuring that APIs don't just work on my machine, but scale in production.
              </p>
              <p>
                While my core strength lies in Node.js and backend architecture, I treat the frontend with the same level of 
                rigor. I believe a Full-Stack engineer should be able to center a div as confidently as they optimize a database query.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Experience
            </h2>

            <div className="space-y-12 border-l border-zinc-800 ml-3 pl-8 relative">
              <ExperienceItem 
                role="Senior Backend Engineer"
                company="TechStartup Inc."
                period="2022 - Present"
                description="Led the migration from a monolithic architecture to microservices. Improved API response times by 40% through aggressive caching strategies and database indexing."
              />
              <ExperienceItem 
                role="Full Stack Developer"
                company="Digital Solutions Ltd"
                period="2019 - 2022"
                description="Built and maintained multiple client SaaS products. Responsible for the entire SDLC, from requirement gathering to deployment on AWS."
              />
              <ExperienceItem 
                role="Junior Developer"
                company="WebAgency"
                period="2017 - 2019"
                description="Started my journey building custom WordPress themes and plugins, eventually moving to custom React/Node.js applications."
              />
            </div>
          </div>

          {/* Sidebar / Skills */}
          <div className="lg:col-span-4 space-y-12">
            <SkillSection 
              title="Backend Core" 
              skills={["Node.js", "Express", "NestJS", "Python", "Go (Basic)"]} 
            />
            <SkillSection 
              title="Databases & Data" 
              skills={["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "TypeORM", "Prisma"]} 
            />
            <SkillSection 
              title="Frontend" 
              skills={["React", "TypeScript", "TailwindCSS", "Next.js", "Vite"]} 
            />
            <SkillSection 
              title="DevOps & Cloud" 
              skills={["Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD (GitHub Actions)", "Linux"]} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ role, company, period, description }: { role: string, company: string, period: string, description: string }) {
  return (
    <div className="relative">
      <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-700" />
      <h3 className="text-xl font-bold text-zinc-100">{role}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-400 font-medium">{company}</span>
        <span className="text-sm font-mono text-zinc-500">{period}</span>
      </div>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function SkillSection({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-display font-bold mb-4 border-b border-zinc-800 pb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-zinc-900 text-zinc-400 text-sm border border-zinc-800 rounded hover:border-zinc-600 transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
