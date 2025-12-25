import { Mail, Github, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Build Something Scalable</h1>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              I'm currently open to contract work and full-time opportunities. 
              If you have a technical challenge that needs a senior engineer's touch, let's talk.
            </p>

            <div className="space-y-8">
              <ContactLink 
                href="mailto:qayyumibrahim.01@gmail.com" 
                icon={<Mail />} 
                label="qayyumibrahim.01@gmail.com"
                sub="Best way to reach me"
              />
              <ContactLink 
                href="https://www.linkedin.com/in/qayyum-ibrahim/" 
                icon={<Linkedin />} 
                label="LinkedIn Profile" 
                sub="Connect professionally"
              />
              <ContactLink 
                href="https://github.com/qayyum-ibrahim" 
                icon={<Github />} 
                label="GitHub Profile" 
                sub="View my code"
              />
            </div>
          </div>

          <div>
            <Card className="p-8 bg-zinc-900/30 border-zinc-800">
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name</label>
                    <Input placeholder="John Doe" className="bg-zinc-950 border-zinc-800 focus:border-blue-500" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email</label>
                    <Input type="email" placeholder="john@company.com" className="bg-zinc-950 border-zinc-800 focus:border-blue-500" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Subject</label>
                  <select className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
                    <option>Project Inquiry</option>
                    <option>Contract Work</option>
                    <option>Full-Time Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project and technical requirements..." 
                    className="min-h-[150px] bg-zinc-950 border-zinc-800 focus:border-blue-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base bg-white text-black hover:bg-zinc-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <div className="mt-8 flex gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Response in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>NDA Friendly</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ContactLink({ href, icon, label, sub }: { href: string, icon: any, label: string, sub: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-900/50 transition-colors group">
      <div className="p-3 bg-zinc-900 rounded-full text-zinc-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
        {icon}
      </div>
      <div>
        <div className="text-zinc-200 font-medium group-hover:text-white">{label}</div>
        <div className="text-zinc-500 text-sm">{sub}</div>
      </div>
    </a>
  );
}
