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

Prompt 3:
Context:

- This section appears after the hero section on the landing page.
- The purpose is to convince students why they should join the challenge.
- Navbar and Hero Section are already completed. Do not modify them.
- Maintain the existing design language, typography, spacing, and color system.
- The entire application is designed mobile-first (390px width).
- Use React and Tailwind CSS only.
- Build clean, reusable, production-quality code.

Section Goal:

Help students understand the value they get from joining ABTalks.

Design Requirements:

Create a section with:

• Section Header:

Heading:
"Why Join ABTalks?"

Subheading:
"Build consistency, improve your skills, and create a career-ready developer profile in 60 days."

• Benefit Cards:

Create 6 modern cards:

1. Daily Coding Discipline
Description:
Build a habit of coding every day through structured challenges.

2. GitHub Growth
Description:
Create a consistent GitHub contribution history.

3. LinkedIn Presence
Description:
Share your journey and build your professional identity.

4. Real Project Experience
Description:
Build practical projects instead of only learning theory.

5. Career Preparation
Description:
Develop skills that help you prepare for internships and jobs.

6. Developer Community
Description:
Learn and grow with other students.

Each card should include:

- Modern icon
- Title
- Short description
- Rounded card design
- Soft shadow
- Hover animation
- Smooth transition

Responsive Requirements:

Desktop:
- Display cards in a beautiful grid layout.
- Balanced spacing.
- Premium SaaS-style design.

Mobile (390px):
- Single column layout.
- Comfortable touch spacing.
- Cards should feel interactive.

Design Style:

- Modern SaaS landing page aesthetic.
- Minimal and premium.
- Rounded corners.
- Soft shadows.
- Clean typography.
- Plenty of whitespace.
- Avoid excessive gradients.

Animations:

Add subtle animations:

- Fade-in while scrolling.
- Card hover lift effect.
- Smooth transitions.

Accessibility:

- Use semantic HTML.
- Proper heading hierarchy.
- Accessible icons with labels.

Do not use:

- Material UI
- Bootstrap
- Chakra UI
- External component libraries

Focus only on the Benefits section component.

Prompt 4:
You are an expert UI/UX designer and senior React developer.

Design a premium, modern, mobile-first responsive "How It Works" section for ABTalks 60-Day Coding Challenge.

Context:

- This section is part of the landing page.
- Navbar and Hero are already completed.
- Do not modify existing components.
- Continue the existing visual design system.
- Use React + Tailwind CSS only.

Goal:

Explain the student's journey in a simple and motivating way.

Section Content:

Heading:

"How The Challenge Works"

Subtitle:

"Follow a simple process and build consistency one day at a time."

Create a 3-step journey:

Step 1:

Title:
Join The Challenge

Description:
Register and start your 60-day coding journey with daily tasks.

Step 2:

Title:
Complete Daily Tasks

Description:
Learn concepts, build projects, and submit your progress.

Step 3:

Title:
Build Your Developer Profile

Description:
Grow your GitHub, LinkedIn, and portfolio.

Design Requirements:

Create a timeline/process UI.

Desktop:
- Horizontal timeline.
- Connected steps.
- Beautiful icons.
- Clear progression.

Mobile:
- Vertical timeline.
- Large touch-friendly cards.
- Smooth scrolling experience.

Each step should contain:

- Step number
- Icon
- Heading
- Description
- Modern card styling

Design Style:

- Premium education platform feel.
- Minimal.
- Rounded cards.
- Soft shadows.
- Clean spacing.

Animations:

- Timeline reveal animation.
- Step cards fade in.
- Hover interactions.

Accessibility:

- Semantic sections.
- Proper contrast.
- Keyboard friendly.

Avoid:
- Generic templates.
- Heavy gradients.
- Component libraries.

Build only this section.