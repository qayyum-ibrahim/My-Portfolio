import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Database, Code, ShieldCheck, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_technical_network_background.png";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Contract Work
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500"
            >
              I build scalable backend systems that power real businesses.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Backend-Focused Full-Stack Engineer specializing in APIs, distributed systems, caching strategies, and transaction-safe platforms.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button asChild size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-zinc-200">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base border-zinc-700 hover:bg-zinc-900 hover:text-white">
                 <Link href="/architecture">
                  View Architecture
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-zinc-500"
            >
              {["Node.js", "TypeScript", "Redis", "MongoDB", "PostgreSQL", "React", "Docker"].map((tech) => (
                <span key={tech} className="font-mono text-sm uppercase tracking-wider hover:text-zinc-300 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid / Core Competencies */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Server className="w-8 h-8 text-blue-500" />}
              title="Distributed Systems"
              description="Designing resilient microservices and event-driven architectures that scale horizontally."
            />
            <FeatureCard 
              icon={<Database className="w-8 h-8 text-emerald-500" />}
              title="Data Integrity"
              description="Complex schema design, ACID compliance, and efficient caching strategies using Redis."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-purple-500" />}
              title="Security First"
              description="Implementing robust authentication, rate limiting, and secure API gateways from day one."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-xl border border-zinc-900 bg-zinc-900/20 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 group">
      <div className="mb-6 p-3 bg-zinc-950 w-fit rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
