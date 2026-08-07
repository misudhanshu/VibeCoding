import React from "react";
import { Link } from "react-router";

const FinalCTA = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 px-6 py-20 shadow-2xl sm:px-16 sm:py-24 lg:px-24">
          {/* Subtle Background Glow / Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-600/20"></div>
          <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl mix-blend-screen opacity-50"></div>
          <div className="absolute top-1/2 right-0 h-48 w-48 -translate-y-1/2 translate-x-1/3 rounded-full bg-purple-500/30 blur-3xl mix-blend-screen opacity-50"></div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            {/* Visual Connection back to Hero Theme */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              Code. Commit. Post. Build Consistency.
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              Your Next 60 Days Can Change Everything.
            </h2>

            <p className="text-lg leading-8 text-gray-300 mb-10 mx-auto max-w-xl">
              Stop waiting to feel ready. Start building, stay consistent, and
              make your progress visible.
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              {/* Uplifting Button Interaction */}
              <Link
                to="#join"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-10 py-4 text-base font-bold text-gray-900 shadow-xl shadow-indigo-600/20 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 active:translate-y-0"
              >
                Start the Challenge
              </Link>

              <span className="text-sm font-medium text-gray-400">
                60 days. One commit at a time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
