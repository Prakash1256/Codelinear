"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  DatabaseZap,
  Fingerprint,
  Menu,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: DatabaseZap,
    title: "Core Banking CB7",
    copy:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance."
  },
  {
    icon: Sparkles,
    title: "Digital Banking N7",
    copy:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
  },
  {
    icon: Fingerprint,
    title: "Open Banking",
    copy:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
  },
  {
    icon: Star,
    title: "Loan Origination System",
    tag: "NBFC",
    copy:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
  },
  {
    icon: Settings2,
    title: "Loan Management System",
    tag: "NBFC",
    copy:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
  }
];

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
];

const posts = [
  "How to transition from a traditional to a digital bank",
  "How to transition from a traditional to a digital bank",
  "How to transition from a traditional to a digital bank"
];

const footerLinks = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation"
    ]
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center"
    ]
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"]
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-ink">
      <Header />
      <Hero />
      <Solutions />
      <CoreBanking />
      <PaperlessCta compact />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-6 z-50 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex h-[52px] w-full max-w-[720px] items-center justify-between rounded-[11px] border border-white/5 bg-white/[0.14] px-3 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-4"
      >
        <a href="#" className="text-[26px] font-medium leading-none text-white">
          N7
        </a>
        <div className="hidden items-center gap-7 font-mono text-[10px] font-semibold uppercase text-white md:flex">
          <a className="flex items-center gap-1 transition-colors hover:text-cyan" href="#solutions">
            Solutions <ChevronDown className="h-3.5 w-3.5" />
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-cyan" href="#insights">
            Resources <ChevronDown className="h-3.5 w-3.5" />
          </a>
          <a className="transition-colors hover:text-cyan" href="#case-studies">
            About us
          </a>
        </div>
        <Button size="sm" variant="outline" className="hidden h-8 min-w-[162px] rounded-[6px] md:inline-flex">
          Request demo
        </Button>
        <button className="grid h-9 w-9 place-items-center rounded-md border border-white/30 text-white md:hidden" aria-label="Open menu">
          <Menu className="h-4 w-4" />
        </button>
      </motion.nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell relative grid min-h-[760px] grid-cols-1 items-center gap-12 pb-24 pt-40 lg:grid-cols-[0.96fr_1fr] lg:pt-28">
      <Reveal className="max-w-[640px]">
        <h1 className="text-[clamp(46px,4.95vw,68px)] font-medium leading-[1.12] tracking-[-0.04em] text-copy">
          The new foundation
          <br />
          of modern banking
        </h1>
        <p className="mt-7 max-w-[455px] text-[15px] leading-[1.45] text-muted">
          We drive innovation and growth, provide seamless customer experience and operational excellence
        </p>
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <Button>Request demo</Button>
          <Button variant="outline">Contact us</Button>
        </div>
        <div className="mt-28">
          <p className="text-[15px] font-medium text-muted">Trusted By:</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4 text-[13px] font-semibold text-[#60788d]">
            {["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"].map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-[#60788d]/45">
                  {index === 2 ? <Zap className="h-3 w-3 fill-current" /> : <Sparkles className="h-3 w-3" />}
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12} className="relative mx-auto h-[390px] w-full max-w-[620px] lg:ml-auto">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#005ee2_0%,rgba(0,94,226,0.38)_24%,transparent_62%)] blur-xl" />
        <Image
          src="/image/image.png"
          alt="N7 mobile banking interface"
          width={599}
          height={320}
          priority
          className="absolute left-1/2 top-1/2 w-[min(100%,599px)] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_38px_88px_rgba(0,0,0,0.45)]"
        />
      </Reveal>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section-shell grid gap-16 py-28 lg:grid-cols-[0.82fr_1.18fr]">
      <Reveal>
        <h2 className="max-w-[430px] text-[clamp(34px,3vw,44px)] font-medium leading-[1.13] tracking-[-0.035em]">
          All of our solutions are tailor-made to your needs
        </h2>
        <Button variant="outline" className="mt-14">
          Request demo
        </Button>
      </Reveal>
      <div className="grid gap-x-28 gap-y-24 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <Reveal delay={index * 0.04} key={solution.title} className={cn(index === 4 && "md:col-span-1")}>
            <solution.icon className="mb-7 h-11 w-11 text-white/65" strokeWidth={1.15} />
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-[22px] font-medium tracking-[-0.025em]">{solution.title}</h3>
              {solution.tag ? <span className="mono-label text-[12px] text-muted">{solution.tag}</span> : null}
            </div>
            <p className="mt-8 max-w-[315px] text-[15px] leading-[1.37] text-muted">{solution.copy}</p>
            <a href="#" className="mono-label mt-8 inline-flex items-center gap-2 border-b border-cyan text-[12px] text-cyan">
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CoreBanking() {
  return (
    <section className="relative overflow-hidden py-32">
      <Image
        src="/image/image copy 3.png"
        alt=""
        width={1029}
        height={383}
        className="pointer-events-none absolute -left-24 top-40 w-[980px] max-w-none opacity-55"
      />
      <div className="section-shell relative grid gap-x-20 gap-y-40 lg:grid-cols-2">
        <Reveal className="min-h-[470px]">
          <h2 className="max-w-[610px] text-[clamp(42px,4.15vw,58px)] font-medium leading-[1.07] tracking-[-0.045em]">
            A complete cloud-based core banking.
          </h2>
          <p className="mt-7 max-w-[350px] text-[15px] leading-[1.45] text-muted">
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="mt-9 flex flex-col items-start gap-5">
            <Button>Request demo</Button>
            <a className="mono-label inline-flex items-center gap-2 border-b border-cyan text-[12px] text-cyan" href="#">
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative min-h-[470px]">
          <DashboardFrame src="/image/image copy.png" width={503} height={409} className="absolute left-12 top-0 w-[720px] max-w-none" />
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-[460px] lg:-ml-48">
          <DashboardFrame src="/image/image copy 2.png" width={483} height={409} muted className="absolute right-0 top-0 w-[670px] max-w-none" />
        </Reveal>
        <Reveal delay={0.14} className="flex items-center">
          <div className="max-w-[640px]">
            <h3 className="max-w-[620px] text-[clamp(28px,2.35vw,36px)] font-medium leading-[1.16] tracking-[-0.035em]">
              Run a more efficient, flexible,and digitally connected corebanking system
            </h3>
            <p className="mt-12 text-[14px] font-semibold text-copy">What you will get:</p>
            <div className="mt-5 grid gap-x-12 gap-y-4 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-[14px] leading-[1.28] text-muted">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue text-white">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardFrame({
  className,
  muted = false,
  src,
  width,
  height
}: {
  className?: string;
  muted?: boolean;
  src: string;
  width: number;
  height: number;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[14px] border-2 border-cyan bg-[#c9d0d0] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.4)]", className, muted && "opacity-80")}>
      <Image
        src={src}
        alt="Core banking dashboard"
        width={width}
        height={height}
        className="h-auto w-full rounded-[6px]"
      />
    </div>
  );
}

function PaperlessCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={cn("section-shell", compact ? "py-24" : "py-28")}>
      <CtaPanel />
    </section>
  );
}

function CtaPanel() {
  return (
    <Reveal className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(105deg,rgba(8,54,64,0.92),rgba(0,18,20,0.92))] px-8 py-20 shadow-[0_32px_90px_rgba(0,0,0,0.35)] md:px-16">
      <Image
        src="/image/image copy 3.png"
        alt=""
        width={1029}
        height={383}
        className="pointer-events-none absolute -right-44 -top-24 w-[760px] max-w-none opacity-45"
      />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="max-w-[680px] text-[clamp(34px,3.6vw,54px)] font-medium leading-[1.12] tracking-[-0.045em]">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="mt-8 max-w-[570px] text-[14px] leading-[1.4] text-muted">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="flex flex-col justify-start gap-6 sm:flex-row lg:justify-end">
          <Button variant="outline">Contact us</Button>
          <Button>Request demo</Button>
        </div>
      </div>
    </Reveal>
  );
}

function DigitalBanking() {
  return (
    <section className="relative overflow-hidden bg-[#eaf8ff] text-[#001214]">
      <div className="flex h-[74px] w-full items-center overflow-hidden bg-white">
        <div className="flex min-w-max items-center gap-6 font-sans text-[42px] font-bold leading-none text-[#001214]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="text-[#0d7df2]">N7</span>
              <Star className="h-12 w-12 text-black/30" strokeWidth={1.1} />
              <span>Say</span>
              <span>👋</span>
              <span>to the new way of banking</span>
              <Star className="h-12 w-12 text-black/30" strokeWidth={1.1} />
              <span className="text-[#0d7df2]">CB7</span>
              <Star className="h-12 w-12 text-black/30" strokeWidth={1.1} />
              <span>Say</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -left-52 top-[540px] h-[980px] w-[980px] rounded-full border border-sky-200" />
      <Image
        src="/image/image copy 12.png"
        alt=""
        width={680}
        height={396}
        className="pointer-events-none absolute left-[31%] top-[150px] w-[680px] max-w-none opacity-55"
      />
      <Image
        src="/image/image copy 12.png"
        alt=""
        width={680}
        height={396}
        className="pointer-events-none absolute -right-24 bottom-[210px] w-[680px] max-w-none opacity-45"
      />
      <div className="section-shell relative">
        <div className="grid min-h-[1830px] grid-cols-1 gap-y-20 py-32 lg:grid-cols-3 lg:grid-rows-[520px_520px_520px_auto]">
          <Reveal className="lg:pt-10">
            <h2 className="max-w-[300px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em]">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-6 max-w-[320px] text-[12px] leading-[1.55] text-black/58">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <Button size="sm" className="mt-8 h-11 min-w-[150px]">Request demo</Button>
            <a className="mono-label mt-5 inline-flex items-center gap-2 border-b border-cyan text-[11px] text-cyan" href="#">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
          <PhoneMock src="/image/image copy 14.png" alt="N7 banking balance mobile screen" className="mx-auto lg:-mt-8" />
          <FeatureText className="lg:pt-20" title="Fully compliant with regulatory requirement" items={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]} />
          <FeatureText className="lg:col-start-2 lg:row-start-2 lg:self-center" title="No legacy IT systems" items={["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"]} />
          <PhoneMock src="/image/image copy 15.png" alt="N7 banking analytics mobile screen" className="mx-auto lg:col-start-3 lg:row-start-2 lg:self-start" />
          <PhoneMock src="/image/image copy 16.png" alt="N7 banking profile mobile screen" className="mx-auto lg:col-start-2 lg:row-start-3 lg:self-start" phoneClassName="w-[240px]" />
          <FeatureText className="lg:col-start-3 lg:row-start-3 lg:self-start lg:pt-20" title="No traditional branches" items={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adaptable and Scalable"]} />
          <div className="lg:col-span-3 lg:row-start-4">
            <CtaPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureText({ title, items, className }: { title: string; items: string[]; className?: string }) {
  return (
    <Reveal className={cn("max-w-[310px] self-center", className)}>
      <h3 className="text-[13px] font-bold">{title}</h3>
      <p className="mt-5 text-[11px] leading-[1.45] text-black/58">
        The experience of risk management within institutions is enhanced by our management framework that is fully integrated to work with digital banks operational-risk protocols and processes.
      </p>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <p key={item} className="flex items-start gap-3 text-[11px] text-black/70">
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue text-white">
              <ShieldCheck className="h-3 w-3" />
            </span>
            {item}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

function PhoneMock({
  className,
  phoneClassName,
  src,
  alt
}: {
  className?: string;
  phoneClassName?: string;
  src: string;
  alt: string;
}) {
  return (
    <Reveal className={cn("drop-shadow-[0_22px_48px_rgba(0,0,0,0.22)]", className)}>
      <Image src={src} alt={alt} width={269} height={543} className={cn("h-auto w-[269px]", phoneClassName)} />
    </Reveal>
  );
}

function Insights() {
  return (
    <section id="insights" className="section-shell grid gap-14 py-28 lg:grid-cols-[0.86fr_1.14fr]">
      <Reveal className="pt-2">
        <h2 className="max-w-[520px] text-[clamp(38px,3.5vw,54px)] font-medium leading-[1.08] tracking-[-0.045em]">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <Button variant="outline" className="mt-20 h-[64px] min-w-[240px] text-base">
          Insights
        </Button>
      </Reveal>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
        <InsightCard featured className="md:col-span-2" />
        {posts.slice(1).map((post, index) => (
          <InsightCard key={post + index} title={post} />
        ))}
        <a className="mono-label ml-auto inline-flex items-center gap-2 border-b border-cyan text-[16px] text-cyan md:col-span-2 md:-mt-1" href="#">
          Read all insights <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function InsightCard({ className, featured = false, title = posts[0] }: { className?: string; featured?: boolean; title?: string }) {
  return (
    <Reveal
      className={cn(
        "rounded-[18px] bg-panel/80 shadow-[0_30px_80px_rgba(0,0,0,0.22)]",
        featured
          ? "grid min-h-[328px] items-center gap-10 p-7 md:grid-cols-[330px_1fr]"
          : "min-h-[328px] p-8",
        className
      )}
    >
      {featured ? <PatternTile className="min-h-[280px]" imageClassName="max-w-[295px]" /> : null}
      <div className={cn("flex h-full flex-col justify-between", featured ? "min-h-[264px] py-1" : "min-h-[264px]")}>
        <div>
          <p className="mono-label text-[12px] text-cyan">Getting started</p>
          <h3 className={cn("mt-6 font-medium leading-[1.12] tracking-[-0.035em]", featured ? "max-w-[380px] text-[clamp(28px,2.15vw,34px)]" : "text-[30px]")}>
            {title}
          </h3>
          <p className="mt-6 text-[15px] text-[#5ea7bd]">David Grohl <span className="ml-5">17/08/24</span></p>
        </div>
        <Button variant="outline" className="h-[52px] w-full text-muted">
          Read more
        </Button>
      </div>
    </Reveal>
  );
}

function PatternTile({ className, imageClassName }: { className?: string; imageClassName?: string }) {
  return (
    <div className={cn("grid min-h-[260px] place-items-center rounded-[10px] bg-[#071b49] p-8", className)}>
      <Image
        src="/image/image copy 11.png"
        alt=""
        width={295}
        height={267}
        className={cn("h-auto w-full max-w-[360px]", imageClassName)}
      />
    </div>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell py-24">
      <Reveal>
        <h2 className="text-center text-[clamp(42px,4.2vw,56px)] font-medium leading-none tracking-[-0.05em]">Our Case Studies</h2>
      </Reveal>
      <Reveal delay={0.08} className="relative mt-24">
        <div className="absolute left-8 right-8 top-10 h-[430px] rounded-[22px] bg-panel/45 opacity-50 blur-[1px]" />
        <div className="relative mx-auto grid max-w-[1020px] gap-12 rounded-[18px] bg-panel/90 p-8 shadow-[0_36px_110px_rgba(0,0,0,0.32)] md:grid-cols-[0.82fr_0.9fr]">
          <PatternTile />
          <div className="flex min-h-[350px] flex-col justify-between py-8">
            <div>
              <p className="mono-label text-[12px] text-cyan">Getting started</p>
              <h3 className="mt-8 max-w-[500px] text-[clamp(34px,3.25vw,48px)] font-medium leading-[1.12] tracking-[-0.045em]">
                How we help brand reach out to more people
              </h3>
              <p className="mt-10 flex items-center gap-3 text-[21px] font-bold text-[#7f98a9]">
                <Zap className="h-8 w-8 fill-current" /> Zoomerr
              </p>
            </div>
            <Button variant="outline" className="h-[52px] w-full text-muted">
              Read more
            </Button>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8">
          <button className="grid h-11 w-11 place-items-center rounded-full border-2 border-cyan text-cyan" aria-label="Previous case study">
            <ArrowRight className="h-6 w-6 rotate-180" />
          </button>
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full border border-cyan/80" />
            <span className="h-4 w-12 rounded-full bg-cyan/45" />
            <span className="h-4 w-4 rounded-full border border-cyan/80" />
            <span className="h-4 w-4 rounded-full border border-cyan/80" />
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-full border-2 border-cyan text-cyan" aria-label="Next case study">
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        <a className="mono-label mt-[-36px] hidden items-center gap-2 border-b border-cyan text-[16px] text-cyan md:ml-auto md:flex md:w-max" href="#">
          View all <ArrowRight className="h-5 w-5" />
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="section-shell">
        <FooterCta />
        <div className="mt-28 grid gap-16 lg:grid-cols-[0.82fr_1.45fr]">
          <Image
            src="/image/image copy 8.png"
            alt="N7"
            width={440}
            height={233}
            className="h-auto w-full max-w-[440px] self-start"
          />
          <div className="grid gap-12 md:grid-cols-3">
            <Address city="London" lines={["Linktia Infosystems Ltd - CB7,", "26 Main Road Sundridge,TN14 6EP,", "England, United Kingdom."]} />
            <Address city="Dubai" lines={["Linktia Infosystems Ltd -", "CB7,Jumeirah Business, Center 5", "Cluster W, Jumeirah Lakes Towers,", "Dubai, United Arab Emirates"]} />
            <Address city="London" lines={["Linktia Infosystems Ltd -", "CB7,Nirmal, Anand Nagar,", "Suncity Road, Pune,", "Maharashtra, 411041, India"]} />
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-[17px] font-bold">{group.title}</h3>
                <div className="space-y-3">
                  {group.links.map((link) => (
                    <a key={link} className="flex max-w-[220px] items-center justify-between gap-5 text-[16px] leading-[1.2] text-muted transition-colors hover:text-cyan" href="#">
                      {link}
                      <ArrowRight className="h-4 w-4 shrink-0 text-cyan" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-20 max-w-[790px] text-[13px] leading-[1.35] text-muted/45">
          Copyright © 2022 by Linktia Infosystems Limited - [CB7 and N7 as Commercial Brand] - [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}

function FooterCta() {
  return (
    <Reveal className="grid items-start gap-12 lg:grid-cols-[0.96fr_1fr]">
      <div>
        <h2 className="max-w-[610px] text-[clamp(38px,3.8vw,56px)] font-medium leading-[1.12] tracking-[-0.045em]">
          Take the full advantage of going paper-less now.
        </h2>
        <p className="mt-8 max-w-[560px] text-[14px] leading-[1.45] text-muted">
          CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
        </p>
      </div>
      <div className="flex flex-col justify-start gap-6 pt-12 sm:flex-row lg:justify-end">
        <Button variant="outline">Contact us</Button>
        <Button>Request demo</Button>
      </div>
    </Reveal>
  );
}

function Address({ city, lines }: { city: string; lines: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-[17px] font-medium text-copy">{city}</h3>
      <p className="text-[16px] leading-[1.3] text-muted">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
