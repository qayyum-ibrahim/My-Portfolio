import { motion } from "framer-motion";
import {
  Database,
  Server,
  Globe,
  Lock,
  Cpu,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

export default function Architecture() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            How I Build
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Good software isn't just about picking the right tools, it's about
            making the right decisions about data, reliability, security, and
            user experience from the start.
          </p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold border-l-4 border-primary pl-4">
              Engineering Principles
            </h2>
            <div className="space-y-6">
              <PrincipleItem
                title="Solve the Problem First"
                text="Technology is a tool, not the goal. I start with understanding the business problem before choosing the stack. The right solution is the simplest one that works reliably."
              />
              <PrincipleItem
                title="Build for Reliability"
                text="Production systems need to handle failures gracefully. I build with error handling, data validation, and recovery mechanisms from day one, not as an afterthought."
              />
              <PrincipleItem
                title="Design for Growth"
                text="Whether it's a landing page or a SaaS platform, I structure code and data so the system can evolve without costly rewrites."
              />
            </div>
          </div>

          <div className="relative border border-border bg-card/20 rounded-xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
              <div className="flex gap-8 w-full justify-center">
                <Node icon={<Globe />} label="Users" />
              </div>
              <div className="h-8 w-0.5 bg-border relative">
                <span className="absolute top-1/2 left-2 text-[10px] font-mono text-muted-foreground -translate-y-1/2">
                  HTTPS
                </span>
              </div>
              <div className="w-full p-4 border-2 border-dashed border-border rounded-xl bg-background/80">
                <div className="text-xs font-mono text-muted-foreground mb-4 text-center">
                  Application Layer
                </div>
                <div className="flex flex-col items-center gap-6">
                  <Node icon={<Lock />} label="API Gateway" />
                  <div className="h-6 w-0.5 bg-border" />
                  <div className="flex gap-4">
                    <Node icon={<Server />} label="Auth" />
                    <Node icon={<Server />} label="Core API" />
                    <Node icon={<Cpu />} label="Workers" />
                  </div>
                  <div className="h-6 w-0.5 bg-border" />
                  <div className="flex gap-4">
                    <Node icon={<Database />} label="Database" />
                    <Node icon={<Database />} label="Cache" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How I Approach Projects */}
        <h2 className="text-3xl font-display font-bold mb-8">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <ApproachCard
            icon={<Layers className="w-6 h-6" />}
            title="Clean Architecture"
            description="Separation of concerns, modular code, and clear boundaries between layers. Code that's easy to test, maintain, and extend."
          />
          <ApproachCard
            icon={<Zap className="w-6 h-6" />}
            title="Performance First"
            description="Efficient queries, smart caching, lazy loading, and optimized assets. Users shouldn't wait for your software."
          />
          <ApproachCard
            icon={<Code2 className="w-6 h-6" />}
            title="Type-Safe & Tested"
            description="TypeScript everywhere. Validation at API boundaries. Automated testing for critical paths. Fewer bugs, more confidence."
          />
        </div>

        {/* Tech Overview */}
        <h2 className="text-3xl font-display font-bold mb-8">
          Tools I Work With
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          I choose tools based on the problem, not trends. Here's what I reach
          for most often, each chosen for reliability, developer experience, and
          production readiness.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "React", desc: "UI & Interfaces" },
            { name: "Node.js", desc: "Server & APIs" },
            { name: "TypeScript", desc: "Type Safety" },
            { name: "MongoDB", desc: "Document Store" },
            { name: "PostgreSQL", desc: "Relational Data" },
            { name: "Redis", desc: "Caching & Queues" },
            { name: "Tailwind CSS", desc: "Styling" },
            { name: "Docker", desc: "Deployment" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-lg border border-border bg-card/30 hover:border-muted-foreground/30 transition-colors"
            >
              <div className="font-display font-semibold text-foreground">
                {tool.name}
              </div>
              <div className="text-xs text-muted-foreground">{tool.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrincipleItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="group">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-4 ml-1">
        {text}
      </p>
    </div>
  );
}

function Node({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background border border-border w-24 shadow-xl">
      <div className="text-muted-foreground w-5 h-5">{icon}</div>
      <span className="text-[10px] font-mono text-foreground">{label}</span>
    </div>
  );
}

function ApproachCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-card/30 border border-border hover:border-muted-foreground/30 transition-colors">
      <div className="mb-4 text-muted-foreground">{icon}</div>
      <h3 className="text-lg font-bold font-display mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
