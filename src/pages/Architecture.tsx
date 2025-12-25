import { motion } from "framer-motion";
import { Database, Server, Globe, Lock, Cpu, ArrowRight } from "lucide-react";

export default function Architecture() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">System Architecture</h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            I don't just write code; I design systems. My focus is on building resilient, 
            observable, and scalable architectures that can handle production loads.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold border-l-4 border-blue-500 pl-4">Backend Philosophy</h2>
            
            <div className="space-y-6">
              <PhilosophyItem 
                title="Database Integrity over Speed" 
                text="While caching is great, data correctness is non-negotiable. I use ACID compliant transactions for all critical paths and eventual consistency only where it makes sense."
              />
              <PhilosophyItem 
                title="Failures are Expected" 
                text="Systems fail. I build with that assumption—implementing circuit breakers, exponential backoff retries, and dead letter queues."
              />
              <PhilosophyItem 
                title="Observability First" 
                text="If you can't measure it, you can't improve it. Structured logging, metrics, and distributed tracing are Day 1 requirements."
              />
            </div>
          </div>

          <div className="relative border border-zinc-800 bg-zinc-900/20 rounded-xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
            {/* Simple CSS System Diagram */}
            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
              <div className="flex gap-8 w-full justify-center">
                <Node icon={<Globe />} label="Client" color="text-zinc-400" border="border-zinc-700" />
              </div>
              <div className="h-8 w-0.5 bg-zinc-700 relative">
                <span className="absolute top-1/2 left-2 text-[10px] font-mono text-zinc-500 -translate-y-1/2">HTTPS</span>
              </div>
              <div className="w-full p-4 border-2 border-dashed border-zinc-700 rounded-xl bg-zinc-900/80">
                <div className="text-xs font-mono text-zinc-500 mb-4 text-center">VPC / Private Network</div>
                <div className="flex flex-col items-center gap-6">
                  <Node icon={<Lock />} label="API Gateway" color="text-purple-400" border="border-purple-500/50" />
                  <div className="h-6 w-0.5 bg-zinc-700" />
                  <div className="flex gap-4">
                    <Node icon={<Server />} label="Auth Service" color="text-blue-400" border="border-blue-500/50" />
                    <Node icon={<Server />} label="Core API" color="text-blue-400" border="border-blue-500/50" />
                    <Node icon={<Cpu />} label="Worker" color="text-orange-400" border="border-orange-500/50" />
                  </div>
                  <div className="h-6 w-0.5 bg-zinc-700" />
                  <div className="flex gap-4">
                     <Node icon={<Database />} label="Primary DB" color="text-emerald-400" border="border-emerald-500/50" />
                     <Node icon={<Database />} label="Redis Cache" color="text-red-400" border="border-red-500/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Cards */}
        <h2 className="text-3xl font-display font-bold mb-8">Architectural Patterns I Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArchCard 
            title="Event-Driven Architecture"
            description="Decoupling services using message brokers like RabbitMQ or BullMQ to handle background processing asynchronously."
            tags={["BullMQ", "Pub/Sub", "Decoupling"]}
          />
           <ArchCard 
            title="Caching Strategies"
            description="Implementing Cache-Aside and Write-Through patterns with Redis to reduce database load and improve latency."
            tags={["Redis", "TTL", "Invalidation"]}
          />
           <ArchCard 
            title="Horizontal Scaling"
            description="Designing stateless services that can scale out behind a load balancer, with shared session stores."
            tags={["Stateless", "Load Balancing", "Docker"]}
          />
        </div>
      </div>
    </div>
  );
}

function PhilosophyItem({ title, text }: { title: string, text: string }) {
  return (
    <div className="group">
      <h3 className="text-lg font-semibold text-zinc-200 mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed border-l border-zinc-800 pl-4 ml-1">
        {text}
      </p>
    </div>
  );
}

function Node({ icon, label, color, border }: { icon: any, label: string, color: string, border: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 p-3 rounded-lg bg-zinc-950 border ${border} w-24 shadow-xl`}>
      <div className={`${color} w-5 h-5`}>{icon}</div>
      <span className="text-[10px] font-mono text-zinc-300">{label}</span>
    </div>
  );
}

function ArchCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors">
      <h3 className="text-lg font-bold font-display mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm mb-6 h-20">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-zinc-950 text-zinc-500 border border-zinc-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
