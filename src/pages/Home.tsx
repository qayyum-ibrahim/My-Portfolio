import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Globe,
  Code2,
  Plug,
  TrendingUp,
  ExternalLink,
  MessageSquareQuote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@assets/generated_images/abstract_technical_network_background.png";

import univibe_1 from "@assets/generated_images/univibe_1.png";
import dulwich_1 from "@assets/generated_images/dulwich_1.png";
import master_plumber_1 from "@assets/generated_images/master_plumber_1.png";

const featuredProjects = [
  {
    title: "Univibe",
    problem:
      "Event organizers struggled with unreliable ticketing and manual payouts.",
    solution:
      "Built a full-stack event ticketing platform with real-time seat reservations, automated payouts, and QR-based check-in.",
    impact:
      "Processed 1000+ tickets with zero double-bookings and reduced payout processing time by 70%.",
    image: univibe_1,
    link: "http://univibe.ng/",
    tags: ["Web App", "Payments", "Real-Time"],
  },
  {
    title: "Master Plumber",
    problem:
      "A Lusaka-based plumbing business had no online presence and relied solely on word-of-mouth.",
    solution:
      "Designed a multi-page SEO-optimized website with lead capture, project gallery, and WhatsApp integration.",
    impact:
      "Increased inbound leads by establishing a professional digital presence and local search visibility.",
    image: master_plumber_1,
    link: "https://master-plumber.vercel.app/",
    tags: ["Business Website", "SEO", "Lead Gen"],
  },
  {
    title: "Dulwich Plumber",
    problem:
      "A London plumber needed a fast-loading site that converts emergency callers into booked jobs.",
    solution:
      "Built a mobile-first landing page with one-tap calling, trust signals, and service area targeting.",
    impact:
      "Sub-second load times and a streamlined UX optimized for emergency conversions.",
    image: dulwich_1,
    link: "https://dulwich-plumber.vercel.app/",
    tags: ["Landing Page", "Conversion", "Mobile-First"],
  },
];

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Application Development",
    description:
      "Custom web apps that automate workflows, manage data, and scale with your business. From dashboards to SaaS platforms.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Business Website Development",
    description:
      "Professional, conversion-focused websites that establish credibility, attract customers, and generate leads.",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "API Development & Integration",
    description:
      "Robust APIs and third-party integrations that connect your systems, automate processes, and unlock new capabilities.",
  },
];

const testimonials = [
  {
    quote:
      "Ibrahim delivered a platform that transformed how we handle events. The system is reliable even under heavy load.",
    name: "Event Organizer",
    role: "Univibe Client",
  },
  {
    quote:
      "Our new website brings in enquiries we never had before. Professional, fast, and exactly what we needed.",
    name: "Business Owner",
    role: "Plumbing Services",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground text-xs font-mono uppercase tracking-wider mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-muted-foreground"
            >
              I build web applications that help businesses grow and operate
              efficiently.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Full-Stack Engineer who turns business problems into scalable
              digital solutions, from custom web apps and SaaS platforms to
              high-converting business websites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-border hover:bg-secondary hover:text-foreground"
              >
                <Link href="/contact">Let's Work Together</Link>
              </Button>
            </motion.div>

            {/* Tech as supporting tools */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Redis",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary/50 border border-border text-muted-foreground text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I help businesses solve real problems with well-built software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl border border-border bg-card/30 hover:border-muted-foreground/30 hover:bg-card/60 transition-all duration-300 group"
              >
                <div className="mb-6 p-3 bg-background w-fit rounded-lg border border-border group-hover:border-muted-foreground/30 transition-colors text-muted-foreground group-hover:text-foreground">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Real projects solving real problems for real businesses.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="hidden md:inline-flex text-muted-foreground hover:text-foreground"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border rounded-2xl bg-card/20 overflow-hidden hover:border-muted-foreground/20 transition-colors group"
              >
                <div
                  className={`p-8 md:p-12 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
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
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        The Problem
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        What I Built
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary">
                        The Impact
                      </span>
                      <p className="text-foreground text-sm mt-1 font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Live Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-background border-l border-border min-h-[350px] flex items-center justify-center p-6 md:p-10">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" className="border-border">
              <Link href="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-border bg-card/30"
              >
                <MessageSquareQuote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            I help businesses build reliable, scalable web solutions. Let's
            discuss how I can help you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Let's Work Together</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 border-border hover:bg-secondary"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
