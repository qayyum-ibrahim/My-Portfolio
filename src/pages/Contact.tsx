import { Mail, Github, Linkedin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Something Together
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a project idea, need a reliable developer, or want to discuss
            how technology can solve a business problem? I'd love to hear from
            you.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-6 mb-20">
          <ContactLink
            href="https://wa.me/+2347026010646"
            icon={<Phone className="w-5 h-5" />}
            label="WhatsApp"
            sub="Fastest way to reach me"
          />
          <ContactLink
            href="mailto:qayyumibrahim.01@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="qayyumibrahim.01@gmail.com"
            sub="For project inquiries"
          />
          <ContactLink
            href="https://www.linkedin.com/in/qayyum-ibrahim/"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn Profile"
            sub="Connect professionally"
          />
          <ContactLink
            href="https://github.com/qayyum-ibrahim"
            icon={<Github className="w-5 h-5" />}
            label="GitHub Profile"
            sub="View my code"
          />
        </div>

        {/* Closing CTA */}
        <div className="max-w-2xl mx-auto text-center border-t border-border pt-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to bring your idea to life?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Whether you need a web app, a business website, or an API
            integration, I build reliable solutions that deliver results.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://wa.me/+2347026010646"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors group"
    >
      <div className="p-3 bg-secondary rounded-full text-muted-foreground group-hover:text-foreground transition-all">
        {icon}
      </div>
      <div>
        <div className="text-foreground font-medium group-hover:text-foreground">
          {label}
        </div>
        <div className="text-muted-foreground text-sm">{sub}</div>
      </div>
    </a>
  );
}
