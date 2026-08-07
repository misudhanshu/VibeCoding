Prompt 1:
You are an expert UI/UX designer and senior React developer.

Design a premium, modern, mobile-first responsive navigation bar for a web platform called "ABTalks", a 60-day coding challenge for Indian college students.

Context:

- This is the landing page for first-time visitors.
- The primary goal is to convince students to join the challenge.
- The entire application is designed mobile-first (390px width).
- Use React and Tailwind CSS only.
- Build clean, reusable, production-quality code.

Navbar Requirements:

• Left:

- ABTalks logo (text logo is fine).
- Clicking the logo navigates to "/".

• Center (Desktop):

- Home
- How It Works
- Features
- Testimonials
- FAQ

• Right:

- Primary CTA button: "Join Challenge"

Mobile (390px):

- Hide navigation links.
- Show a modern hamburger icon.
- Opening it should display a full-screen or slide-in menu with smooth animation.
- Include all navigation links and the CTA button.
- Large touch-friendly spacing.

Design Style:

- Minimal and premium.
- Rounded corners.
- Soft shadows.
- Excellent typography.
- Plenty of whitespace.
- Sticky while scrolling.
- Transparent over the hero section and transitions to a solid background with a subtle blur when the user scrolls.
- Smooth hover and transition animations.
- Accessibility-friendly (keyboard navigation and ARIA labels).

Do not use component libraries like Material UI, Chakra UI, or Bootstrap.
Do not add authentication logic or backend functionality.
Focus only on the navbar component and make it easy to integrate into the landing page.

Prompt 2:
You are an expert UI/UX designer and senior React developer.

Create a premium, mobile-first Hero section for the ABTalks landing page using React and Tailwind CSS.

Context:
ABTalks is a 60-day coding challenge for Indian college students. Every day students complete a coding task, make a GitHub commit, publish a LinkedIn post, and build consistency while creating a public portfolio.

The Hero section should immediately answer:
• What is ABTalks?
• Why should students join?
• What benefits will they get?

Requirements:

- Mobile-first design (390px viewport)
- Clean, premium and modern UI
- Place the Hero directly below the existing navbar
- Large compelling headline
- Short supporting description
- Primary CTA: "Start Your 60-Day Journey"
- Secondary CTA: "See How It Works"
- Add trust indicators like:
  - 5000+ Students
  - 60-Day Challenge
  - Daily GitHub Commits
- Include a modern illustration or abstract coding-themed visual on the right for desktop and below the content on mobile.
- Add subtle gradients and soft background elements without making the UI cluttered.
- Use smooth entrance animations and micro-interactions.
- Keep spacing generous and typography highly readable.
- Use only React and Tailwind CSS.
- Build the Hero as a reusable component named Hero.jsx.
