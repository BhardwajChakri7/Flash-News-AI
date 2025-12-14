import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "AI Summaries",
    desc: "Concise highlights for every article—understand the story at a glance and decide what to read in full.",
  },
  {
    title: "Personalized Feed",
    desc: "Follow topics and sources you care about. The feed learns your preferences and surfaces the most relevant stories.",
  },
  {
    title: "Real-time Alerts",
    desc: "Breaking updates appear instantly as stories evolve—no refresh required.",
  },
  {
    title: "Source Controls",
    desc: "Tune your feed by source, region, and language to match your interests.",
  },
  {
    title: "Saved Articles",
    desc: "Bookmark must-reads and come back anytime—your list syncs across sessions.",
  },
  {
    title: "Clean Reading",
    desc: "A distraction-free layout with dark mode for comfortable reading day and night.",
  },
];

export function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <section className="py-16 md:py-24 overflow-hidden w-[85%]">
          <div className="container mx-auto px-4 mt-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Features
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Everything you need to scan headlines quickly, dive deeper when needed,
              and stay current without the noise.
            </p>

            {/* DRAGGABLE GRID */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  drag
                  dragElastic={0.5}
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  whileDrag={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 3 : -3,
                    cursor: "grabbing",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <Card className="h-full backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
