import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Bot, 
  BrainCircuit, 
  ChevronRight, 
  Cpu, 
  LineChart, 
  Menu, 
  MessageSquare, 
  Network, 
  ShieldCheck, 
  X,
  ArrowRight,
  BarChart3,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/aragon-logo.png" alt="Aragon AI Logo" className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" />
          <span className="font-bold text-xl tracking-tight">Aragon <span className="text-primary">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Platform</a>
          <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <a href="#company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Company</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
          <Button className="rounded-full px-6">Book Demo</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl md:hidden">
          <a href="#platform" className="text-base font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Platform</a>
          <a href="#solutions" className="text-base font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#company" className="text-base font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Company</a>
          <div className="h-px bg-border my-2" />
          <Link href="/login" className="text-base font-medium p-2 hover:bg-muted rounded-md">Sign In</Link>
          <Button className="w-full mt-2">Book Demo</Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-chart-2/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Simple AI tools that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">save you hours every week.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We build custom AI tools for small businesses to automate repetitive work — so you and your team can focus on what actually matters.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-8 text-base rounded-full w-full sm:w-auto shadow-lg shadow-primary/25">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                Book a Free Call
              </Button>
            </motion.div>
            
          </motion.div>
          
          <motion.div 
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />
              <img 
                src="/hero-new.png" 
                alt="Business owner using AI tools" 
                className="w-full h-auto object-cover object-center aspect-square md:aspect-[4/3] lg:aspect-square"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-6 left-6 bg-background/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium">Tasks automated</span>
                </div>
                <div className="text-2xl font-bold">14 hrs</div>
                <div className="text-xs text-muted-foreground">saved this week</div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const pains = [
    "Answering the same emails every day",
    "Manually chasing unpaid invoices",
    "Re-entering data between spreadsheets and apps",
    "Writing the same reports every week",
    "Following up with leads that went cold",
    "Juggling multiple software systems that don't work with each other.",
  ];

  return (
    <section className="py-24 md:py-32 bg-card border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: the problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Sound familiar?</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              You're too busy running the business to stop and set anything up.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every day you mean to find a better way. But between the calls, the customers, the fires to put out — there's never a spare hour to figure out where AI even fits.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Meanwhile, the world isn't waiting. Competitors are already automating the work that's eating your time — and the gap is growing every month.
            </p>
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
              <p className="text-base font-semibold text-foreground mb-4">Right now, you're probably still doing this manually:</p>
              <ul className="space-y-3">
                {pains.map((pain, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-destructive/15 text-destructive flex items-center justify-center shrink-0 text-xs font-bold">✕</span>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: the shift */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            <div className="rounded-2xl border border-border/60 bg-background shadow-xl p-10 space-y-8">
              <div>
                <p className="text-4xl font-extrabold text-primary mb-2">That changes now.</p>
                <p className="text-muted-foreground text-lg">We do the setup. You see the results.</p>
              </div>
              <div className="h-px bg-border" />
              <p className="text-foreground text-lg leading-relaxed">
                You don't need to become an AI expert. You don't need to read documentation, watch tutorials, or block off a weekend to figure it out.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                <span className="font-semibold text-primary">Aragon AI handles all of that.</span> We sit with you, learn your business, and build the automation — so you can keep running things while we quietly eliminate the busywork behind the scenes.
              </p>
              <Button size="lg" className="rounded-full px-8 h-13 text-base shadow-lg shadow-primary/25 w-full sm:w-auto">
                Book a Free 20-Minute Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      tag: "Service 01",
      title: "App & System Creation",
      description: "Got a process that's held together with spreadsheets, sticky notes, and good intentions? We build you a proper tool for it — a clean, simple app that your team can actually use, built around how you already work.",
      icon: Cpu,
      image: "/feature-apps.png",
      bullets: [
        "Custom internal tools and client-facing apps.",
        "Replaces clunky manual systems with something that just works.",
        "No off-the-shelf software that almost fits — built exactly for you."
      ]
    },
    {
      tag: "Service 02",
      title: "Workflow Automation",
      description: "We map and automate the repetitive processes that slow your business down — from handling financial data to generating reports — so your team can focus on higher-value work.",
      icon: Zap,
      image: "/feature-tasks.png",
      bullets: [
        "Connect your existing systems to create a seamless flow of financial and operational data across your business.",
        "Eliminate manual entry, duplicate work, and costly errors in reporting and administration.",
        "Streamline operational workflows to reduce labour costs and ease administrative burden.",
        "Automate financial reporting and data processing with accuracy and consistency."
      ]
    },
    {
      tag: "Service 03",
      title: "Personalised AI Systems",
      description: "Beyond automation, we build AI that thinks alongside your business. From intelligent assistants trained on your products and policies, to smart recommendation engines — tailored AI built specifically for how you operate.",
      icon: BrainCircuit,
      image: "/feature-custom.png",
      bullets: [
        "AI trained on your business knowledge and tone of voice.",
        "Customer-facing chatbots that actually know your products.",
        "Internal assistants that help staff find answers instantly."
      ]
    }
  ];

  return (
    <section id="platform" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Three ways we make your business smarter.</h2>
          <p className="text-lg text-muted-foreground">
            Every engagement starts with understanding your business. Then we build exactly what's needed — nothing more, nothing less.
          </p>
        </div>

        <div className="space-y-28">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 -z-10"></div>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-card">
                  <img src={feature.image} alt={feature.title} className="w-full h-auto aspect-video object-cover" />
                </div>
              </div>
              
              <div className="flex-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">{feature.tag}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.bullets.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      <span className="text-foreground font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridFeatures() {
  const items = [
    { icon: Zap, title: "Fast to Build, Fast to Launch", desc: "We move quickly. Most tools are scoped, built, and deployed within a few weeks — not months." },
    { icon: Bot, title: "Works With Your Existing Tools", desc: "Your email, spreadsheets, CRM, or scheduling software — we connect AI to whatever you're already using." },
    { icon: MessageSquare, title: "Plain English, No Jargon", desc: "You don't need to understand AI to use it. We handle the technical side so you don't have to." },
    { icon: ShieldCheck, title: "Reliable and Secure", desc: "Your business data stays private. We build responsibly and never cut corners on how your information is handled." },
    { icon: Cpu, title: "Built Around Your Business", desc: "We take the time to understand your business and your workflows so your systems naturally integrate and work together." },
    { icon: BarChart3, title: "You'll Actually See the Impact", desc: "We measure what gets automated and report back on time saved, so you know the investment is working." },
  ];

  return (
    <section id="solutions" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What makes us different</h2>
          <p className="text-muted-foreground text-lg">We don't just build things and disappear. We work with you until it's running, and we stay close after that.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="company" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground">
            Aragon AI is a division of Aragon Accounting Corp — bringing together deep financial expertise and cutting-edge AI to serve small and medium-sized businesses.
          </p>
        </div>

        {/* Parent company card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">A Branch of</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Aragon Accounting Corp</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aragon Accounting Corp specialises in helping small and medium-sized business owners navigate their tax and financial needs with confidence. Aragon AI was born from that foundation — combining expert financial knowledge with the power of AI to deliver smarter, faster, and more personalised support to the businesses we work with every day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "hsl(200, 72%, 48%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] rounded-full blur-[120px] -z-10" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Ready to win back hours every week?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Book a free call and we'll walk through exactly what could be automated in your business — no pressure, no jargon, just an honest conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base rounded-full w-full sm:w-auto bg-white hover:bg-white/90" style={{ color: "hsl(200, 72%, 38%)" }}>
              Book a Free Call
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full w-full sm:w-auto bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/aragon-logo.png" alt="Aragon AI Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-xl tracking-tight">Aragon <span className="text-primary">AI</span></span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building intelligent AI tools for modern businesses. Aragon AI makes powerful automation accessible, secure, and highly effective.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              {/* Placeholder for social icons */}
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:text-foreground hover:border-foreground transition-colors cursor-pointer">X</div>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:text-foreground hover:border-foreground transition-colors cursor-pointer">in</div>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:text-foreground hover:border-foreground transition-colors cursor-pointer">Gh</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Agents</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Workflows</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Processing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aragon AI. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <GridFeatures />
        <Company />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
