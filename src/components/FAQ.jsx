import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

// Hook for scroll animations
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

const faqs = [
  {
    question: "What is the ABTalks 60-day challenge?",
    answer:
      "It's a structured journey where students build or practice coding every day for 60 consecutive days, publicly submitting proof of their work through GitHub and LinkedIn.",
  },
  {
    question: "Do I need to be an expert coder?",
    answer:
      "Not at all. The challenge is designed for students at all skill levels. The primary goal is building consistency, learning actively, and taking action—not being perfect.",
  },
  {
    question: "What do I need to submit every day?",
    answer:
      "There are two main proofs of work: a GitHub repository commit showing your new code or progress, and a short LinkedIn post documenting what you learned.",
  },
  {
    question: "What happens if I miss a day?",
    answer:
      "Progress is more important than perfection. If you happen to miss a day, don't quit. Acknowledge the slip-up, get right back on track the next day, and continue.",
  },
  {
    question: "Do I need a GitHub or LinkedIn account?",
    answer:
      "Yes, both are vital components. GitHub acts as the technical repository for your work, while LinkedIn serves as your public portfolio to build a professional learning presence.",
  },
  {
    question: "Can I choose my own coding track?",
    answer:
      "Absolutely. Students can choose any tech stack or learning track that fits their career goals and build daily micro-projects aligned with that path.",
  },
  {
    question: "Is there a fee to participate?",
    answer:
      "Participation and registration details may vary slightly by season depending on how the cohorts are organized, but our core mission is providing an accessible, high-value community experience.",
  },
  {
    question: "What do I get after completing 60 days?",
    answer:
      "You walk away with tangible outcomes: actual projects deployed, a rock-solid coding habit, a thick history of public proof of work, and a dramatically stronger professional portfolio for recruiters.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [listRef, isListVisible] = useIntersectionObserver({ threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-slate-50 dark:bg-[#111827] py-24 sm:py-32 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div
          ref={headerRef}
          className={`text-center transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Questions? We've Got You.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know before starting your 60-day journey.
          </p>
        </div>

        {/* FAQs List */}
        <div
          ref={listRef}
          className={`mt-16 sm:mt-20 space-y-4 transition-all duration-700 delay-100 ease-out ${
            isListVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white dark:bg-[#172033] transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "border-indigo-100 dark:border-gray-600 shadow-md ring-1 ring-indigo-50 dark:ring-gray-700"
                    : "border-gray-100 dark:border-[#273449] shadow-sm hover:border-gray-200 dark:hover:border-gray-500 hover:shadow"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-yellow-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#172033] rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-indigo-600 dark:text-yellow-400" : "text-gray-900 dark:text-white"}`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon Wrapper with rotation */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-100 text-indigo-600 dark:bg-gray-800 dark:text-yellow-400"
                        : "bg-gray-50 text-gray-400 dark:bg-gray-900 dark:text-gray-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    }`}
                  >
                    <Plus
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-90 scale-0 absolute opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }`}
                    />
                    <Minus
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-90 scale-0 absolute opacity-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
