import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Layout,
  Server,
  Shield,
} from "lucide-react";
import { useState } from "react";
import univibe_1 from "@assets/generated_images/univibe_1.png";
import univibe_2 from "@assets/generated_images/univibe_2.png";
import univibe_3 from "@assets/generated_images/univibe_3.png";

type Category = "all" | "flagship" | "architecture" | "frontend";

const projects = [
  {
    id: "univibe",
    title: "Univibe",
    category: "flagship",
    description:
      "A comprehensive event ticketing and management platform designed for high-concurrency ticket sales.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "React"],
    type: "Full-Stack System",
    features: [
      "Real-time seat reservation with Redis locking",
      "Automated payout workflows for organizers",
      "QR code generation and scanning system",
      "Role-based access control (RBAC)",
    ],
    links: {
      demo: "http://univibe.ng/",
      github: "https://github.com/qayyum-ibrahim/temp-univibe",
    },
  },
  {
    id: "saas-arch",
    title: "Multi-Tenant SaaS Architecture",
    category: "architecture",
    description:
      "Database-per-tenant isolation strategy implementation for a B2B platform.",
    tech: ["PostgreSQL", "Docker", "Nginx", "Node.js"],
    type: "System Design",
    details:
      "Implemented strict data isolation using row-level security and separate schemas. Designed the onboarding flow that automatically provisions resources.",
    links: { github: "#" },
  },
  {
    id: "payment-ledger",
    title: "Double-Entry Ledger System",
    category: "architecture",
    description: "Immutable financial transaction system for a fintech MVP.",
    tech: ["TypeScript", "SQL", "Acid Transactions"],
    type: "Backend Core",
    details:
      "Designed a ledger system that guarantees zero-sum balance across all accounts, handling race conditions during high-volume transfers.",
    links: { github: "#" },
  },
  {
    id: "job-queue",
    title: "Distributed Job Queue Service",
    category: "architecture",
    description:
      "Scalable background processing system for image resizing and email notifications.",
    tech: ["Redis", "BullMQ", "Kubernetes"],
    type: "Infrastructure",
    details:
      "Decoupled heavy processing from the main API, improving response times by 80%. Implemented exponential backoff for failed jobs.",
    links: { github: "#" },
  },
  {
    id: "dashboard-ui",
    title: "Analytics Dashboard",
    category: "frontend",
    description:
      "High-performance analytics dashboard with real-time data visualization.",
    tech: ["React", "D3.js", "TailwindCSS"],
    type: "Frontend Interface",
    links: { demo: "#", github: "#" },
  },
  {
    id: "marketing-site",
    title: "SaaS Landing Page",
    category: "frontend",
    description:
      "Conversion-optimized landing page with smooth Framer Motion animations.",
    tech: ["Astro", "React", "Framer Motion"],
    type: "Marketing Site",
    links: { demo: "#" },
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Selected Projects
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            A collection of systems, architectures, and interfaces I've built.
            Ranging from high-scale backend services to polished user
            interfaces.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-zinc-800 pb-4">
          {[
            { id: "all", label: "All Work" },
            { id: "flagship", label: "Flagship" },
            { id: "architecture", label: "Backend Systems" },
            { id: "frontend", label: "Frontend" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as Category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === tab.id
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Project (Univibe) - Only show if All or Flagship */}
        {(activeCategory === "all" || activeCategory === "flagship") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="border border-zinc-800 rounded-2xl bg-zinc-900/30 overflow-hidden relative group">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-xs uppercase tracking-wider">
                    <Badge
                      variant="outline"
                      className="border-blue-500/30 text-blue-400"
                    >
                      Flagship Product
                    </Badge>
                    <span>Production System</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Univibe
                  </h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    A comprehensive event ticketing platform built to handle
                    high-concurrency demands. Unlike simple CRUD apps, Univibe
                    handles complex state management for seat reservations,
                    payments, and real-time scanning.
                  </p>

                  <div className="space-y-3 mb-8">
                    {projects[0].features?.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="Z-10 bg-white text-black hover:bg-zinc-200"
                      onClick={() =>
                        window.open(projects[0].links.demo, "_blank")
                      }
                    >
                      View Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="Z-10 border-zinc-700 hover:bg-zinc-800"
                    >
                      System Architecture <Layers className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="bg-zinc-950 border-l border-zinc-800 min-h-[400px] flex items-center justify-center relative p-8">
                  {/* Abstract Representation of the System */}
                  <div className="relative w-full max-w-md aspect-video border border-zinc-800 bg-zinc-900/50 rounded-lg flex items-center justify-center">
                    {/* <span className="text-zinc-600 font-mono text-sm">
                      Product UI / Dashboard Preview
                    </span> */}
                    {/* Placeholder for actual screenshot */}

                    <img
                      onClick={() =>
                        window.open(projects[0].links.demo, "_blank")
                      }
                      src={univibe_1}
                      className="bg-zinc-800 rounded-sm cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== "univibe")
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-zinc-900/20 border-zinc-800 hover:border-zinc-700 transition-colors group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                        {project.category === "architecture" ? (
                          <Server className="w-5 h-5" />
                        ) : (
                          <Layout className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            className="text-zinc-500 hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            className="text-zinc-500 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-display">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono uppercase tracking-wider text-blue-400">
                      {project.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* For Architecture Projects, show a mini visual cue */}
                    {project.category === "architecture" && (
                      <div className="mb-6 p-4 bg-zinc-950 rounded border border-zinc-800/50 flex flex-col gap-2">
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                          <span>Input</span>
                          <span>Process</span>
                          <span>Output</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-zinc-700" />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 border-transparent text-[10px]"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
