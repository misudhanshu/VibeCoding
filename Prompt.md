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

Prompt 5:
You are an expert UI/UX designer and senior React developer.

Design a premium "Why Choose ABTalks?" section for the ABTalks landing page using React and Tailwind CSS.

Context:
ABTalks is a 60-day coding challenge for Indian college students. Students build projects daily, make GitHub commits, publish LinkedIn posts, and maintain a public learning streak to become more visible to recruiters.

The previous sections (already completed) are:

- Responsive Navbar
- Hero Section
- How It Works

This section should naturally continue the story by answering:
"Why should a student spend 60 days on ABTalks?"

Requirements:

- Mobile-first design (390px first)
- Responsive on tablet and desktop
- Modern, premium SaaS aesthetic
- Use React and Tailwind CSS only
- Create a reusable component named Benefits.jsx

Layout:

- Section title
- Short supporting description
- 4 feature cards in a responsive grid (2x2 on mobile, 4 columns on desktop)

Cards:

1. Build in Public
   Daily GitHub commits and LinkedIn posts create a visible portfolio.

2. Stay Consistent
   Track your coding streak and develop long-term consistency.

3. Impress Recruiters
   Showcase real projects instead of only certificates.

4. Community Driven
   Learn alongside thousands of motivated students.

Each card should include:

- Lucide React icon
- Attractive gradient icon container
- Bold heading
- Short description
- Hover animation
- Slight lift effect
- Soft shadow
- Rounded corners
- Subtle border
- Premium spacing

Extra polish:

- Soft background gradients
- Small floating decorative elements (do not distract)
- Smooth fade-up animation on scroll
- Micro interactions on hover
- Consistent color palette with the Hero section

Do not generate placeholder lorem ipsum.
Use realistic copy written for Indian college students.
Focus on trust, motivation, and clarity.

Prompt 6:
You are an expert UI/UX designer and senior React developer.

Create a premium "Student Success" / social proof section for the ABTalks landing page using React and Tailwind CSS.

Context:
ABTalks is a 60-day coding challenge for Indian college students. Students build something every day, make a GitHub commit, publish a LinkedIn post, and build a public learning streak.

The landing page already contains:
- Navbar
- Hero
- How It Works
- Why Choose ABTalks / Benefits

This section should build trust and make a first-time visitor feel that they are joining a real community of ambitious students.

Create a reusable React component named StudentSuccess.jsx.

Requirements:
- Mobile-first design for a 390px viewport
- Responsive on tablet and desktop
- Use React and Tailwind CSS only
- Match the existing ABTalks visual language and color palette
- Do not redesign or modify existing sections

Section structure:

1. Section heading:
   "Built by Students. Proven by Consistency."

2. Supporting text:
   Explain that students are using ABTalks to turn daily coding practice into visible proof of work.

3. Add three impressive but realistic statistics:
   - 5,000+ Students
   - 60 Days of Building
   - 100,000+ Contributions

4. Add 2–3 realistic student testimonial cards.

Each testimonial should contain:
- Student name
- College / role
- Short testimonial
- Small avatar or initials
- Star rating
- Their challenge progress or streak

Example testimonial themes:
- Someone who struggled with consistency and finally built a daily habit.
- Someone who used their public projects to improve their portfolio.
- Someone who became more confident sharing their work publicly.

Do NOT claim that students got jobs or offers unless explicitly presented as mock/demo content.

Visual design:
- Premium cards with rounded corners
- Subtle borders
- Soft shadows
- Clean typography
- Small Lucide React icons where appropriate
- Use subtle gradients
- Add a GitHub-style contribution visualization or streak indicator somewhere in the section
- Add subtle hover interactions
- Cards should lift slightly on hover
- Use smooth transitions
- Avoid excessive animations

Mobile:
- Stack testimonial cards vertically
- Make statistics easy to scan
- Ensure nothing overflows at 390px
- Keep the section compact enough that it doesn't feel unnecessarily long

Desktop:
- Statistics can appear in one horizontal row
- Testimonials can appear in a 3-column layout

Important:
- Do not use lorem ipsum.
- Do not create fake logos of real companies.
- Do not make the section look like a generic SaaS template.
- Keep the design focused on Indian college students and the ABTalks 60-day challenge.
- Reuse the visual language established by the existing Hero and Benefits sections.