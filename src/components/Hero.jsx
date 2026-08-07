import React, { useEffect, useState } from "react";
import { Users, Flame } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  const [activeCell, setActiveCell] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCell(Math.floor(Math.random() * 35));
    }, 1800);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 pt-16 sm:pt-24 lg:pt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 xl:col-span-6 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600 shadow-sm transition-all hover:bg-indigo-100">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
              Trusted by 5,000+ aspiring developers across India
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl max-w-2xl balance-text leading-tight">
              Code. Commit. Post.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Build Consistency.
              </span>
            </h1>

            <p className="mt-6 ml-8 text-lg leading-8 text-gray-600 max-w-xl">
              Join <strong>ABTalks</strong> — a 60-day challenge designed for
              Indian college students. Complete daily coding tasks, crush your
              GitHub commit graph, and showcase your skills on LinkedIn. Build
              your portfolio one day at a time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="#join"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"
              >
                Start Your 60-Day Journey
              </Link>
              <Link
                to="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95 group"
              >
                See How It Works
                <svg
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-gray-200 pt-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      { i: 1, c: "bg-indigo-100" },
                      { i: 2, c: "bg-indigo-200" },
                      { i: 3, c: "bg-indigo-300" },
                      { i: 4, c: "bg-indigo-400" },
                    ].map((item) => (
                      <div
                        key={item.i}
                        className={`h-8 w-8 rounded-full border-2 border-slate-50 ${item.c} flex items-center justify-center overflow-hidden`}
                      >
                        <img
                          src={`https://ui-avatars.com/api/?name=Student+${item.i}&background=random&color=fff&size=32`}
                          alt="Student"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-xl font-bold text-gray-900 pl-2">
                    5000+
                  </span>
                </div>
                <span className="mt-1 text-sm font-medium text-gray-500">
                  Active Students
                </span>
              </div>

              <div className="hidden sm:block h-10 w-px bg-gray-200" />

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">60-Day</span>
                <span className="mt-1 text-sm font-medium text-gray-500">
                  Challenge
                </span>
              </div>

              <div className="hidden sm:block h-10 w-px bg-gray-200" />

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Daily</span>
                <span className="mt-1 text-sm font-medium text-gray-500">
                  GitHub Commits
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual / Illustration */}
          <div
            className="mt-16 lg:mt-0 lg:col-span-5 xl:col-span-6 relative z-10 w-full animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Decorative background circle */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-200 to-purple-200 opacity-40 blur-xl"></div>

              {/* Mockup Container */}
              <div className="relative rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-white/10 p-2 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-800">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs font-mono text-gray-500">
                    day-1-challenge.js
                  </div>
                </div>

                {/* IDE Content */}
                <div className="p-4 sm:p-6 font-mono text-sm">
                  <div className="flex text-gray-400">
                    <span className="w-6 text-gray-600 select-none">1</span>
                    <span className="text-purple-400">function</span>
                    <span className="text-blue-400 ml-1.5">completeDay1</span>
                    <span className="text-gray-300">() {"{"}</span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">2</span>
                    <span className="ml-4 text-purple-400">const</span>
                    <span className="text-yellow-200 ml-1.5">skills</span>
                    <span className="text-purple-400 ml-1.5">=</span>
                    <span className="text-gray-300 ml-1.5">{"["}</span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">3</span>
                    <span className="ml-8 text-green-300">'React'</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">4</span>
                    <span className="ml-8 text-green-300">'Tailwind CSS'</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">5</span>
                    <span className="ml-8 text-green-300">'Consistency'</span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">6</span>
                    <span className="ml-4">{"]"}</span>
                    <span className="text-gray-300">;</span>
                  </div>
                  <div className="flex text-gray-300 mt-2">
                    <span className="w-6 text-gray-600 select-none">7</span>
                    <span className="ml-4 text-gray-400">
                      // Push to GitHub & LinkedIn
                    </span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">8</span>

                    <span className="ml-4 text-blue-300">git</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-200">commit</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-green-300">
                      'feat: started ABTalks journey!'
                    </span>
                    <span className="text-gray-300">);</span>
                    <span className="ml-1 inline-block h-5 w-[2px] bg-white animate-cursor"></span>
                  </div>
                  <div className="flex text-gray-300">
                    <span className="w-6 text-gray-600 select-none">9</span>
                    <span className="text-gray-300">{"}"}</span>
                  </div>
                </div>

                {/* GitHub Contribution Graph Abstraction */}
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="rounded-lg bg-gray-800 p-3 sm:p-4 border border-gray-700">
                    <div className="text-xs text-gray-400 mb-2 font-sans font-medium flex justify-between">
                      <span>Commit Graph (Last 60 Days)</span>
                      <span className="text-green-400">ON FIRE 🔥</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 sm:gap-1.5">
                      {Array.from({ length: 36 }).map((_, i) => {
                        // Generate random green intensities for the mockup
                        const intensities = [
                          "bg-gray-700",
                          "bg-green-900",
                          "bg-green-700",
                          "bg-green-500",
                          "bg-green-400",
                        ];
                        // Towards the end (right side), make it thicker green to show progress
                        let index = 0;
                        if (i > 15) {
                          index = Math.floor(Math.random() * 4) + 1; // 1 to 4
                        } else {
                          index = Math.floor(Math.random() * 3); // 0 to 2
                        }
                        return (
                          <div
                            key={i}
                            className={`
                              aspect-square
                              rounded-sm
                              sm:rounded
                              ${intensities[index]}
                              cursor-pointer
                              transition-all
                              duration-500
                              hover:bg-green-300
                              ${
                                activeCell === i
                                  ? "scale-125 ring-2 ring-green-300 shadow-lg shadow-green-500/40"
                                  : ""
                              }
`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 - LinkedIn Badge */}
              <div
                className="absolute -bottom-6 -left-6 sm:-left-12 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5 animate-bounce-slow"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Post Shared!
                    </h3>
                    <p className="text-xs text-gray-500">+500 Impressions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade out to next section */}
      <div className="h-24 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
    </div>
  );
};

export default Hero;
