import React from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0B1020] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-block text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group"
            >
              ABTalks
              <span className="text-indigo-600 dark:text-purple-400 transition-colors group-hover:text-purple-600 dark:group-hover:text-white">
                .
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-600 dark:text-slate-400 max-w-xs">
              Build consistently. Ship publicly. Grow together.
            </p>
            <div className="flex gap-x-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Navigation Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Navigation
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-sm leading-6 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="text-sm leading-6 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/day/12"
                      className="text-sm leading-6 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      Challenge Day
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-sm leading-6 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-sm leading-6 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-gray-500 dark:text-slate-500 text-center md:text-left">
            &copy; 2026 ABTalks. Built for students who keep showing up.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-500 font-medium whitespace-nowrap">
            Made with{" "}
            <Heart className="h-3 w-3 text-red-500 dark:text-red-400 fill-red-500 dark:fill-red-400 animate-pulse" />{" "}
            for builders
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
