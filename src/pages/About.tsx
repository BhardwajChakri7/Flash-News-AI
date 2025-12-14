import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Flash News AI</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Flash News AI is a lightweight news reader that uses AI to summarize and prioritize
              stories in a fast, distraction‑free feed.
            </p>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Developers</h2>
              <ul className="list-disc pl-6 space-y-2">
              </ul>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mission</CardTitle>
                  <CardDescription>
                    Deliver the fastest way to understand the news by combining high‑quality
                    sources with AI summaries.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Values</CardTitle>
                  <CardDescription>
                    Clarity, speed, and trust. We prioritize accuracy and a clean reading
                    experience.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                  <CardDescription>
                    Questions or feedback? Reach out via the Contact link in the footer.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section> */}
        <section id="about" className="py-20 md:py-28 bg-black overflow-x-hidden">
          <div className="container mx-auto px-4 w-[95%]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-neutral-100 mt-10">About Flash News AI</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Flash News AI is built by a small team focused on clarity, speed, and trustworthy
                news summaries powered by artificial intelligence.
              </p>
            </div>
            <div
          className="h-[80%] w-full px-14 py-2 flex flex-wrap justify-between mt-7 gap-13">
          <div className="anim1 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 p-11 flex justify-between mb-14 bg-white border-[#A6A6A6]">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                <span className="bg-black px-2 py-1 rounded-[3px]">
                  Our Vision
                </span>
              </h1>
              <p className="flex items-center gap-5 mt-5 bg-transparent text-xl font-bold text-black w-[90%]">
                Delivering clear, meaningful news by eliminating noise and information overload.
              </p>
            </div>
            <img
              src="../../../ourVision.png"
              alt="Globe with connected nodes / abstract AI network"
              className="h-full scale-125"
            />
          </div>
          <div className="anim2 bg-black h-[250px] w-[48%] border-2 rounded-[30px] border-neutral-500 shrink-0 p-11 flex justify-between mb-14 border-[#A6A6A6]">
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
                Continuously collecting and processing live news updates from trusted sources.
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
                Transforming long articles into concise, accurate, and easy-to-read summaries.
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
                Enhancing news with relevant background to provide deeper understanding.
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
                A fast, clean, and responsive interface designed for effortless reading.
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
                Ensuring secure , ethical , and <br/> privacy-focused news consumption without tracking.
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
      </main>
      <Footer />
    </div>
  )
}

