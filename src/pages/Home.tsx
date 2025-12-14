import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "../components/FeatureCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../index.css";
const features = [
  {
    title: "AI Summaries",
    description:
      "We condense long articles into intelligent highlights so you understand the core story in seconds—without losing context.",
    iconPath:
      "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Z",
    svgViewBox: "0 0 256 256",
  },
  {
    title: "Personalized feed",
    description:
      "Follow topics, sources, and keywords. Your feed learns what you read and ranks the most relevant stories first.",
    iconPath:
      "M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z",
    svgViewBox: "0 0 256 256",
  },
  {
    title: "Real-time alerts",
    description:
      "Get instant updates as stories develop and the track evolving events without refreshing your page.",
    iconPath:
      "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
    svgViewBox: "0 0 256 256",
  },
];
export function Home() {
  const mainTextRef2 = useRef<HTMLHeadingElement | null>(null);
  const mainParaRef2 = useRef<HTMLParagraphElement | null>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const servicesContentRef = useRef<HTMLDivElement | null>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const element = mainTextRef2.current;
    const paraEl = mainParaRef2.current;
    const div1 = btnRef.current;
    const caseStudyRef = featuresSectionRef.current;
    if (!element) return;
    if (!paraEl) return;
    if (!div1) return;
    if (!caseStudyRef) return;
    if (!servicesRef.current || !servicesContentRef.current) return;
    
    const h2Text: string = element.textContent ?? "";
    const letters1: string[] = h2Text.split("");
    const halfLength: number = Math.floor(h2Text.length / 2);

    let cutter1: string = "";

    letters1.forEach((char: string, idx: number) => {
      if (idx >= halfLength) {
        cutter1 += `<span class="a">${char}</span>`;
      } else {
        cutter1 += `<span class="b">${char}</span>`;
      }
    });

    element.innerHTML = cutter1;

    gsap.from(element.querySelectorAll<HTMLSpanElement>("span.a"), {
      y: 50,
      delay: 1,
      duration: 0.5,
      stagger: -0.15,
      opacity: 0,
    });

    gsap.from(element.querySelectorAll<HTMLSpanElement>("span.b"), {
      y: 50,
      delay: 1,
      duration: 0.5,
      stagger: 0.15,
      opacity: 0,
    });
    const paraText: string = paraEl.textContent ?? "";
    const paraLetters: string[] = paraText.split("");

    let paraCutter = "";

    paraLetters.forEach((char: string) => {
      paraCutter += `<span>${char}</span>`;
    });

    paraEl.innerHTML = paraCutter;

    gsap.from(paraEl.querySelectorAll<HTMLSpanElement>("span"), {
      y: 30,
      delay: 1.6,
      duration: 0.6,
      stagger: 0.02,
      opacity: 0,
    });
    gsap
      .timeline({ delay: 4 })
      .fromTo(
        div1,
        { scale: 0 },
        {
          scale: 1.1,
          duration: 0.45,
          ease: "back.out(1.7)",
        }
      )
      .to(div1, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        scroller: "body",
        start: "top 110%",
        end: "bottom 85%",
        scrub: 0.8,
        // markers: true,
      },
    });

    // Headings
    tl2.from(servicesRef.current.querySelectorAll<HTMLElement>("h1, p"), {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });

    // Row 1
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim1"),
      { x: -200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards1"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim2"),
      { x: 200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards1"
    );

    // Row 2
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim3"),
      { x: -200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards2"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim4"),
      { x: 200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards2"
    );

    // Row 3  ✅ (THIS WAS SKIPPING)
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim5"),
      { x: -200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards3"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll<HTMLElement>(".anim6"),
      { x: 200, opacity: 0, duration: 2, ease: "power3.out" },
      "cards3"
    );
    // Removed tl5 animation - it was conflicting with the features section animation
    // The features section has its own dedicated animation below
  });

  // Separate useGSAP hook for features section to ensure it runs after features are rendered
  useGSAP(() => {
    const featuresSection = document.getElementById("features");
    const featureCardsContainer = featuresSectionRef.current;
    
    if (!featuresSection || !featureCardsContainer) return;
    
    // Wait for FeatureCard components to be rendered
    const setupFeaturesAnimation = () => {
      const featureCards = featureCardsContainer.querySelectorAll(".mainCard");
      
      if (featureCards.length === 0) {
        // Retry if cards aren't ready yet
        setTimeout(setupFeaturesAnimation, 50);
        return;
      }
      
      // Kill any existing ScrollTriggers for features section to prevent duplicates
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === featuresSection) {
          trigger.kill();
        }
      });
      
      // Set initial state immediately to prevent flash of unstyled content
      gsap.set(featureCards, {
        opacity: 0,
        rotate: 30,
        y: 50,
      });
      
      // Create the animation using fromTo for better control
      const animation = gsap.fromTo(
        featureCards,
        {
          opacity: 0,
          rotate: 30,
          yoyo:true,
          y: 50,
        },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresSection,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
            markers: false, // Set to true for debugging
          },
        }
      );
      
      // Refresh ScrollTrigger after creating the animation to ensure proper positioning
      ScrollTrigger.refresh();
      
      // Check if section is already in viewport and trigger animation if needed
      const checkInitialView = () => {
        const rect = featuresSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight * 0.8;
        
        // If section is already past the trigger point, play animation immediately
        if (rect.top < triggerPoint && rect.bottom > 0) {
          const scrollTrigger = animation.scrollTrigger;
          if (scrollTrigger && !scrollTrigger.isActive) {
            animation.play();
          }
        }
      };
      
      // Check immediately and after refresh
      checkInitialView();
      
      // Force a refresh after a short delay to catch any layout changes
      setTimeout(() => {
        ScrollTrigger.refresh();
        checkInitialView();
      }, 200);
    };
    
    // Use double RAF to ensure React has finished rendering
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setupFeaturesAnimation();
      });
    });
  }, { scope: featuresSectionRef, dependencies: [features] });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="h-screen relative py-24 md:py-40 flex items-center justify-center text-center text-white overflow-hidden bg-[url('../../../bgimage1.png')] bg-cover bg-center">
          <div className="relative z-10 container mx-auto px-4">
            <h1
              className="text-7xl md:text-9xl font-extrabold mb-4 text-gray-800"
              ref={mainTextRef2}>
              Flash News AI
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-900"
              ref={mainParaRef2}>
              Your real‑time, AI‑powered news feed. We summarize top stories,
              prioritize what matters to you, and keep you up to speed with
              instant updates.
            </p>
            <div className="flex justify-center items-center" ref={btnRef}>
              <Button
                size="lg"
                asChild
                className="bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-700 shadow-lg rounded-full">
                <Link to="/feed">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="py-20 md:py-28 bg-black overflow-x-hidden"
          ref={servicesRef}>
          <div className="container mx-auto px-4 w-[95%]">
            <div className="text-center max-w-3xl mx-auto mb-12 mt-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-neutral-100">
                About Flash News AI
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Flash News AI is built by a small team focused on clarity,
                speed, and trustworthy news summaries powered by artificial
                intelligence.
              </p>
            </div>
            <div
              ref={servicesContentRef}
              className="h-[80%] w-full px-14 py-2 flex flex-wrap justify-between mt-7 gap-13">
              <div className="anim1 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between mb-14 bg-white border-[#A6A6A6]">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-black px-2 py-1 rounded-[3px]">
                      Our Vision
                    </span>
                  </h1>
                  <p className="flex items-center gap-5 mt-5 bg-transparent text-xl font-bold text-black w-[90%]">
                    Delivering clear, meaningful news by eliminating noise and
                    information overload.
                  </p>
                </div>
                <img
                  src="../../../ourVision.png"
                  alt="Globe with connected nodes / abstract AI network"
                  className="h-full scale-125"
                />
              </div>
              <div className="anim2 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between mb-14 border-[#A6A6A6]">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-[#ffffff] px-2 py-1 rounded-[3px] text-black  ">
                      Real-Time
                    </span>
                    <br />
                    <span className="bg-[#ffffff] px-2 py-1 rounded-[3px] text-black">
                      Intelligence
                    </span>
                  </h1>

                  <p className="flex items-center gap-5 mt-5 bg-transparent text-xl font-bold text-white w-[90%]">
                    Continuously collecting and processing live news updates
                    from trusted sources.
                  </p>
                </div>
                <img
                  src="../../../realIntell.png"
                  alt="Live data stream / breaking news animation"
                  className="h-full scale-125"
                />
              </div>
              <div className="anim3 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between border-[#A6A6A6] mb-14">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-[#ffffff] px-2 py-1 rounded-[3px] text-black">
                      AI-Powered
                    </span>
                    <br />
                    <span className="bg-[#ffffff] px-2 py-1 rounded-[3px] text-black">
                      Summarization
                    </span>
                  </h1>
                  <p className="flex items-center gap-5 mt-5 bg-transparent text-xl font-bold text-white w-[90%]">
                    Transforming long articles into concise, accurate, and
                    easy-to-read summaries.
                  </p>
                </div>
                <img
                  src="../../../AISumm.png"
                  alt="AI-Powered Summarization"
                  className="h-full scale-125 invert mr-4"
                />
              </div>
              <div className="anim4 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between bg-white border-[#A6A6A6] mb-14">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-black px-2 py-1 rounded-[3px]">
                      Context-Aware
                    </span>
                    <br />
                    <span className="bg-black px-2 py-1 rounded-[3px]">
                      Articles
                    </span>
                  </h1>
                  <p className="flex items-center gap-5 mt-5 bg-transparent text-xl font-bold text-black w-[90%]">
                    Enhancing news with relevant background to provide deeper
                    understanding.
                  </p>
                </div>
                <img
                  src="../../../contextAware.png"
                  alt="Context Aware Articles"
                  className="h-full scale-125 rounded-full"
                />
              </div>
              <div className="anim5 h-[250px] bg-white w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between border-[#A6A6A6]">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-black px-2 py-1 rounded-[3px]">
                      User-Centric
                    </span>
                    <br />
                    <span className="bg-black px-2 py-1 rounded-[3px]">
                      Experience
                    </span>
                  </h1>
                  <p className="flex items-center gap-5 mt-5 bg-transparent text-xl text-black font-bold w-[90%]">
                    A fast, clean, and responsive interface designed for
                    effortless reading.
                  </p>
                </div>
                <img
                  src="../../../responsive.png"
                  alt="User-Centric Experience"
                  className="h-full scale-125"
                />
              </div>
              <div className="anim6 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between border-[#A6A6A6]">
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-2xl font-bold leading-tight">
                    <span className="bg-[#ffffff] text-black px-2 py-1 rounded-[3px]">
                      Privacy and
                    </span>
                    <br />
                    <span className="bg-[#ffffff] text-black px-2 py-1 rounded-[3px]">
                      Ethics
                    </span>
                  </h1>

                  <p className="flex items-center gap-5 mt-5 bg-transparent cursor-pointer text-xl font-bold text-white">
                    Ensuring secure , ethical , and <br /> privacy-focused news
                    consumption without tracking.
                  </p>
                </div>
                <img
                  src="../../../security.png"
                  alt="Privacy & Ethics"
                  className="h-full scale-125 invert mr-4"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="py-20 md:py-28 bg-neutral-900 h-screen">
          <div className="container mx-auto px-4 w-[85%]">
            <div className="text-center max-w-3xl mx-auto mt-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for fast, focused reading
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Flash News AI blends powerful summarization with a clean feed so
                you see more signal and less noise.
              </p>
            </div>
            <div
              ref={featuresSectionRef}
              className="flex justify-center items-center mt-[50px] space-x-8">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title} // Ensure key is unique
                  title={feature.title}
                  description={feature.description}
                  iconPath={feature.iconPath}
                  svgViewBox={feature.svgViewBox}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-4">
              Start reading in seconds
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              See your personalized feed and AI summaries—no setup required.
            </p>
            <Button size="lg" asChild>
              <Link to="/feed">View Feed</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}