import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dulwich_1 from "@assets/generated_images/dulwich_1.png";
import dulwich_2 from "@assets/generated_images/dulwich_2.png";
import plumbing_1 from "@assets/generated_images/plumbing_1.png";
import plumbing_2 from "@assets/generated_images/plumbing_2.png";
import univibe_1 from "@assets/generated_images/univibe_1.png";
import univibe_2 from "@assets/generated_images/univibe_2.png";
import apex_1 from "@assets/generated_images/apex_1.png";
import apex_2 from "@assets/generated_images/apex_2.png";
import barber_1 from "@assets/generated_images/barber_1.png";
import barber_2 from "@assets/generated_images/barber_2.png";
import master_plumber_1 from "@assets/generated_images/master_plumber_1.png";
import master_plumber_2 from "@assets/generated_images/master_plumber_2.png";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  images: { hero: string; mobile: string };
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "univibe",
    title: "Univibe",
    problem:
      "Event organizers needed a reliable ticketing platform that could handle concurrent purchases without double-booking seats.",
    solution:
      "Built a full-stack event ticketing system with real-time seat locking, automated organizer payouts, QR-based check-in, and role-based admin dashboards.",
    impact:
      "Processed 1000+ tickets with zero double-bookings. Reduced manual payout processing time by 70%.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "React"],
    images: { hero: univibe_1, mobile: univibe_2 },
    link: "http://univibe.ng/",
    tags: ["Web App", "Payments", "Real-Time"],
  },
  {
    id: "master-plumber",
    title: "Master Plumber",
    problem:
      "A Lusaka-based plumbing company relied entirely on word-of-mouth with no digital presence.",
    solution:
      "Designed and built a multi-page SEO-optimized website with lead capture forms, a project gallery, and WhatsApp integration for instant enquiries.",
    impact:
      "Established professional online presence. Increased inbound enquiries through local search visibility.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: { hero: master_plumber_1, mobile: master_plumber_2 },
    link: "https://master-plumber.vercel.app/",
    tags: ["Business Website", "SEO", "Lead Generation"],
  },
  {
    id: "dulwich-plumber",
    title: "Dulwich Plumber",
    problem:
      "A London plumber needed a website that converts emergency callers into booked jobs, fast.",
    solution:
      "Built a mobile-first landing page with one-tap emergency calling, Gas Safe credential display, and service area targeting.",
    impact:
      "Sub-second load times. Streamlined UX optimized for high-intent emergency conversions.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    images: { hero: dulwich_1, mobile: dulwich_2 },
    link: "https://dulwich-plumber.vercel.app/",
    tags: ["Landing Page", "Conversion", "Mobile-First"],
  },
  {
    id: "mayfair-drainage",
    title: "Mayfair Plumbing & Drainage",
    problem:
      "A premium London plumbing firm needed a website that reflected their luxury positioning in the W1 postcode.",
    solution:
      "Crafted a 'quiet luxury' web experience with premium branding, concierge-style lead capture, and SEO targeting high-net-worth postcodes.",
    impact:
      "Elevated brand perception. Positioned the business to attract higher-value clients in premium London areas.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    images: { hero: plumbing_1, mobile: plumbing_2 },
    link: "https://mayfair-plumbing.vercel.app/",
    tags: ["Brand Website", "Luxury", "SEO"],
  },
  {
    id: "apex-scaffolding",
    title: "Apex Scaffolding & Access",
    problem:
      "An industrial scaffolding company needed a B2B web presence that communicates safety, scale, and compliance.",
    solution:
      "Built a rugged, performance-optimized B2B site with a rapid quote system, safety compliance gallery, and project map integration.",
    impact:
      "Enabled online lead capture for site managers. Optimized for low-signal mobile browsing on construction sites.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    images: { hero: apex_1, mobile: apex_2 },
    link: "https://apex-power-grid.vercel.app/",
    tags: ["B2B", "Industrial", "Lead Gen"],
  },
  {
    id: "cutting-edge",
    title: "The Cutting Edge",
    problem:
      "A premium London barbershop wanted a digital presence that matched their street-premium brand identity.",
    solution:
      "Created a modern heritage web experience with conversion-optimized booking integration, masonry portfolio gallery, and interactive service menu.",
    impact:
      "Streamlined online bookings. Elevated brand identity with a cohesive digital experience.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    images: { hero: barber_1, mobile: barber_2 },
    link: "https://the-cutting-edge.vercel.app/",
    tags: ["Lifestyle", "Bookings", "Branding"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My Work
          </h1>
          <p className="text-muted-foreground text-lg">
            Every project starts with a business problem. Here's how I've helped
            clients build solutions that deliver real results.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-border rounded-2xl bg-card/20 overflow-hidden hover:border-muted-foreground/20 transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-last" : ""}`}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-border text-muted-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    {project.title}
                  </h2>

                  <div className="space-y-4 mb-8">
                    <ProjectDetail label="The Problem" text={project.problem} />
                    <ProjectDetail
                      label="What I Built"
                      text={project.solution}
                    />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3" /> The Result
                      </span>
                      <p className="text-foreground text-sm mt-1 font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-secondary border border-border rounded text-xs text-muted-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Button
                      variant="outline"
                      className="border-border hover:bg-secondary"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Live Project{" "}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="bg-background border-l border-border min-h-[400px] flex items-center justify-center relative p-6 md:p-12">
                  <div className="relative w-full aspect-video border border-border bg-secondary/30 rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={project.images.hero}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 md:right-8 w-[120px] md:w-40 aspect-9/19 border-4 border-background bg-secondary rounded-4xl overflow-hidden shadow-2xl hidden md:block">
                    <img
                      src={project.images.mobile}
                      alt={`${project.title} mobile`}
                      className="w-full h-full object-fit"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <p className="text-muted-foreground text-sm mt-1">{text}</p>
    </div>
  );
}
