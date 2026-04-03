import { Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <img
              src="qayyum.png"
              className="object-cover object-[50%_45%] top-10 h-96 w-full mb-12 rounded-xl"
            />
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                I solve business problems <br />
                <span className="text-muted-foreground">
                  with well-built software.
                </span>
              </h1>

              <div className="prose prose-invert prose-lg text-muted-foreground mb-16 space-y-6">
                <p>
                  I'm Ibrahim Qayyum, a Full-Stack Engineer with 6+ years of
                  experience building production software that drives real
                  business outcomes. I don't just write code, I understand the
                  problem, design the solution, and deliver systems that work
                  reliably at scale.
                </p>
                <p>
                  My work spans custom web applications, SaaS platforms,
                  business websites, and API integrations. Whether it's an event
                  ticketing system processing thousands of transactions, a
                  lead-generating website for a local business, or a complex
                  dashboard for managing operations, I build solutions that are
                  purpose-built for the problem at hand.
                </p>
                <p>
                  I'm the kind of engineer who thinks about the user experience
                  and the database schema with equal care. I focus on
                  reliability, performance, and maintainability, because
                  software that breaks or can't scale is software that costs
                  your business money.
                </p>
                <p>
                  I work with startups, agencies, and business owners who need
                  someone they can trust to own the technical side of their
                  product, not just build features, but build the right thing
                  the right way.
                </p>
              </div>

              <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Experience
              </h2>

              <div className="space-y-12 border-l border-border ml-3 pl-8 relative">
                <ExperienceItem
                  role="Full-Stack Engineer (Freelance & Contract)"
                  company="Self-Employed"
                  period="2021 - Present"
                  description="Building end-to-end web applications and business websites for clients across industries. Projects include event platforms, SaaS dashboards, service industry websites, and API integrations."
                />
                <ExperienceItem
                  role="Full Stack Developer"
                  company="Digital Solutions Ltd"
                  period="2019 - 2021"
                  description="Developed and maintained multiple client-facing SaaS products. Owned the full development lifecycle from requirements gathering through deployment."
                />
                <ExperienceItem
                  role="Junior Developer"
                  company="WebAgency"
                  period="2017 - 2019"
                  description="Built custom websites and web applications, progressing from template-based work to fully custom React and Node.js solutions."
                />
              </div>
            </div>
          </div>

          {/* Sidebar / Skills */}
          <div className="lg:col-span-4 space-y-12">
            <SkillSection
              title="What I Build"
              skills={[
                "Web Applications",
                "Business Websites",
                "SaaS Platforms",
                "Admin Dashboards",
                "APIs & Integrations",
              ]}
            />
            <SkillSection
              title="Frontend"
              skills={[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
              ]}
            />
            <SkillSection
              title="Backend & Data"
              skills={[
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "REST APIs",
              ]}
            />
            <SkillSection
              title="Tools & Infrastructure"
              skills={["Docker", "Git", "CI/CD", "Vercel", "AWS", "Linux"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="relative">
      <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
      <h3 className="text-xl font-bold text-foreground">{role}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-primary font-medium">{company}</span>
        <span className="text-sm font-mono text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function SkillSection({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-display font-bold mb-4 border-b border-border pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm border border-border rounded hover:border-muted-foreground/50 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
