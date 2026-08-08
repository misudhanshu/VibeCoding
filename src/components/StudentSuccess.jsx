import React, { useEffect, useRef, useState } from "react";
import { Star, TrendingUp } from "lucide-react";

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

const stats = [
  { label: "Students", value: "5,000+", icon: UsersIcon },
  { label: "of Building", value: "60 Days", icon: CalendarIcon },
  { label: "Contributions", value: "100,000+", icon: CommitIcon },
];

function UsersIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
function CalendarIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
function CommitIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v8l9-11h-7z"
      />
    </svg>
  );
}

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "3rd Year CS Student",
    text: "I used to code a lot but never consistently. ABTalks changed that entirely. For the first time, I have an uninterrupted coding streak, and the daily tasks kept me focused.",
    days: 45,
    streak: [0, 1, 2, 3, 2, 4, 3, 4, 4, 3, 4, 4, 4],
    avatarName: "RS",
    avatarClasses: "from-indigo-100 to-indigo-200 text-indigo-800",
  },
  {
    name: "Anjali Verma",
    role: "Final Year Student",
    text: "Building in public felt intimidating at first. Sharing my daily progress on LinkedIn not only built my confidence but also connected me with amazing developers from across India.",
    days: 60,
    streak: [1, 2, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    avatarName: "AV",
    avatarClasses: "from-green-100 to-green-200 text-green-800",
  },
  {
    name: "Siddharth Nair",
    role: "B.Tech IT, 2nd Year",
    text: "Instead of just watching tutorials, I finally built practical micro-projects. My GitHub looks incredibly active now, which gives me so much confidence heading into placements.",
    days: 32,
    streak: [0, 0, 1, 2, 1, 3, 2, 4, 3, 3, 2, 4, 4],
    avatarName: "SN",
    avatarClasses: "from-blue-100 to-blue-200 text-blue-800",
  },
];

const StudentSuccess = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [statsRef, isStatsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="testimonials"
      className="bg-white dark:bg-[#0B1020] py-24 sm:py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30 select-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            className="text-indigo-100 dark:text-gray-800"
            strokeWidth="4"
            strokeDasharray="6 6"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="currentColor"
            className="text-indigo-200 dark:text-gray-700"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-yellow-400 tracking-wide uppercase">
            Student Success
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built by Students. Proven by Consistency.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-slate-300 max-w-xl mx-auto">
            Students are using ABTalks to turn daily coding practice into a
            visible proof of work.
          </p>
        </div>

        {/* Statistics Row */}
        <div
          ref={statsRef}
          className={`mt-16 mx-auto max-w-5xl rounded-3xl bg-indigo-600 dark:bg-gray-800 px-8 py-10 shadow-xl shadow-indigo-600/20 dark:shadow-none sm:px-12 sm:py-12 transition-all duration-700 delay-100 ease-out border border-transparent dark:border-gray-700 ${
            isStatsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="rounded-full bg-indigo-500/30 dark:bg-gray-700 p-3 mb-4 ring-1 ring-white/10 dark:ring-gray-600">
                    <Icon className="h-6 w-6 text-indigo-100 dark:text-yellow-400" />
                  </div>
                  <dd className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-yellow-400 mb-1">
                    {stat.value}
                  </dd>
                  <dt className="text-sm font-medium leading-6 text-indigo-100 dark:text-slate-300">
                    {stat.label}
                  </dt>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={testimonialsRef}
          className={`mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 transition-all duration-700 delay-200 ease-out ${
            isTestimonialsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-gray-900/50 hover:ring-indigo-100 dark:hover:ring-yellow-400/50"
            >
              <div>
                <div className="flex gap-x-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-slate-300">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6">
                {/* GitHub style streak indicator */}
                <div className="mb-4 flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span>Streak: {testimonial.days} Days</span>
                  </div>
                  <div className="flex gap-0.5">
                    {testimonial.streak.map((level, sIdx) => {
                      const bgColors = [
                        "bg-gray-100 dark:bg-gray-800",
                        "bg-green-200 dark:bg-green-900",
                        "bg-green-400 dark:bg-green-700",
                        "bg-green-600 dark:bg-green-500",
                        "bg-green-800 dark:bg-green-400",
                      ];
                      return (
                        <div
                          key={sIdx}
                          className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-sm ${bgColors[level]}`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Profile info */}
                <div className="flex items-center gap-x-4">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarClasses} text-sm font-bold ring-2 ring-white dark:ring-gray-800 shadow-sm`}
                  >
                    {testimonial.avatarName}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
