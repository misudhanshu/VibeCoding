import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled past 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '#how-it-works' },
    { name: 'Features', path: '#features' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'FAQ', path: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-extrabold tracking-tight text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 rounded-md"
                aria-label="ABTalks Home"
              >
                ABTalks<span className="text-indigo-600">.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA / Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Link
                  to="#join"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95 hover:scale-1.03"
                >
                  Join Challenge
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open main menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header area in mobile menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABTalks<span className="text-indigo-600">.</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links area */}
          <div className="flex flex-1 flex-col justify-between p-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium text-gray-900 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-md py-1"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-auto pt-8">
              <Link
                to="#join"
                className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Challenge
              </Link>
              <p className="mt-4 text-center text-sm text-gray-500">
                Kickstart your coding journey today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
