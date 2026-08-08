import React, { useEffect, useRef, useState } from "react";
import { UserPlus, Code2, Trophy } from "lucide-react";

// Optional: A small custom hook for scroll animations
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Disconnect after first intersection to only animate once
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

const steps = [
  {
    number: "01",
    title: "Join The Challenge",
    description:
      "Register and start your 60-day coding journey with daily tasks.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Complete Daily Tasks",
    description: "Learn concepts, build projects, and submit your progress.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Build Your Developer Profile",
    description: "Grow your GitHub, LinkedIn, and portfolio.",
    icon: Trophy,
  },
];

const HowItWorks = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [timelineRef, isTimelineVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="how-it-works"
      className="bg-white dark:bg-[#111827] py-20 sm:py-32 relative overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-yellow-400 tracking-wide uppercase">
            Process
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How The Challenge Works
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Follow a simple process and build consistency one day at a time.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className="mx-auto mt-16 max-w-5xl lg:mt-24 relative"
        >
          {/* 
            Background connecting line.
            On Mobile: vertical line on the left.
            On Desktop: horizontal line across the top.
          */}
          <div className="absolute top-0 bottom-0 left-[2.25rem] w-0.5 bg-indigo-100 dark:bg-gray-800 sm:left-[3.25rem] lg:hidden transition-colors"></div>
          <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-0.5 bg-indigo-100 dark:bg-gray-800 max-w-[80%] mx-auto transition-colors"></div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-8 lg:justify-between relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative flex lg:flex-col lg:items-center lg:w-1/3 transition-all duration-700 ease-out ${
                    isTimelineVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Marker / Circle */}
                  <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-[#172033] border-4 border-indigo-50 dark:border-gray-900 shadow-sm ring-1 ring-indigo-200 dark:ring-gray-700 mt-2 lg:mt-0 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-yellow-400" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-6 flex-1 lg:ml-0 lg:mt-10 lg:text-center group">
                    <div className="bg-white dark:bg-[#172033] rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 dark:ring-[#273449] transition-all duration-500 hover:shadow-lg dark:shadow-none hover:-translate-y-1 hover:ring-indigo-100 dark:hover:border-yellow-400">
                      <span className="text-sm font-bold text-indigo-500 dark:text-yellow-400 mb-2 block">
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
