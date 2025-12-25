import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/architecture", label: "Architecture" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-display font-bold tracking-tighter hover:text-zinc-300 transition-colors cursor-pointer">
            IBRAHIM<span className="text-zinc-500">.DEV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white cursor-pointer",
                  location === item.href
                    ? "text-white"
                    : "text-zinc-400"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-400">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950 border-zinc-800 p-0">
                <div className="flex flex-col h-full p-8 space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-display font-bold">Menu</span>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className={cn(
                          "text-2xl font-display font-medium transition-colors hover:text-white cursor-pointer",
                          location === item.href
                            ? "text-white"
                            : "text-zinc-500"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 relative">
        {children}
      </main>

      <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm font-mono">
            © {new Date().getFullYear()} Ibrahim Qayyum. Built with React & Vite.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/qayyum-ibrahim" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/qayyum-ibrahim/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:qayyumibrahim.01@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
