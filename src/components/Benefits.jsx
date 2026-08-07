import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Code2, GitBranch, Laptop, Rocket, Users } from "lucide-react";

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

const benefitsData = [
  {
    title: "Daily Coding Discipline",
    description:
      "Build a habit of coding every day through structured challenges.",
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    ringColor: "ring-blue-100",
  },
  {
    title: "GitHub Growth",
    description: "Create a consistent GitHub contribution history.",
    icon: GitBranch,
    color: "text-green-600",
    bgColor: "bg-green-50",
    ringColor: "ring-green-100",
  },
  {
    title: "LinkedIn Presence",
    description: "Share your journey and build your professional identity.",
    icon: FaLinkedin,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    ringColor: "ring-indigo-100",
  },
  {
    title: "Real Project Experience",
    description: "Build practical projects instead of only learning theory.",
    icon: Laptop,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    ringColor: "ring-purple-100",
  },
  {
    title: "Career Preparation",
    description:
      "Develop skills that help you prepare for internships and jobs.",
    icon: Rocket,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    ringColor: "ring-orange-100",
  },
  {
    title: "Developer Community",
    description: "Learn and grow with other students.",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    ringColor: "ring-pink-100",
  },
];

const BenefitCard = ({ benefit, index, isVisible }) => {
  const Icon = benefit.icon;

  return (
    <div
      className={`relative group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-500 ease-out hover:shadow-md hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.bgColor} ${benefit.ringColor} ring-1 transition-transform group-hover:scale-110`}
      >
        <Icon
          className={`h-6 w-6 ${benefit.color}`}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        {benefit.description}
      </p>
    </div>
  );
};

const Benefits = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-32">
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">
            Value & Growth
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Join ABTalks?
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Build consistency, improve your skills, and create a career-ready
            developer profile in 60 days.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div
          ref={gridRef}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 mx-auto">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
                isVisible={isGridVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
