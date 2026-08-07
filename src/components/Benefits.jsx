import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Briefcase, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

const benefitsData = [
  {
    title: "Build in Public",
    description:
      "Daily GitHub commits and LinkedIn posts create a visible portfolio.",
    icon: FaGithub,
    colorFrom: "from-indigo-500",
    colorTo: "to-blue-500",
  },
  {
    title: "Stay Consistent",
    description: "Track your coding streak and develop long-term consistency.",
    icon: TrendingUp,
    colorFrom: "from-purple-500",
    colorTo: "to-pink-500",
  },
  {
    title: "Impress Recruiters",
    description: "Showcase real projects instead of only certificates.",
    icon: Briefcase,
    colorFrom: "from-blue-500",
    colorTo: "to-cyan-500",
  },
  {
    title: "Community Driven",
    description: "Learn alongside thousands of motivated students.",
    icon: Users,
    colorFrom: "from-orange-400",
    colorTo: "to-red-500",
  },
];

const Benefits = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Soft background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50"></div>

      {/* Small floating decorative elements */}
      <div className="absolute top-20 left-10 h-6 w-6 rounded-full bg-purple-200/50 blur-sm animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 h-10 w-10 rounded-full bg-indigo-200/50 blur-md animate-pulse"></div>
      <div className="absolute top-1/2 left-3/4 h-8 w-8 rounded-md bg-blue-100/50 blur-sm rotate-12"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Why Choose ABTalks?
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Level up your career in 60 days.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Why should you spend 60 days on ABTalks? We turn isolated learning
            into a public proof of work that gets you hired.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div ref={gridRef} className="mx-auto mt-16 max-w-7xl">
          {/* Responsive grid: 2x2 on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`group relative rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-indigo-100 ${
                    isGridVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.colorFrom} ${benefit.colorTo} shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-transparent to-indigo-50/0 opacity-0 transition-opacity group-hover:to-indigo-50/50"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
