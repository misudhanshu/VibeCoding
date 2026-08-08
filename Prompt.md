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

Prompt 7:

You are an expert UI/UX designer and senior React developer.

Create a premium, mobile-first FAQ section for the ABTalks landing page using React and Tailwind CSS.

Context:
ABTalks is a 60-day coding challenge for Indian college students. Students build something every day, make a GitHub commit, publish a LinkedIn post, and maintain a public learning streak.

The landing page already contains:

- Navbar
- Hero
- How It Works
- Why Choose ABTalks / Benefits
- Student Success / Social Proof

Create a reusable component named FAQ.jsx.

Goal:
Answer the most important questions a student might have before joining the 60-day challenge and remove hesitation before the final CTA.

Requirements:

- Mobile-first design for a 390px viewport
- Fully responsive on tablet and desktop
- Use React and Tailwind CSS only
- Do not modify existing sections
- Match the existing ABTalks visual language, typography, spacing, and color palette
- Use Lucide React icons if useful

Layout:

Section heading:
"Questions? We've Got You."

Supporting text:
"Everything you need to know before starting your 60-day journey."

Create an accordion-style FAQ.

Use these questions and realistic answers:

1. What is the ABTalks 60-day challenge?
   Explain that students build or practice something every day for 60 days and submit proof of their work through GitHub and LinkedIn.

2. Do I need to be an expert coder?
   Explain that the challenge is designed for students at different skill levels and the goal is consistency, learning, and building—not being perfect.

3. What do I need to submit every day?
   Explain the two main proofs of work:

- GitHub repository/commit
- LinkedIn post

4. What happens if I miss a day?
   Explain that missing a day doesn't mean they should quit. Encourage them to get back on track and continue the challenge.

5. Do I need a GitHub or LinkedIn account?
   Explain that these are used to submit proof of work and build a public learning presence.

6. Can I choose my own coding track?
   Explain that students can choose a suitable track and build according to their learning goals.

7. Is there a fee to participate?
   Use neutral wording and make the answer easy to change later because this is currently a mocked hackathon experience.

8. What do I get after completing 60 days?
   Focus on tangible outcomes such as projects, consistency, public proof of work, and a stronger portfolio.

Interaction:

- Only one FAQ item should be open at a time.
- Clicking a question should smoothly expand/collapse the answer.
- Use a plus icon when closed.
- Rotate/change it to a minus icon when open.
- Add a subtle transition.
- Make the entire question row clickable.
- Make the active item visually distinct but subtle.
- Do not use a huge animation.

Design:

- Use clean white cards or a very subtle background.
- Rounded corners.
- Thin borders.
- Soft shadows.
- Generous spacing.
- Strong question typography.
- Readable answer text.
- Add subtle hover states.
- Avoid excessive gradients or decorative elements.
- Keep the section visually consistent with the Hero, Benefits, and Student Success sections.

Mobile requirements:

- Must look excellent at exactly 390px width.
- No horizontal overflow.
- Questions should wrap naturally.
- Make the tap targets large enough for mobile.
- Answers should have comfortable line height.

Accessibility:

- Use buttons for clickable FAQ questions.
- Add aria-expanded.
- Add appropriate aria-controls relationships.
- Ensure keyboard users can navigate the accordion.

Do not use lorem ipsum.
Do not create unnecessary dependencies.
Keep the component clean and easy to understand.
Don't do over fancy it must provide a visual break and it should be extremely easy to scan

Prompt 8:
You are an expert UI/UX designer and senior React developer.

Create the final CTA and footer for the ABTalks landing page using React and Tailwind CSS.

Context:
ABTalks is a 60-day coding challenge for Indian college students. Students build something every day, make a GitHub commit, publish a LinkedIn post, and build a public learning streak.

The landing page already contains:

- Navbar
- Hero
- How It Works
- Why Choose ABTalks / Benefits
- Student Success
- FAQ

Do not modify any existing sections.

Create two reusable components:

1. FinalCTA.jsx
2. Footer.jsx

━━━━━━━━━━━━━━━━━━
FINAL CTA
━━━━━━━━━━━━━━━━━━

Goal:
This is the final conversion point. A student has already read the landing page, so the CTA should motivate them to actually start the challenge.

Heading:
"Your Next 60 Days Can Change Everything."

Supporting text:
"Stop waiting to feel ready. Start building, stay consistent, and make your progress visible."

Primary button:
"Start the Challenge"

Secondary small text:
"60 days. One commit at a time."

Design:

- Mobile-first at 390px
- Premium and visually striking
- Use the existing ABTalks purple/indigo visual language
- Large rounded container or full-width gradient section
- Subtle background glow/gradient
- Strong typography hierarchy
- Generous spacing
- Button should have hover and active states
- Add a subtle upward hover animation to the CTA
- Avoid excessive animations
- Make the CTA feel like a natural conclusion to the page

The section should visually connect back to the Hero's "Code. Commit. Post. Build Consistency." concept.

━━━━━━━━━━━━━━━━━━
FOOTER
━━━━━━━━━━━━━━━━━━

Create a clean professional footer below the CTA.

Include:

Brand:
"ABTalks."

Short description:
"Build consistently. Ship publicly. Grow together."

Navigation:

- Home
- Dashboard
- Challenge Day

Resources:

- How It Works
- FAQ

Social:

- GitHub
- LinkedIn

Use Lucide React icons where appropriate.

Bottom footer:

- "© 2026 ABTalks. Built for students who keep showing up."
- Add a small "Made with ❤️ for builders" message.

Requirements:

- Mobile-first design
- Excellent at 390px
- Responsive desktop layout
- Stack sections naturally on mobile
- Use a clean grid on desktop
- No horizontal overflow
- Subtle hover transitions on links
- Consistent typography and spacing with the rest of the landing page
- Use React and Tailwind CSS only
- Keep components clean and reusable
- Do not use lorem ipsum
- Do not introduce unnecessary dependencies

Important:
The footer links should use React Router's Link component for internal routes.

Use:
"/"
"/dashboard"
"/day/12"

Do not create authentication or backend functionality.

Prompt 9:

You are an expert product designer and senior React developer.

Now build the ABTalks Student Dashboard at:

/dashboard

Context:
ABTalks is a 60-day coding challenge for Indian college students.

Students:

- Choose a coding track
- Build something every day
- Submit a GitHub repository/commit
- Publish a LinkedIn post
- Maintain a public learning streak
- Build projects and proof of work throughout the challenge

The landing page is already complete. Do not modify the existing landing page sections.

The dashboard is the most important screen after the student joins ABTalks.

Create a premium, mobile-first dashboard using React and Tailwind CSS.

Create a reusable component/page named Dashboard.jsx.

IMPORTANT:
This is a frontend-only hackathon project.
Do NOT build authentication.
Do NOT build a backend.
Do NOT use a database.
Use realistic mocked data directly in the frontend.

━━━━━━━━━━━━━━━━━━━━━━
DESIGN GOAL
━━━━━━━━━━━━━━━━━━━━━━

At 390px width, the student should understand within a few seconds:

1. What day am I on?
2. What is my current streak?
3. What do I need to build today?
4. How much of the challenge have I completed?
5. What have I achieved so far?
6. What should I do next?

The dashboard should feel like a real product, not an admin panel.

━━━━━━━━━━━━━━━━━━━━━━
MOBILE-FIRST LAYOUT
━━━━━━━━━━━━━━━━━━━━━━

Design the dashboard specifically for 390px first.

Suggested structure:

1. Dashboard header
2. Current streak / progress summary
3. Today's challenge card
4. GitHub + LinkedIn proof-of-work status
5. Overall challenge progress
6. Achievements / milestones
7. Recent activity
8. Desktop-only secondary navigation/sidebar if appropriate

━━━━━━━━━━━━━━━━━━━━━━

1. DASHBOARD HEADER
   ━━━━━━━━━━━━━━━━━━━━━━

Create a compact header.

Include:

- ABTalks logo
- Student avatar
- Student name: "Aarav Sharma"
- Small greeting such as:
  "Good evening, Aarav 👋"

Do not make the header unnecessarily tall.

On mobile:

- Keep it compact
- Avatar should be easy to tap
- Avoid a large desktop-style navigation bar

━━━━━━━━━━━━━━━━━━━━━━ 2. STREAK + PROGRESS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━

Create a visually strong summary card.

Mock data:

Current day:
12 / 60

Current streak:
12 days

Longest streak:
12 days

Challenge completion:
20%

Use:

- Flame icon for streak
- Circular or linear progress indicator for challenge completion
- Strong visual hierarchy

Make "12 day streak" the most visually prominent element.

Add a small motivational message:

"You're building momentum. Keep showing up."

The card should feel encouraging, not childish.

━━━━━━━━━━━━━━━━━━━━━━ 3. TODAY'S CHALLENGE
━━━━━━━━━━━━━━━━━━━━━━

This should be the main card on the dashboard.

Heading:

"Day 12 — Build a Habit Tracker"

Include:

Track:
"MERN Stack"

Difficulty:
"Intermediate"

Estimated time:
"2–3 hours"

Description:
"Build a habit tracker where users can create habits, mark them complete, and view their weekly progress."

Show a clear primary CTA:

"Continue Challenge"

The button should navigate to:

/day/12

Also show:

"Due today"

Use a subtle status indicator.

━━━━━━━━━━━━━━━━━━━━━━ 4. PROOF OF WORK
━━━━━━━━━━━━━━━━━━━━━━

Create a compact section titled:

"Today's Proof of Work"

Show two submission items:

GitHub

- Status: "Pending"
- Icon
- "Add repository / commit"

LinkedIn

- Status: "Pending"
- Icon
- "Share your progress"

Use visually distinct status badges.

Make it obvious that completing the coding task alone isn't the entire daily workflow.

The desired flow is:

Build → Commit → Post → Complete

━━━━━━━━━━━━━━━━━━━━━━ 5. OVERALL CHALLENGE PROGRESS
━━━━━━━━━━━━━━━━━━━━━━

Create a section:

"Your 60-Day Journey"

Show:

12 completed
48 remaining

Add a progress bar:

20%

Also show a small calendar/activity visualization representing the student's previous days.

Example:

Days 1–12 completed
Days 13–60 upcoming

Use different visual states for:

- Completed
- Current day
- Upcoming

Keep it compact on mobile.

━━━━━━━━━━━━━━━━━━━━━━ 6. ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━

Create a section:

"Achievements"

Show 3–4 achievement cards.

Examples:

🔥 First 7 Days
"Completed your first week"

🚀 10 Day Streak
"Stayed consistent for 10 days"

💻 First Project
"Submitted your first project"

🏆 Halfway Hero
"Unlocks at Day 30"

Unlocked achievements should look active.

Locked achievements should look muted but still understandable.

Do NOT make the cards huge.

━━━━━━━━━━━━━━━━━━━━━━ 7. RECENT ACTIVITY
━━━━━━━━━━━━━━━━━━━━━━

Add a small activity section.

Example:

Day 11
"Built a weather dashboard"
✓ GitHub submitted
✓ LinkedIn shared

Day 10
"Built a search & filter app"
✓ GitHub submitted
✓ LinkedIn shared

Day 9
"Built a currency converter"
✓ GitHub submitted
✓ LinkedIn shared

Use a vertical timeline or compact activity list.

━━━━━━━━━━━━━━━━━━━━━━ 8. EDGE CASE DESIGN
━━━━━━━━━━━━━━━━━━━━━━

The challenge specifically requires realistic edge cases.

Design the dashboard architecture so the mocked data can easily represent:

FIRST DAY:

- 0 day streak
- Day 1
- No previous activity
- Message:
  "Your journey starts today."

MISSED DAY:

- Show a missed-day indicator
- Do not make the interface feel punishing
- Message:
  "You missed yesterday. That's okay — get back on track today."

EMPTY PROFILE:

- Avatar fallback
- No achievements
- No activity
- Helpful empty states

For the default screenshot, use the Day 12 active student state.

━━━━━━━━━━━━━━━━━━━━━━
VISUAL STYLE
━━━━━━━━━━━━━━━━━━━━━━

Use the same visual language established by the landing page:

- Indigo / purple primary accent
- Clean white cards
- Soft gray backgrounds
- Subtle borders
- Rounded corners
- Soft shadows
- Premium typography
- Strong hierarchy
- Plenty of whitespace

Do NOT make every card colorful.

Use color primarily for:

- Progress
- Streak
- Status
- Important actions

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Huge cards
- Dashboard-template appearance
- Unnecessary charts

━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVENESS
━━━━━━━━━━━━━━━━━━━━━━

The automated evaluator will open:

/dashboard

at exactly:

390px width

Therefore:

- No horizontal scrolling
- No clipped content
- No desktop layout squeezed into mobile
- Cards should fit naturally
- Buttons should be easy to tap
- Text should never overflow
- Use responsive breakpoints for tablet/desktop

Desktop can use a sidebar or wider grid if it improves the experience, but mobile is the priority.

━━━━━━━━━━━━━━━━━━━━━━
INTERACTIONS
━━━━━━━━━━━━━━━━━━━━━━

Add subtle interactions:

- Cards slightly lift on hover
- Progress animation
- Button hover/active states
- Achievement hover states
- Smooth transitions

Do not over-animate the dashboard.

━━━━━━━━━━━━━━━━━━━━━━
ROUTING
━━━━━━━━━━━━━━━━━━━━━━

The "Continue Challenge" button must navigate to:

/day/12

Use the existing React Router setup.

Do not create fake authentication.

━━━━━━━━━━━━━━━━━━━━━━
CODE QUALITY
━━━━━━━━━━━━━━━━━━━━━━

Keep Dashboard.jsx clean and componentized.

If useful, create small reusable components such as:

- StreakCard
- TodayChallenge
- ProofOfWork
- ProgressCard
- AchievementCard
- ActivityTimeline

Do not over-engineer.

Use mocked data in a clear structure so it can easily be replaced with API data later.

Do not modify package configuration unnecessarily.

Do not introduce new dependencies unless absolutely necessary.

Before finishing:

- Test /dashboard at 390px
- Test navigation to /day/12
- Check for console errors
- Check that no content overflows horizontally

Prompt 10:
You are an expert product designer and senior React developer.

Build the ABTalks Challenge Day page at:

/day/12

This is the third and final required screen for the hackathon.

Context:
ABTalks is a 60-day coding challenge for Indian college students.

Every day, students:

1. Read the day's coding task
2. Build the project
3. Submit a GitHub repository/commit
4. Share their progress on LinkedIn
5. Complete the challenge day

The landing page and student dashboard are already built.

Do NOT modify those existing pages.

Create a reusable React page/component named:

ChallengeDay.jsx

Use React + Tailwind CSS only.

No backend.
No authentication.
No database.
Use realistic mocked data.

━━━━━━━━━━━━━━━━━━━━━━
CORE UX GOAL
━━━━━━━━━━━━━━━━━━━━━━

This page should feel like the student's actual workspace for Day 12.

The student should immediately understand:

- What today's challenge is
- What they need to build
- What skills they will practice
- What the requirements are
- How to submit GitHub proof
- How to submit LinkedIn proof
- Whether they have completed today's challenge

The experience should feel focused and actionable rather than like a documentation page.

━━━━━━━━━━━━━━━━━━━━━━
MOBILE FIRST
━━━━━━━━━━━━━━━━━━━━━━

The evaluator will open this route at:

390px width

Design for 390px first.

There must be:

- No horizontal overflow
- Comfortable touch targets
- Clear hierarchy
- Readable text
- Sticky/fixed elements only if they genuinely improve usability
- No desktop UI squeezed into mobile

Desktop should be a secondary responsive layout.

━━━━━━━━━━━━━━━━━━━━━━

1. TOP HEADER
   ━━━━━━━━━━━━━━━━━━━━━━

Create a compact challenge header.

Include:

← Back to Dashboard

Day 12 of 60

12 Day Streak 🔥

The back button should navigate to:

/dashboard

Keep this header compact.

━━━━━━━━━━━━━━━━━━━━━━ 2. CHALLENGE HERO
━━━━━━━━━━━━━━━━━━━━━━

Create a visually strong challenge introduction.

Show:

DAY 12

"Build a Habit Tracker"

Track:
MERN Stack

Difficulty:
Intermediate

Estimated time:
2–3 hours

Add a short description:

"Build a habit tracker where users can create habits, mark them complete, and view their weekly progress."

Make the Day 12 indicator visually prominent.

Use a subtle purple/indigo accent consistent with ABTalks.

━━━━━━━━━━━━━━━━━━━━━━ 3. TODAY'S MISSION
━━━━━━━━━━━━━━━━━━━━━━

Create the main content card titled:

"Today's Mission"

Explain what the student needs to build.

Use realistic content:

Build a habit tracking application that allows users to:

• Create a new habit
• Mark a habit as completed
• View their current habits
• Track weekly progress
• Remove or edit a habit

Keep the content easy to scan.

Use checkboxes or bullet points with Lucide icons.

━━━━━━━━━━━━━━━━━━━━━━ 4. WHAT YOU'LL PRACTICE
━━━━━━━━━━━━━━━━━━━━━━

Create a compact skills section.

Show tags such as:

React
JavaScript
Tailwind CSS
State Management
Local Storage
UI Design

Use small pill badges.

Don't make this section too large.

━━━━━━━━━━━━━━━━━━━━━━ 5. SUCCESS CRITERIA
━━━━━━━━━━━━━━━━━━━━━━

Create a section titled:

"Definition of Done"

This is an important part of the experience.

Show a checklist:

☐ User can create a habit
☐ User can mark a habit complete
☐ User can delete a habit
☐ Habits persist after refresh
☐ UI works on mobile
☐ Code is pushed to GitHub

Make each item visually clear.

Use unchecked state for the default mockup.

Allow the checkboxes to be clicked and toggled.

Use React state only.

━━━━━━━━━━━━━━━━━━━━━━ 6. BUILD → COMMIT → POST
━━━━━━━━━━━━━━━━━━━━━━

Create a visually distinct progress/workflow section.

Show three steps:

01
BUILD
Complete today's project

↓

02
COMMIT
Push your work to GitHub

↓

03
POST
Share your progress on LinkedIn

The third step should visually communicate that these three actions complete the daily workflow.

Use subtle connectors or a vertical timeline on mobile.

━━━━━━━━━━━━━━━━━━━━━━ 7. GITHUB SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━

Create a dedicated card:

"Submit GitHub Proof"

Explain:

"Paste the repository or commit URL for today's project."

Include:

Input:
https://github.com/...

Button:
"Submit GitHub"

Show the default status:

Pending submission

When the user submits a valid-looking URL:

- Update the UI to show "Submitted"
- Show a success state
- Do not actually send anything to a backend

Use React state.

Do not implement real GitHub API validation.

━━━━━━━━━━━━━━━━━━━━━━ 8. LINKEDIN SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━

Create another card:

"Share on LinkedIn"

Explain:

"Share what you built today and let your progress become visible."

Add a button:

"Share Progress"

For the hackathon demo, clicking the button can change the state to:

"Post Shared ✓"

Do not open an external LinkedIn authentication flow.

Keep this frontend-only.

━━━━━━━━━━━━━━━━━━━━━━ 9. COMPLETE DAY
━━━━━━━━━━━━━━━━━━━━━━

At the bottom, create the final completion area.

Heading:

"Ready to complete Day 12?"

Supporting text:

"Submit both proofs of work to mark today's challenge complete."

Primary button:

"Complete Day 12"

The button should initially be disabled until:

- GitHub proof is submitted
- LinkedIn proof is submitted

Once both are submitted:

- Enable the button
- Give it a strong visual state

When clicked:

- Change the UI to a completed state

Show:

"🔥 Day 12 Complete!"

"GitHub Commit Added"

"LinkedIn Post Shared"

"12 Day Streak Maintained"

This should feel rewarding but not childish.

━━━━━━━━━━━━━━━━━━━━━━ 10. THOUGHTFUL IDEA
━━━━━━━━━━━━━━━━━━━━━━

Add one small feature called:

"Reflection"

After completing the challenge, allow the student to write a short reflection:

"What did you learn today?"

Use a small textarea.

Show a character count such as:

0 / 280

This is intentionally lightweight.

The reflection should become part of the student's public learning history conceptually, but do not implement backend persistence.

This is the thoughtful UX improvement:
ABTalks shouldn't only track whether a student completed a task — it should help them capture what they learned.

━━━━━━━━━━━━━━━━━━━━━━
VISUAL DESIGN
━━━━━━━━━━━━━━━━━━━━━━

Use the existing ABTalks design language:

- Indigo / purple primary accent
- White cards
- Soft gray page background
- Rounded corners
- Subtle borders
- Soft shadows
- Strong typography
- Clean spacing
- Small, meaningful icons
- Premium SaaS/product aesthetic

Do NOT make every section look like a separate colorful card.

Use visual hierarchy to guide the student through the workflow.

━━━━━━━━━━━━━━━━━━━━━━
MOBILE LAYOUT
━━━━━━━━━━━━━━━━━━━━━━

At 390px, the order should be:

Back to Dashboard

Day 12 / Streak

Challenge title

Today's Mission

What You'll Practice

Definition of Done

Build → Commit → Post

GitHub Submission

LinkedIn Submission

Reflection

Complete Day

Everything should fit naturally into a vertical flow.

Buttons should be full-width where appropriate.

━━━━━━━━━━━━━━━━━━━━━━
DESKTOP LAYOUT
━━━━━━━━━━━━━━━━━━━━━━

On larger screens, you may use a two-column layout.

Suggested structure:

LEFT / MAIN:

- Challenge overview
- Mission
- Skills
- Definition of Done
- Workflow

RIGHT / STICKY:

- Day progress
- GitHub submission
- LinkedIn submission
- Completion status

The desktop layout should feel like a focused productivity workspace.

━━━━━━━━━━━━━━━━━━━━━━
INTERACTIONS
━━━━━━━━━━━━━━━━━━━━━━

Add subtle interactions:

- Checkbox transitions
- Button hover states
- Input focus states
- Submission success animation
- Completion state transition
- Smooth progress updates

Avoid excessive animation.

━━━━━━━━━━━━━━━━━━━━━━
EDGE CASES
━━━━━━━━━━━━━━━━━━━━━━

The page should support these mocked states:

DEFAULT:

- Nothing submitted
- Day incomplete

GITHUB SUBMITTED:

- GitHub shows success
- LinkedIn still pending
- Complete button disabled

BOTH SUBMITTED:

- Both show success
- Complete Day button enabled

COMPLETED:

- Show "Day 12 Complete"
- Show success summary
- Disable duplicate completion

MISSED DAY:

- Show a gentle warning:
  "You missed yesterday. You can still continue today's challenge."
- Do not punish the user visually

━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━

- Use semantic buttons
- Use labels for inputs
- Make checkboxes keyboard accessible
- Use visible focus states
- Ensure sufficient contrast
- Do not rely only on color to communicate status

━━━━━━━━━━━━━━━━━━━━━━
CODE QUALITY
━━━━━━━━━━━━━━━━━━━━━━

Keep the implementation clean.

You may create small reusable components such as:

- ChallengeHeader
- MissionCard
- SkillTags
- DefinitionOfDone
- DailyWorkflow
- GithubSubmission
- LinkedInSubmission
- ReflectionBox
- CompletionCard

Do not over-engineer.

Use local React state.

Do not add unnecessary dependencies.

Before finishing:

1. Test /day/12 at 390px.
2. Test /dashboard → /day/12 navigation.
3. Test /day/12 → /dashboard navigation.
4. Test GitHub submission state.
5. Test LinkedIn submission state.
6. Test Complete Day button enabling/disabling.
7. Test completion state.
8. Check for horizontal overflow.
9. Check for console errors.

Prompt 11:
Update the existing ABTalks landing page navbar. Do not redesign the navbar or change its current layout, spacing, typography, logo, or Join Challenge button.

Add the following two features only:

━━━━━━━━━━━━━━━━━━━━━━
1. SMOOTH SCROLL NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━

The navbar currently contains links such as:

- Home
- How It Works
- Features
- Testimonials
- FAQ

Convert the landing-page section links into smooth-scrolling navigation.

Requirements:

Home:
- Scroll to the top / hero section.

How It Works:
- Scroll smoothly to the How It Works section.

Features:
- Scroll smoothly to the Benefits / Features section.

Testimonials:
- Scroll smoothly to the Student Success / Testimonials section.

FAQ:
- Scroll smoothly to the FAQ section.

Use proper section IDs, for example:

Hero:
id="home"

How It Works:
id="how-it-works"

Features:
id="features"

Testimonials:
id="testimonials"

FAQ:
id="faq"

Use smooth scrolling rather than an instant jump.

The scroll should feel natural and polished.

For example, use:

scroll-behavior: smooth;

or an appropriate React scrolling implementation.

Important:
- Do not use full-page navigation for these landing-page sections.
- Do not reload the page.
- Preserve the existing React Router routes.
- Make sure the navbar works correctly on mobile as well.
- If the navbar is sticky, account for the navbar height so the section heading isn't hidden underneath it.

━━━━━━━━━━━━━━━━━━━━━━
2. DAY / NIGHT TOGGLE
━━━━━━━━━━━━━━━━━━━━━━

Add a compact light/dark mode toggle to the existing navbar.

Use Lucide React icons:

Sun
Moon

The default state should be LIGHT mode.

When the user clicks the toggle:

LIGHT MODE:
- White/light background
- Existing dark navy/gray text
- Existing ABTalks purple/indigo accents

DARK MODE:
- Change the page background to a deep dark navy/black
- Change cards and surfaces to appropriate dark shades
- Change primary text to warm golden/yellow
- Use softer muted golden-gray for secondary text
- Keep the ABTalks purple/indigo accent where appropriate
- Maintain strong readability and contrast

Do NOT make everything bright yellow.

Use golden/yellow primarily for:
- Main headings
- Important text
- Selected/active states
- Small accents

Suggested dark-mode palette:

Page background:
#0B1020

Card background:
#111827

Secondary surface:
#172033

Primary text:
#FACC15

Secondary text:
#CBD5E1

Borders:
#273449

Keep the design premium and restrained.

━━━━━━━━━━━━━━━━━━━━━━
TOGGLE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━

The toggle should:

- Have a smooth transition
- Change Sun → Moon appropriately
- Have a subtle hover state
- Have a clear focus state
- Be accessible with an aria-label
- Work properly at 390px
- Not increase the navbar height unnecessarily

Use React state for the theme.

Persist the user's choice using localStorage so refreshing the page doesn't reset the theme.

Example behavior:

Light mode
☀️

Dark mode
🌙

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

The theme must affect the ENTIRE landing page, not just the navbar.

Update the existing:

- Hero
- How It Works
- Benefits
- Student Success
- FAQ
- Final CTA
- Footer

so they properly respond to dark mode.

Do not simply put a dark background on the body while leaving white cards and dark text unchanged.

Every section should remain readable and visually coherent.

Use Tailwind's dark mode utilities where appropriate.

Do not introduce a new UI library.

Do not change the existing visual design in light mode.

Light mode should look exactly as it currently does.

Only enhance it with:
1. Smooth section scrolling
2. Light/dark theme toggle

Test at:
390px mobile
768px tablet
1440px desktop

Check that:
- No horizontal overflow occurs
- Navbar remains responsive
- Smooth scrolling works
- Theme persists after refresh
- All sections remain readable in dark mode
- React Router routes still work
- /dashboard and /day/12 are not accidentally broken

Prompt 12:
Fix the existing ABTalks navbar/theme implementation. Do NOT redesign the navbar or change its current layout.

There are two issues to fix.

━━━━━━━━━━━━━━━━━━━━━━
1. FIX LIGHT/DARK TOGGLE
━━━━━━━━━━━━━━━━━━━━━━

The dark mode works correctly, but clicking the theme toggle does not properly switch back to light mode.

Fix the theme logic so it works both directions:

Light → Dark
Dark → Light
Light → Dark
Dark → Light

Use a single React state such as:

const [isDark, setIsDark] = useState(false);

When toggled:

- isDark === true → apply dark theme
- isDark === false → restore light theme

Make sure the light-mode classes are explicitly restored rather than only adding dark-mode classes.

The entire landing page must switch correctly.

Light mode:
- White/light background
- Existing dark navy text
- Existing purple/indigo accents
- Existing white cards

Dark mode:
- Deep navy background
- Dark cards/surfaces
- Golden/yellow primary text
- Muted light secondary text
- Existing purple/indigo accents

Do not break the current dark-mode design because it already looks good.

━━━━━━━━━━━━━━━━━━━━━━
2. THEME PERSISTENCE
━━━━━━━━━━━━━━━━━━━━━━

Keep localStorage support.

Use a key such as:

"abtalks-theme"

On page load:
- Read the saved theme
- If it is "dark", initialize dark mode
- Otherwise initialize light mode

When toggling:
- Update React state
- Update localStorage

Make sure refreshing the page preserves the selected theme.

━━━━━━━━━━━━━━━━━━━━━━
3. NAVBAR TEXT SIZE
━━━━━━━━━━━━━━━━━━━━━━

Increase the navbar navigation text slightly.

Current links:

Home
How It Works
Features
Testimonials
FAQ

Make them approximately 17px.

Use:

text-[17px]

or an equivalent Tailwind class.

Keep:
- Same font weight
- Same spacing
- Same positioning
- Same hover behavior

Do NOT make the text excessively large.

The navbar should still look balanced against the ABTalks logo and Join Challenge button.

━━━━━━━━━━━━━━━━━━━━━━
4. THEME TOGGLE
━━━━━━━━━━━━━━━━━━━━━━

Keep the existing Sun/Moon toggle.

Make sure:

Light mode → show Moon icon
Dark mode → show Sun icon

This makes the action obvious:
- Moon = switch to dark
- Sun = switch to light

Add:
- aria-label
- focus-visible styling
- subtle hover transition

━━━━━━━━━━━━━━━━━━━━━━
5. IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

Do NOT redesign anything else.

Do NOT change:
- Logo
- Join Challenge button
- Navbar height
- Navbar spacing
- Hero
- Existing sections
- Typography outside the navbar
- Dark-mode visual design

Only fix:
1. Two-way theme switching
2. Theme persistence
3. Navbar link font size
4. Sun/Moon toggle behavior

After making the changes, test:

Light → Dark
Dark → Light
Refresh in Light mode
Refresh in Dark mode

Also test at 390px width.

Prompt 13:

Create one global theme system. Preserve the existing light design. Preserve the current dark landing-page design. Extend that same theme to Dashboard and Challenge Day. Only the code editor gets One Dark Pro-inspired syntax styling.

Prompt 14: 

Fix the application state so the Landing page, Dashboard, and Challenge Day share the same mock student progress.

IMPORTANT:
Do not redesign any existing UI.
Do not change the current visual design.
Only fix the application behavior/state.

━━━━━━━━━━━━━━━━━━━━━━
1. SHARED MOCK PROGRESS
━━━━━━━━━━━━━━━━━━━━━━

Currently /day/12 updates after completing the challenge, but /dashboard still shows GitHub and LinkedIn as pending.

Fix this by creating a shared frontend progress state using localStorage.

Use a single localStorage key such as:

"abtalks-progress"

Store at minimum:

{
  currentDay: 12,
  currentStreak: 12,
  completedDays: [1,2,3,...,12],
  githubSubmitted: true,
  linkedinSubmitted: true,
  day12Completed: true
}

Do NOT add a backend or database.

Both Dashboard.jsx and ChallengeDay.jsx must read from the same state.

━━━━━━━━━━━━━━━━━━━━━━
2. DAY 12 COMPLETION
━━━━━━━━━━━━━━━━━━━━━━

When the user completes Day 12 on /day/12:

- Save GitHub submission state
- Save LinkedIn submission state
- Save Day 12 as completed
- Update current progress
- Persist everything to localStorage

After refreshing /day/12, the completed state must remain.

━━━━━━━━━━━━━━━━━━━━━━
3. DASHBOARD SYNCHRONIZATION
━━━━━━━━━━━━━━━━━━━━━━

When returning to /dashboard after completing Day 12:

The dashboard must automatically reflect:

GitHub:
Submitted ✓

LinkedIn:
Shared ✓

Day 12:
Completed ✓

Streak:
12 days

Progress:
20%

Do not keep showing "Pending" after the user has submitted the proof.

The dashboard should read the same localStorage state rather than maintaining a separate independent mock state.

━━━━━━━━━━━━━━━━━━━━━━
4. PROGRESS DOT / CONTRIBUTION GRID
━━━━━━━━━━━━━━━━━━━━━━

The dashboard currently has a progress/contribution visualization.

When Day 12 is incomplete:
- Day 12 should use the current/in-progress visual state.

When Day 12 is completed:
- Day 12 should change to the completed GREEN state.

Example concept:

Incomplete:
Day 12 = current/purple

Completed:
Day 12 = green

Do not change the existing design unnecessarily.

The completed state should be visually obvious but subtle.

━━━━━━━━━━━━━━━━━━━━━━
5. JOIN CHALLENGE BUTTON
━━━━━━━━━━━━━━━━━━━━━━

The landing page "Join Challenge" button currently links to:

#join

Change it so it navigates to:

/dashboard

Use the existing React Router Link.

Do not create authentication.

The desired flow is:

Landing → Join Challenge → Dashboard

━━━━━━━━━━━━━━━━━━━━━━
6. FIRST-DAY / DAY-0 EDGE CASE
━━━━━━━━━━━━━━━━━━━━━━

The application should support a first-day state.

Create a clean way to test this without permanently changing the default demo state.

Support:

currentDay: 1
currentStreak: 0
completedDays: []

Dashboard should then show:

"Your journey starts today."

Day:
1 / 60

Streak:
0 days

Completion:
0%

No previous activity.

No unlocked achievements.

Do not make this the default state.

The default demo should remain Day 12 with the polished active-student experience.

━━━━━━━━━━━━━━━━━━━━━━
7. TESTING
━━━━━━━━━━━━━━━━━━━━━━

Test this exact flow:

1. Open /
2. Click Join Challenge
3. Confirm it navigates to /dashboard
4. Open /day/12
5. Submit GitHub proof
6. Submit LinkedIn proof
7. Complete Day 12
8. Navigate back to /dashboard
9. Confirm dashboard reflects completion
10. Confirm Day 12 changes to green
11. Refresh the browser
12. Confirm state remains correct

Also test:

- Empty localStorage / first-day state
- Page refresh
- Direct navigation to /dashboard
- Direct navigation to /day/12

Do not introduce authentication or backend functionality.

Prompt 15:

Fix the ChallengeDay page so /day/:dayNumber correctly displays data based on the URL parameter.

IMPORTANT:
Do not redesign the existing UI.
Do not change the styling.
Only fix the data/state logic.

Currently, when I open:

/day/0

the header correctly says "Day 0 of 60", but the rest of the page still shows Day 12 data such as:

- 12 Day Streak
- 20% through the challenge
- Habit Tracker
- 12 Day Streak Maintained

This means some values are hardcoded.

Requirements:

1. Read the day number dynamically from the React Router URL using useParams().

Example:

const { dayNumber } = useParams();

Convert it to a number where necessary.

2. Create/use mock challenge data based on the day number.

For example:

Day 0:
- title: "Start Your Journey"
- streak: 0
- progress: 0%
- completion message should NOT claim that Day 0 was completed
- no "12 Day Streak Maintained"

Day 12:
- title: "Build a Habit Tracker"
- streak: 12
- progress: 20%
- show the existing Day 12 completion information when Day 12 is actually completed

3. IMPORTANT:
Do not simply replace "12" with dayNumber everywhere.

Values such as streak, progress, title, description, difficulty, estimated time, and completion status should come from the appropriate mock data/state.

4. Handle Day 0 as a FIRST-DAY / EMPTY state.

When visiting:

/day/0

show an appropriate first-day experience such as:

"Day 0"
"Your journey hasn't started yet."

or an equivalent message matching the existing design.

Do NOT show:

"Day 0 Complete!"

unless Day 0 has actually been marked complete.

Do NOT show:
"20% through the challenge."

Do NOT show:
"12 Day Streak Maintained."

5. The default hackathon demo must remain Day 12.

Visiting:

/day/12

should continue to show the polished Day 12 Habit Tracker experience.

6. Keep the existing dark/light theme functionality.

7. Keep the existing responsive design.

8. Test these URLs:

/day/0
/day/1
/day/12

Expected behavior:

/day/0 → first-day/empty state
/day/1 → Day 1 challenge
/day/12 → existing Habit Tracker challenge

Do not add a backend or authentication.
Use mock data/localStorage only.

Prompt 16:
The route parameter is working correctly, but the ChallengeDay completion screen is still using hardcoded Day 12 state.

I tested /day/1 and it currently shows:
- Day 1 of 60
- 12 Day Streak
- 20% through the challenge
- 12 Day Streak Maintained
- Day 1 Complete even though Day 1 has not been completed

Fix the DATA LOGIC only. Do not redesign anything.

Requirements:

1. /day/1 must represent a fresh Day 1 state:
- streak: 0
- progress: 0% before completion
- GitHub: Pending
- LinkedIn: Pending
- Day 1 must NOT show "Day 1 Complete" before the user completes it.

2. /day/12 must continue using the existing Day 12 mock state:
- 12 day streak
- 20% progress
- Habit Tracker task
- existing completed state only if Day 12 has actually been completed.

3. Do not hardcode these values anywhere in the rendered JSX:
- 12 Day Streak
- 20%
- 12 Day Streak Maintained
- Habit Tracker

These should come from the current challenge/progress data.

4. The completion screen should only appear when the current day is actually marked completed in the shared localStorage state.

5. If the user visits /day/1 without completing it, show the normal challenge/task screen, NOT the completion screen.

6. If the user visits /day/12 and Day 12 is already completed in localStorage, show the existing completion screen.

7. Keep all existing styling, dark mode, responsiveness, and animations unchanged.

After making the changes, test:
- /day/0
- /day/1
- /day/12

Prompt 17:

Add a "Smart Motivation & Recovery" experience to the existing ABTalks Dashboard.

IMPORTANT:
Do not redesign the existing dashboard.
Do not change the current layout, spacing, typography, colors, cards, navbar, dark mode, or responsive behavior unless absolutely necessary.

This should feel like a natural addition to the existing ABTalks design.

━━━━━━━━━━━━━━━━━━━━━━
GOAL
━━━━━━━━━━━━━━━━━━━━━━

ABTalks is a 60-day coding challenge where students build something every day and maintain a public proof-of-work streak.

Add a contextual motivation/recovery card that changes based on the student's current progress.

The card should feel thoughtful and useful rather than like a generic motivational quote.

━━━━━━━━━━━━━━━━━━━━━━
STATE 1 — FIRST DAY
━━━━━━━━━━━━━━━━━━━━━━

When the student has:

currentDay: 1
currentStreak: 0
completedDays: []

Show a welcoming state such as:

🌱 YOUR JOURNEY STARTS HERE

"Everyone starts somewhere."

"Complete your first challenge and start building your public proof of work."

Primary action:
"Start Day 1"

Clicking it should navigate to:

/day/1

Do not show a streak as if the student already has one.

━━━━━━━━━━━━━━━━━━━━━━
STATE 2 — ACTIVE STREAK
━━━━━━━━━━━━━━━━━━━━━━

For an active student, for example:

currentDay: 12
currentStreak: 12

Show:

🔥 12 DAY STREAK

"You're building momentum."

"12 days of showing up. Keep the streak alive."

Include a subtle visual indicator of the streak.

The message should dynamically use the actual streak value rather than hardcoding 12.

Primary action:

"Continue Challenge"

which navigates to the current challenge day.

━━━━━━━━━━━━━━━━━━━━━━
STATE 3 — MISSED DAY
━━━━━━━━━━━━━━━━━━━━━━

If the student has missed a challenge day, show a recovery state.

Example:

⚡ GET BACK ON TRACK

"You missed yesterday. That's okay."

"One missed day doesn't erase your progress. Complete today's challenge and keep moving forward."

Primary action:

"Get Back on Track"

which navigates to the current challenge day.

Do NOT use negative language such as:
- Failed
- Lost everything
- Streak ruined
- You failed

The experience should encourage the student to return.

━━━━━━━━━━━━━━━━━━━━━━
STATE 4 — RECOVERY AVAILABLE
━━━━━━━━━━━━━━━━━━━━━━

If the mock progress state supports recovery, show a subtle recovery indicator:

"Recovery available"

and explain briefly:

"Complete today's challenge to continue your journey."

Keep this visually secondary to the main message.

━━━━━━━━━━━━━━━━━━━━━━
DYNAMIC DATA
━━━━━━━━━━━━━━━━━━━━━━

Do NOT hardcode:

12 day streak
Day 12
20%
etc.

Read the existing shared progress state/localStorage that the Dashboard and ChallengeDay already use.

The motivation card should react to the same state.

There must NOT be a separate independent state for this card.

━━━━━━━━━━━━━━━━━━━━━━
DESIGN
━━━━━━━━━━━━━━━━━━━━━━

Match the existing ABTalks dashboard design.

Use the existing:
- Tailwind classes
- typography
- spacing system
- rounded corners
- shadows
- dark/light theme
- existing icon library

Use lucide-react icons where appropriate.

Possible icons:
- Sprout for first day
- Flame for active streak
- RotateCcw or Zap for recovery

Do not introduce a new visual design system.

The card should be visually noticeable but should NOT overpower the main streak/progress cards.

━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVENESS
━━━━━━━━━━━━━━━━━━━━━━

The dashboard is designed mobile-first.

At 390px:
- No horizontal overflow
- Text should wrap naturally
- Buttons should remain tappable
- Card should fit the viewport
- Do not make the dashboard wider

Ensure the card also looks good on desktop.

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

Do not add:
- backend
- database
- authentication
- GitHub API
- LinkedIn API

Use the existing mock/localStorage progress system.

Do not modify unrelated components.

After implementation, test:

1. Fresh student / Day 1
2. Active 12-day streak
3. Missed day
4. Dark mode
5. Light mode
6. 390px mobile viewport
7. Navigation buttons
8. Browser refresh
9. Keep the existing dashboard exactly as it is visually. 
10. Only integrate the new Smart Motivation & Recovery card.

Prompt 18:

Add a polished "Day Completion Celebration" experience to the existing ABTalks Challenge Day page.

IMPORTANT:
Do not redesign the existing Challenge Day page.
Do not change the current layout, typography, colors, spacing, dark/light mode, or responsive behavior.
Only add the completion experience to the existing flow.

━━━━━━━━━━━━━━━━━━━━━━
GOAL
━━━━━━━━━━━━━━━━━━━━━━

When a student successfully completes the current challenge day by submitting the required proof of work, make the completion feel rewarding and meaningful.

The celebration should feel premium and subtle, not childish or excessive.

━━━━━━━━━━━━━━━━━━━━━━
WHEN TO TRIGGER
━━━━━━━━━━━━━━━━━━━━━━

Only trigger the celebration after ALL required completion conditions are satisfied.

For the current challenge day:

- GitHub proof submitted
- LinkedIn proof submitted
- Required task/progress conditions completed
- Day marked as completed in the existing shared localStorage progress state

Do NOT show the celebration simply because the user opened /day/12.

Do NOT show "Day Complete" before the student actually completes the day.

━━━━━━━━━━━━━━━━━━━━━━
COMPLETION UI
━━━━━━━━━━━━━━━━━━━━━━

After successful completion, show a polished success state.

Example content:

🔥
Day 12 Complete!

"12 days.
12 commits.
You're building something bigger
than a project — you're building consistency."

Then show a compact proof summary:

✓ GitHub Commit Added
✓ LinkedIn Post Shared
✓ 12 Day Streak Maintained

The day number and streak must come from the existing progress state.

Do NOT hardcode "12" in the component.

━━━━━━━━━━━━━━━━━━━━━━
ANIMATION
━━━━━━━━━━━━━━━━━━━━━━

Add a subtle entrance animation when the completion state appears.

Possible effects:
- icon scale/fade in
- card fade/slide up
- subtle pulse around the success icon

Optionally add a very small amount of tasteful confetti.

IMPORTANT:
Do NOT use an excessive full-screen confetti effect.
The existing ABTalks design is minimal and premium.

The animation should complete quickly and should not interfere with usability.

━━━━━━━━━━━━━━━━━━━━━━
CONTINUE BUTTON
━━━━━━━━━━━━━━━━━━━━━━

Add a clear primary action:

"Continue to Dashboard"

Clicking it should navigate to:

/dashboard

The Dashboard must then display the updated progress.

For example:

- completed day becomes green
- streak updates
- GitHub status becomes submitted
- LinkedIn status becomes shared
- progress percentage updates

━━━━━━━━━━━━━━━━━━━━━━
PERSISTENCE
━━━━━━━━━━━━━━━━━━━━━━

Use the existing shared localStorage progress system.

Do NOT create another independent completion state.

After:

1. Complete Day
2. See celebration
3. Navigate to Dashboard
4. Refresh Dashboard
5. Return to /day/12

The completion state must remain consistent.

━━━━━━━━━━━━━━━━━━━━━━
REPEAT VISITS
━━━━━━━━━━━━━━━━━━━━━━

If the day is already completed and the user revisits /day/12:

Do NOT replay the full celebration every time.

Instead, show the existing completed state.

The celebration animation should primarily happen immediately after completing the day.

━━━━━━━━━━━━━━━━━━━━━━
DYNAMIC DAYS
━━━━━━━━━━━━━━━━━━━━━━

This must work with the existing dynamic route:

/day/:dayNumber

For example:

/day/1 → Day 1 Complete
/day/12 → Day 12 Complete

Do not hardcode Day 12 into the completion logic.

━━━━━━━━━━━━━━━━━━━━━━
DARK MODE
━━━━━━━━━━━━━━━━━━━━━━

The completion state must support the existing global dark/light mode.

Light mode:
- existing light design language

Dark mode:
- existing dark background
- existing yellow/golden accent system

Do not introduce a new theme.

━━━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━━━

The hackathon judges use a 390px viewport.

At 390px:
- celebration card must fit completely
- no horizontal overflow
- buttons must remain easily tappable
- text must wrap naturally
- animation must remain smooth

━━━━━━━━━━━━━━━━━━━━━━
TESTING
━━━━━━━━━━━━━━━━━━━━━━

Test:

1. Open /day/12 before completion
2. Confirm completion celebration is NOT visible
3. Submit GitHub proof
4. Submit LinkedIn proof
5. Complete the challenge
6. Confirm celebration appears
7. Confirm streak/progress uses the actual values
8. Click "Continue to Dashboard"
9. Confirm Dashboard reflects completion
10. Refresh the browser
11. Return to /day/12
12. Confirm completed state remains
13. Confirm celebration does not replay unnecessarily
14. Test light mode
15. Test dark mode
16. Test at 390px

Do not add backend, authentication, database, GitHub API, or LinkedIn API.

Prompt 19:

Add a polished "Next Up" section to the existing ABTalks Dashboard.

IMPORTANT:
Do not redesign the existing Dashboard.
Do not change the current navbar, existing cards, typography, spacing, colors, dark/light mode, or responsive behavior.
Only add the new Next Up experience.

━━━━━━━━━━━━━━━━━━━━━━
GOAL
━━━━━━━━━━━━━━━━━━━━━━

After a student completes the current challenge day, the Dashboard should clearly tell them what comes next.

The experience should communicate:

"You finished today's work. Here's what's waiting for you next."

It should make the 60-day journey feel continuous.

━━━━━━━━━━━━━━━━━━━━━━
ACTIVE STUDENT STATE
━━━━━━━━━━━━━━━━━━━━━━

For example, if:

currentDay: 12
day12Completed: true

show:

NEXT UP

Day 13

"Keep the momentum going."

Then show a short preview of the next challenge, for example:

"Build a responsive weather dashboard"

Include useful metadata such as:

- Day 13
- Estimated time
- Difficulty
- Short task description

Use realistic mock data.

Do NOT make the content overly detailed.

━━━━━━━━━━━━━━━━━━━━━━
PRIMARY ACTION
━━━━━━━━━━━━━━━━━━━━━━

Add a primary button:

"Preview Day 13"

Clicking it should navigate to:

/day/13

The route must use the existing dynamic:

/day/:dayNumber

Do not create a separate route specifically for Day 13.

━━━━━━━━━━━━━━━━━━━━━━
CURRENT DAY NOT COMPLETED
━━━━━━━━━━━━━━━━━━━━━━

If the current challenge has NOT been completed, do not make the Next Up card appear as if the student can skip ahead.

Instead show:

"Finish today's challenge first"

with a button:

"Continue Day 12"

which navigates to:

/day/12

The exact day number must come from the existing progress state.

━━━━━━━━━━━━━━━━━━━━━━
DYNAMIC BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━

Do NOT hardcode Day 13.

Calculate the next day from the existing progress state.

Examples:

Current day = 1
Completed = false

→ "Continue Day 1"

Current day = 12
Completed = true

→ "Day 13"

Current day = 25
Completed = true

→ "Day 26"

Use the existing shared localStorage progress state.

Do NOT create a separate state system.

━━━━━━━━━━━━━━━━━━━━━━
DAY 60 EDGE CASE
━━━━━━━━━━━━━━━━━━━━━━

If:

currentDay = 60
Day 60 is completed

do NOT show:

"Day 61"

Instead show a final completion state such as:

🏆 CHALLENGE COMPLETE

"You completed the 60-day challenge."

Include a suitable CTA such as:

"View Your Journey"

Do not create a Day 61 route.

━━━━━━━━━━━━━━━━━━━━━━
DESIGN
━━━━━━━━━━━━━━━━━━━━━━

Match the existing ABTalks visual language.

Use:
- existing Tailwind styling
- existing rounded card style
- existing typography
- existing shadows
- existing dark/light theme
- lucide-react icons

Possible icons:

ArrowRight
CalendarDays
Clock
Trophy

Keep the card premium and minimal.

Do not make it larger than the main dashboard content.

━━━━━━━━━━━━━━━━━━━━━━
DARK MODE
━━━━━━━━━━━━━━━━━━━━━━

The component must work with the existing global theme.

Light mode:
Use the existing light design.

Dark mode:
Use the existing dark background and yellow/golden accent system.

Do not introduce another theme.

━━━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━━━

The judges use a 390px viewport.

At 390px:

- no horizontal overflow
- card fits completely
- text wraps naturally
- button remains tappable
- metadata does not overflow
- no layout break

Also verify desktop responsiveness.

━━━━━━━━━━━━━━━━━━━━━━
TESTING
━━━━━━━━━━━━━━━━━━━━━━

Test these states:

1. Day 12 not completed
   → Continue Day 12

2. Day 12 completed
   → Next Up: Day 13

3. Navigate to Day 13
   → /day/13

4. Refresh Dashboard
   → state remains correct

5. Test Day 60 completed
   → Challenge Complete state
   → no Day 61

6. Test light mode

7. Test dark mode

8. Test at 390px

Do not add:
- backend
- database
- authentication
- GitHub API
- LinkedIn API

Use the existing mock/localStorage progress system.

Prompt 20:

Add a polished "Proof of Work" timeline to the existing ABTalks Dashboard.

IMPORTANT:
Do not redesign the existing Dashboard.
Do not change the existing navbar, cards, typography, spacing, colors, dark/light mode, or responsive behavior.
Only add the new Proof of Work timeline.

━━━━━━━━━━━━━━━━━━━━━━
GOAL
━━━━━━━━━━━━━━━━━━━━━━

ABTalks is about building consistency through daily coding and publicly showing proof of work.

Create a timeline that visually shows the student's journey through the challenge.

The timeline should answer:

"What have I actually accomplished so far?"

It should feel like a mini activity history rather than a generic list.

━━━━━━━━━━━━━━━━━━━━━━
SECTION
━━━━━━━━━━━━━━━━━━━━━━

Title:

PROOF OF WORK

Subtitle:

"Your journey, one day at a time."

Add a subtle GitHub/activity-style visual identity using lucide-react icons.

━━━━━━━━━━━━━━━━━━━━━━
TIMELINE ITEMS
━━━━━━━━━━━━━━━━━━━━━━

Each completed challenge should appear as a timeline entry.

Example:

✓ Day 12
  Habit Tracker

  GitHub Commit Added
  LinkedIn Post Shared

  Aug 8, 2026

────────────

✓ Day 11
  Build a Search & Filter App

  GitHub Commit Added
  LinkedIn Post Shared

  Aug 7, 2026

────────────

✓ Day 10
  Weather Dashboard

  GitHub Commit Added
  LinkedIn Post Shared

  Aug 6, 2026

Use realistic mock challenge names and dates.

Do NOT hardcode these values directly into the rendered JSX.

Use an array of challenge/activity data.

━━━━━━━━━━━━━━━━━━━━━━
DATA STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━

Create a clean data structure similar to:

const proofOfWork = [
  {
    day: 12,
    title: "Habit Tracker",
    github: true,
    linkedin: true,
    completed: true,
    date: "Aug 8, 2026",
  },
  ...
];

Adapt this to the existing progress/localStorage structure instead of creating a conflicting state system.

━━━━━━━━━━━━━━━━━━━━━━
DYNAMIC PROGRESS
━━━━━━━━━━━━━━━━━━━━━━

The timeline must use the same shared progress state already used by:

- Dashboard
- ChallengeDay
- streak
- completion state
- Next Up

Do NOT create an independent localStorage system.

When a student completes a new day:

1. Complete the challenge
2. GitHub proof is submitted
3. LinkedIn proof is submitted
4. Day becomes completed
5. Return to Dashboard

The newly completed day should appear in the Proof of Work timeline.

━━━━━━━━━━━━━━━━━━━━━━
EMPTY STATE
━━━━━━━━━━━━━━━━━━━━━━

If the student has completed zero days, do not show an empty broken-looking timeline.

Show:

YOUR JOURNEY STARTS HERE 🌱

"No proof of work yet."

"Complete your first challenge and your progress will appear here."

Add a button:

"Start Day 1"

Navigate to:

/day/1

━━━━━━━━━━━━━━━━━━━━━━
ACTIVE / INCOMPLETE DAYS
━━━━━━━━━━━━━━━━━━━━━━

Do not present incomplete days as completed proof of work.

Completed days should use:

✓ Completed
GitHub Commit Added
LinkedIn Post Shared

An incomplete/current day can optionally appear as:

○ In Progress
Continue Challenge

But do not falsely show GitHub or LinkedIn proof before it has been submitted.

━━━━━━━━━━━━━━━━━━━━━━
TIMELINE DESIGN
━━━━━━━━━━━━━━━━━━━━━━

Create a vertical timeline.

Example structure:

        ✓
        │
Day 12 ─┤ Habit Tracker
        │ GitHub Commit Added
        │ LinkedIn Post Shared
        │
        ✓
        │
Day 11 ─┤ Search & Filter
        │ GitHub Commit Added
        │ LinkedIn Post Shared

Use:

- a vertical connecting line
- circular day/status indicators
- subtle completed-state styling
- clear hierarchy between day, challenge title, proof, and date

Use lucide-react icons such as:

- GitCommit
- Linkedin
- Check
- CalendarDays

Do not use emoji as the primary visual system if lucide-react can represent the same concept.

━━━━━━━━━━━━━━━━━━━━━━
LINKS
━━━━━━━━━━━━━━━━━━━━━━

If the existing app has GitHub/LinkedIn proof links available, make the relevant proof indicators clickable.

GitHub:

"View Commit"

LinkedIn:

"View Post"

If real URLs are not available in the existing mock data, use a disabled/non-clickable state or appropriate placeholder behavior.

Do NOT invent fake external URLs.

━━━━━━━━━━━━━━━━━━━━━━
LIMIT THE INITIAL LIST
━━━━━━━━━━━━━━━━━━━━━━

Do not make the dashboard extremely long.

Initially show the latest 5 proof-of-work entries.

If more than 5 completed days exist, add:

"View Full Journey →"

This can expand the timeline or reveal the remaining entries.

Keep the interaction simple.

━━━━━━━━━━━━━━━━━━━━━━
DARK MODE
━━━━━━━━━━━━━━━━━━━━━━

The timeline must fully support the existing global dark/light mode.

Light mode:
Use the existing ABTalks light design.

Dark mode:
Use the existing dark background with the existing yellow/golden accent system.

Completed indicators should remain clearly visible in both themes.

Do not introduce a new theme.

━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVENESS
━━━━━━━━━━━━━━━━━━━━━━

The judges will test at 390px.

At 390px:

- no horizontal overflow
- timeline remains readable
- day number doesn't collide with content
- GitHub/LinkedIn labels don't overflow
- dates wrap naturally if necessary
- buttons remain tappable
- timeline line stays aligned

Also verify desktop layout.

━━━━━━━━━━━━━━━━━━━━━━
VISUAL STYLE
━━━━━━━━━━━━━━━━━━━━━━

The timeline should feel:

- premium
- clean
- motivating
- professional
- consistent with the existing ABTalks dashboard

Do not make it look like a generic admin dashboard.

The purpose is to make the student think:

"I can see everything I've built so far."

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

Do not add:

- backend
- database
- authentication
- real GitHub API
- real LinkedIn API
- new state management library

Use the existing React state/localStorage/mock progress architecture.

Do not modify unrelated components.

━━━━━━━━━━━━━━━━━━━━━━
TESTING
━━━━━━━━━━━━━━━━━━━━━━

Test:

1. Fresh student with 0 completed days
2. Student with Day 1 completed
3. Student with Day 12 completed
4. Multiple completed days
5. Complete a new challenge
6. Return to Dashboard
7. Confirm new proof appears in timeline
8. Refresh browser
9. Confirm timeline persists
10. Test light mode
11. Test dark mode
12. Test 390px viewport
13. Confirm no horizontal scrolling
14. Confirm incomplete days are not falsely shown as completed
15. Confirm existing Dashboard features still work

Prompt 21:

Fix the ABTalks Dashboard progress/state synchronization.

IMPORTANT:
Do not redesign the Dashboard.
Do not change the existing UI design, layout, typography, colors, dark/light mode, spacing, or responsive behavior.

This is a FUNCTIONAL STATE FIX only.

━━━━━━━━━━━━━━━━━━━━━━
CURRENT PROBLEM
━━━━━━━━━━━━━━━━━━━━━━

The Dashboard is showing inconsistent progress data for a fresh Day 1 user.

For example, it currently shows:

- 0 Day Streak
- Longest: 12 days
- Journey: 1 / 60
- 59 Remaining
- 0%
- Main challenge: Day 12
- Action card: Continue Day 1
- Journey card: Start Day 1

These values are coming from different pieces of state.

They must all derive from ONE shared progress state.

━━━━━━━━━━━━━━━━━━━━━━
SOURCE OF TRUTH
━━━━━━━━━━━━━━━━━━━━━━

Use the existing progress/localStorage system already used by the application.

Do NOT create another independent progress state.

The following values should be derived from the same source:

- currentDay
- completedDays
- currentStreak
- longestStreak
- nextDay
- challenge completion status
- GitHub proof status
- LinkedIn proof status

Inspect the existing implementation first and reuse the existing state structure wherever possible.

Do not unnecessarily rewrite the application's state architecture.

━━━━━━━━━━━━━━━━━━━━━━
FRESH USER STATE
━━━━━━━━━━━━━━━━━━━━━━

For a brand-new user with no completed challenges:

completedDays = []

currentStreak = 0
longestStreak = 0
currentDay = 1
nextDay = 1

The Dashboard must show:

0 Day Streak
Longest: 0 days

Journey:

0 / 60
60 REMAINING
0%

Today's Challenge:

Day 1 — [existing Day 1 challenge]

Action:

Start Day 1

Do NOT show Day 12 for a fresh user.

━━━━━━━━━━━━━━━━━━━━━━
AFTER DAY 1 COMPLETION
━━━━━━━━━━━━━━━━━━━━━━

When Day 1 is successfully completed:

completedDays should contain Day 1.

Then Dashboard should automatically show:

1 Day Streak

Longest: 1 day

Journey:

1 / 60
59 REMAINING
approximately 2%

Next challenge:

Day 2

The current/next challenge must update consistently.

The Proof of Work timeline should show Day 1.

━━━━━━━━━━━━━━━━━━━━━━
AFTER DAY 12 COMPLETION
━━━━━━━━━━━━━━━━━━━━━━

If Days 1–12 are completed:

currentStreak = 12
longestStreak = 12
completedDays = [1 ... 12]

Dashboard should show:

12 Day Streak

Longest: 12 days

Journey:

12 / 60
48 REMAINING
20%

Next challenge:

Day 13

Proof of Work should contain the completed days.

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT: DO NOT HARD-CODE VALUES
━━━━━━━━━━━━━━━━━━━━━━

Do not fix this by changing JSX text from:

"12 Day Streak"

to:

"0 Day Streak"

The displayed values must be calculated from the actual progress state.

Do not hardcode:

Day 1
Day 12
12 days
59 remaining
20%

These should all be derived dynamically.

━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE SELECTION
━━━━━━━━━━━━━━━━━━━━━━

The Dashboard's "Today's Challenge" must always correspond to the user's actual current challenge.

Examples:

Fresh user:
→ Day 1

Day 1 completed:
→ Day 2

Day 11 completed:
→ Day 12

Day 12 completed:
→ Day 13

Do not allow the Dashboard to display Day 12 while the action button says Day 1.

━━━━━━━━━━━━━━━━━━━━━━
STREAK LOGIC
━━━━━━━━━━━━━━━━━━━━━━

Use the existing streak implementation if one already exists.

For the initial mock/demo implementation:

- no completed days → 0 streak
- consecutive completed days → consecutive streak
- longest streak should reflect the user's actual completed history

Do not preserve "12" as the longest streak for a fresh user unless it actually exists in the stored progress.

━━━━━━━━━━━━━━━━━━━━━━
JOURNEY PROGRESS
━━━━━━━━━━━━━━━━━━━━━━

Calculate progress from completed challenge days.

Formula:

completedDays / 60 * 100

Examples:

0 completed → 0%
1 completed → approximately 2%
12 completed → 20%
30 completed → 50%
60 completed → 100%

Remaining:

60 - completedDays

Make sure the progress bar, percentage, and completed-day indicators all use the same value.

━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━

Achievements should also respect the same progress state.

Fresh user:

First 7 Days → locked
10 Day Streak → locked
First Project → locked unless actually completed
Halfway Hero → locked

After completing 7 consecutive days:

First 7 Days → unlocked

After 10 consecutive days:

10 Day Streak → unlocked

Do not show achievements as completed just because mock text exists.

━━━━━━━━━━━━━━━━━━━━━━
PROOF OF WORK
━━━━━━━━━━━━━━━━━━━━━━

The Proof of Work timeline must use the same completedDays state.

Fresh user:

Show the empty state:

"Your journey starts here."

After Day 1:

Show Day 1.

After Day 12:

Show the latest completed days, including Day 12.

Do not create a separate completed-days array for the timeline.

━━━━━━━━━━━━━━━━━━━━━━
LOCALSTORAGE / REFRESH
━━━━━━━━━━━━━━━━━━━━━━

The state must remain correct after browser refresh.

Test:

1. Open Dashboard as a fresh user
2. Confirm Day 1 state
3. Complete Day 1
4. Return to Dashboard
5. Confirm Day 2 state
6. Refresh browser
7. Confirm Day 2 state remains
8. Complete another day
9. Confirm progress updates again

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT EDGE CASE
━━━━━━━━━━━━━━━━━━━━━━

Do not break the existing /day/:dayNumber routes.

These must continue working:

/day/0
/day/1
/day/2
...
/day/60

However, the Dashboard should only present the appropriate current/next day based on progress.

Do not remove existing routes.

━━━━━━━━━━━━━━━━━━━━━━
DO NOT CHANGE
━━━━━━━━━━━━━━━━━━━━━━

Do not modify:

- navbar
- hero
- FAQ
- footer
- landing page
- dark/light mode
- existing challenge page design
- existing completion celebration
- existing Next Up UI

Only fix the underlying progress synchronization and the Dashboard values that depend on it.

━━━━━━━━━━━━━━━━━━━━━━
FINAL TEST
━━━━━━━━━━━━━━━━━━━━━━

Before finishing, verify these exact scenarios:

SCENARIO A — NEW USER

Streak: 0
Longest: 0
Progress: 0/60
Remaining: 60
Today's challenge: Day 1
Action: Start Day 1

SCENARIO B — DAY 1 COMPLETE

Streak: 1
Longest: 1
Progress: 1/60
Remaining: 59
Next challenge: Day 2
Proof of Work: Day 1

SCENARIO C — DAYS 1–12 COMPLETE

Streak: 12
Longest: 12
Progress: 12/60
Remaining: 48
Next challenge: Day 13
Proof of Work: latest completed days

Make sure every section is reading from the same progress state.

Prompt 22:

Fix the streak synchronization on the Challenge Day page.

IMPORTANT:
Do not redesign the Challenge Day page.
Do not change its layout, typography, colors, spacing, dark/light mode, or responsive behavior.

This is a FUNCTIONAL STATE SYNCHRONIZATION FIX.

━━━━━━━━━━━━━━━━━━━━━━
CURRENT BUG
━━━━━━━━━━━━━━━━━━━━━━

I have completed Days 1–7 and am now on:

/day/8

The Challenge Day page correctly shows:

Day 8 of 60

But the top-right streak badge incorrectly shows:

🔥 0 Day Streak

This is wrong.

If Days 1–7 are completed consecutively, the Challenge Day page must show:

🔥 7 Day Streak

The streak displayed in the Challenge Day header must come from the SAME shared progress state used by the Dashboard.

━━━━━━━━━━━━━━━━━━━━━━
SINGLE SOURCE OF TRUTH
━━━━━━━━━━━━━━━━━━━━━━

Inspect the existing progress/localStorage implementation.

Do NOT create another streak state.

Do NOT initialize the Challenge Day streak with:

useState(0)

or any hardcoded value that overrides the stored progress.

Read the existing:

- completedDays
- currentStreak
- longestStreak

from the same shared progress/localStorage system used by the Dashboard.

If the Dashboard already calculates the streak correctly, reuse that logic rather than creating a second implementation.

━━━━━━━━━━━━━━━━━━━━━━
EXPECTED BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━

Fresh user:

/day/1

→ 🔥 0 Day Streak

After completing Day 1:

/day/2

→ 🔥 1 Day Streak

After completing Days 1–7:

/day/8

→ 🔥 7 Day Streak

After completing Day 8:

/day/9

→ 🔥 8 Day Streak

After completing Days 1–12:

/day/13

→ 🔥 12 Day Streak

The value must always match the Dashboard.

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT DISTINCTION
━━━━━━━━━━━━━━━━━━━━━━

The current challenge day and the current streak are different values.

For example:

currentDay = 8
currentStreak = 7

Therefore the UI should show:

Day 8 of 60
🔥 7 Day Streak

Do NOT calculate the streak simply as:

currentDay - 1

Use the actual completed-day history/progress state.

━━━━━━━━━━━━━━━━━━━━━━
COMPLETION FLOW
━━━━━━━━━━━━━━━━━━━━━━

When a student completes Day 7:

1. Day 7 becomes completed
2. completedDays updates
3. streak becomes 7
4. Dashboard reflects 7
5. Navigating to /day/8 must also reflect 7

When Day 8 is completed:

1. Day 8 becomes completed
2. streak becomes 8
3. Dashboard reflects 8
4. Navigating to /day/9 must show 8

Make sure the state is persisted before navigating to the next page.

━━━━━━━━━━━━━━━━━━━━━━
REFRESH TEST
━━━━━━━━━━━━━━━━━━━━━━

This must survive a browser refresh.

Test:

1. Complete Days 1–7
2. Navigate to /day/8
3. Confirm "7 Day Streak"
4. Refresh /day/8
5. Confirm it still says "7 Day Streak"
6. Navigate back to Dashboard
7. Confirm Dashboard also says "7 Day Streak"

━━━━━━━━━━━━━━━━━━━━━━
DO NOT BREAK
━━━━━━━━━━━━━━━━━━━━━━

Do not modify:

- Dashboard design
- navbar
- landing page
- Hero
- FAQ
- Footer
- Proof of Work timeline
- Next Up
- completion celebration
- dark/light mode
- existing /day/:dayNumber routing

Only fix the Challenge Day streak state.

━━━━━━━━━━━━━━━━━━━━━━
FINAL CONSISTENCY CHECK
━━━━━━━━━━━━━━━━━━━━━━

The following three places must always agree:

Dashboard:
🔥 X Day Streak

Challenge Day:
🔥 X Day Streak

Completion screen:
🔥 X Day Streak Maintained

All three must derive X from the same progress state.

Do not hardcode 7, 8, 12, or any other streak value.

Prompt 23:

Fix the Challenge Day streak so it is truly dynamic and NEVER hardcoded.

IMPORTANT:
The streak must NOT come from the URL day number.

For example, if I manually enter:

/day/8

the page should NOT automatically assume the streak is 7.

If I manually enter:

/day/20

it should still calculate the user's REAL streak from the existing progress state.

━━━━━━━━━━━━━━━━━━━━━━
CORRECT LOGIC
━━━━━━━━━━━━━━━━━━━━━━

There are TWO completely separate values:

1. Challenge day
   → comes from the URL

2. User streak
   → comes from the shared progress state

Example:

URL:
/day/8

Progress:
completedDays = [1, 2, 3, 4, 5, 6, 7]

Result:

Day 8 of 60
🔥 7 Day Streak


Another example:

URL:
/day/20

Progress:
completedDays = [1, 2, 3, 4, 5, 6, 7]

Result:

Day 20 of 60
🔥 7 Day Streak


Another example:

URL:
/day/20

Progress:
completedDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Result:

Day 20 of 60
🔥 12 Day Streak

━━━━━━━━━━━━━━━━━━━━━━
DO NOT DO THIS
━━━━━━━━━━━━━━━━━━━━━━

Do NOT use:

const streak = dayNumber - 1;

Do NOT use:

const streak = 7;

Do NOT use:

const streak = Math.min(dayNumber - 1, 7);

Do NOT display a hardcoded:

"7 Day Streak"

Do NOT derive the streak from the URL.

━━━━━━━━━━━━━━━━━━━━━━
USE EXISTING PROGRESS STATE
━━━━━━━━━━━━━━━━━━━━━━

Find the existing progress/localStorage state used by the Dashboard.

Use its:

completedDays
currentStreak
longestStreak

or whatever equivalent properties already exist.

The Challenge Day page must consume that same state.

Do NOT create a second progress system.

Do NOT create a separate ChallengeDay streak state.

━━━━━━━━━━━━━━━━━━━━━━
STREAK CALCULATION
━━━━━━━━━━━━━━━━━━━━━━

If the existing application already has a streak calculation function, reuse it.

If it does not, calculate the current streak from completedDays.

For example:

completedDays = []

→ currentStreak = 0

completedDays = [1]

→ currentStreak = 1

completedDays = [1, 2, 3, 4, 5, 6, 7]

→ currentStreak = 7

completedDays = [1, 2, 3, 4, 5, 6, 7, 8]

→ currentStreak = 8

The calculation must reflect the user's ACTUAL completed challenge history.

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT EDGE CASE
━━━━━━━━━━━━━━━━━━━━━━

If the user has completed:

[1, 2, 3, 4, 5, 7]

then the current consecutive streak should NOT be 6.

Day 6 is missing.

Calculate the streak according to the application's existing streak rules.

Do not simply use:

completedDays.length

unless the existing application explicitly defines streak that way.

━━━━━━━━━━━━━━━━━━━━━━
HEADER
━━━━━━━━━━━━━━━━━━━━━━

The existing header:

Day X of 60

should continue using the URL's day number.

The streak badge:

🔥 X Day Streak

must use the user's actual progress state.

Therefore:

Day 20 of 60
🔥 7 Day Streak

is completely valid.

━━━━━━━━━━━━━━━━━━━━━━
TEST THIS SPECIFICALLY
━━━━━━━━━━━━━━━━━━━━━━

After implementing, manually test these URLs:

/day/1
/day/8
/day/20
/day/50

Do NOT change the stored progress between tests.

The streak number should remain the same if the user's completed history has not changed.

For example, if the stored progress says 7 consecutive completed days:

/day/1 → 7 Day Streak
/day/8 → 7 Day Streak
/day/20 → 7 Day Streak
/day/50 → 7 Day Streak

Only completing another challenge should change the streak.

━━━━━━━━━━━━━━━━━━━━━━
FINAL REQUIREMENT
━━━━━━━━━━━━━━━━━━━━━━

The streak must be completely dynamic.

Changing the URL must ONLY change the challenge being viewed.

It must NEVER change the user's streak.

The Dashboard, Challenge Day page, and completion screen must all read the same streak value from the shared progress state.

Prompt 24:

Fix the proof-of-work state so GitHub and LinkedIn submissions are tracked PER CHALLENGE DAY.

IMPORTANT:
Do not redesign anything.
Do not change the existing UI, layout, styling, dark mode, responsive behavior, routing, or animations.

This is ONLY a state-management/data-persistence fix.

━━━━━━━━━━━━━━━━━━━━━━
CURRENT BUG
━━━━━━━━━━━━━━━━━━━━━━

GitHub and LinkedIn submission status is currently shared globally.

For example, if I submit GitHub + LinkedIn on one day:

/day/8

shows:

GitHub → Submitted
LinkedIn → Post Shared

But when I navigate manually to:

/day/13
/day/20
/day/30

those pages ALSO show:

GitHub → Submitted
LinkedIn → Post Shared

This is incorrect.

Each challenge day must have its own proof-of-work status.

━━━━━━━━━━━━━━━━━━━━━━
REQUIRED DATA MODEL
━━━━━━━━━━━━━━━━━━━━━━

Instead of one global value such as:

githubSubmitted: true
linkedinShared: true

store the proof status associated with the specific day.

Conceptually the state should work like:

proofOfWork = {
  7: {
    githubSubmitted: true,
    linkedinShared: true
  },
  8: {
    githubSubmitted: false,
    linkedinShared: false
  },
  9: {
    githubSubmitted: false,
    linkedinShared: false
  }
}

You can use whatever structure fits the existing application architecture.

DO NOT blindly copy this exact structure if the project already has a progress/state model.

Integrate it into the EXISTING progress/localStorage system.

━━━━━━━━━━━━━━━━━━━━━━
DAY-SPECIFIC BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━

If I submit GitHub on Day 8:

/day/8

GitHub:
Submitted

/day/13

GitHub:
Pending

/day/20

GitHub:
Pending

The submission must belong ONLY to Day 8.

If I then submit LinkedIn on Day 13:

/day/13

GitHub:
Pending

LinkedIn:
Post Shared

While:

/day/8

GitHub:
Submitted

LinkedIn:
Pending

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

The current route parameter:

/day/:dayNumber

must determine which proof-of-work record is displayed.

For example:

const dayNumber = 13

should read:

proofOfWork[13]

or the equivalent structure in the existing state.

Do NOT use one global:

isGithubSubmitted

or:

isLinkedInShared

for every challenge page.

━━━━━━━━━━━━━━━━━━━━━━
SUBMISSION FLOW
━━━━━━━━━━━━━━━━━━━━━━

When the user submits GitHub on Day 8:

1. Read the current day number.
2. Update ONLY Day 8's GitHub status.
3. Persist the updated progress.
4. UI changes to "Submitted".
5. Navigate away and come back.
6. Day 8 still shows "Submitted".

But:

/day/9

must remain "Pending".

Same behavior for LinkedIn.

━━━━━━━━━━━━━━━━━━━━━━
UNDO BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━

The existing "Undo" buttons must also be day-specific.

If I click Undo on:

/day/8

only Day 8 should return to:

GitHub → Pending

It must NOT change the GitHub status of Day 13, Day 20, etc.

━━━━━━━━━━━━━━━━━━━━━━
REFRESH TEST
━━━━━━━━━━━━━━━━━━━━━━

Verify localStorage persistence.

Test:

1. Open /day/8
2. Submit GitHub
3. Refresh
4. GitHub still says Submitted
5. Go to /day/13
6. GitHub says Pending
7. Go back to /day/8
8. GitHub says Submitted

Then:

9. Submit LinkedIn on Day 13
10. Go to /day/8
11. LinkedIn should still be Pending
12. Go to /day/13
13. LinkedIn should say Post Shared

━━━━━━━━━━━━━━━━━━━━━━
DASHBOARD INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━

Make sure this does not break the Dashboard.

If the Dashboard has:

"Today's Proof of Work"

its GitHub/LinkedIn status should correspond to the CURRENT challenge day.

For example, if today's/current day is Day 8:

Dashboard:
GitHub → Submitted
LinkedIn → Pending

If current day is Day 13:

Dashboard:
GitHub → Pending
LinkedIn → Post Shared

Do not make the Dashboard display a global status.

━━━━━━━━━━━━━━━━━━━━━━
COMPLETION LOGIC
━━━━━━━━━━━━━━━━━━━━━━

A challenge day should only be considered fully completed when its required proof/submission conditions are satisfied according to the application's existing rules.

Do not let submitting GitHub on Day 8 automatically make Day 13's GitHub proof complete.

Do not let submitting LinkedIn on Day 8 automatically make Day 13's LinkedIn proof complete.

━━━━━━━━━━━━━━━━━━━━━━
STREAK
━━━━━━━━━━━━━━━━━━━━━━

Do NOT change the existing dynamic streak implementation unless necessary.

The following must remain separate:

currentStreak
completedDays
proofOfWorkByDay

Submitting proof for Day 8 should update Day 8's proof state and only affect completion/streak according to the existing completion rules.

━━━━━━━━━━━━━━━━━━━━━━
FINAL TEST
━━━━━━━━━━━━━━━━━━━━━━

Manually test:

/day/8
/day/13
/day/20

Make sure each route has independent:

GitHub status
LinkedIn status
completion state
reflection/progress state, if applicable

The same submission must NEVER appear on every challenge day.

Use the existing project architecture and state-management approach wherever possible.

Prompt 25:

Add a polished "Personalized Roadmap" feature to the existing ABTalks application.

IMPORTANT:
Do not redesign or break the existing ABTalks landing page, Dashboard, Challenge Day page, navbar, Proof of Work timeline, streak system, dark/light mode, or existing responsive behavior.

This is a NEW feature that should integrate naturally with the existing product.

━━━━━━━━━━━━━━━━━━━━━━
CORE IDEA
━━━━━━━━━━━━━━━━━━━━━━

ABTalks should help students choose what they want to become and then follow a structured learning roadmap.

The experience should communicate:

"Choose your path. Build your skills. Prove your progress."

The roadmap should connect to ABTalks' existing core loop:

Roadmap
↓
Daily Challenge
↓
Build
↓
GitHub Commit + LinkedIn Post
↓
Proof of Work
↓
Progress

Do not make this just a static list of technologies.

━━━━━━━━━━━━━━━━━━━━━━
ROADMAP PAGE
━━━━━━━━━━━━━━━━━━━━━━

Create a dedicated:

/roadmap

route.

At the top show:

"Choose Your Path"

"Tell us what you want to become. We'll help you build the skills and projects to get there."

Then show 6 roadmap options:

1. Frontend Developer
2. Backend Developer
3. Full-Stack Developer
4. AI / ML Engineer
5. Data Science
6. DSA & Competitive Programming

Use clean cards with lucide-react icons.

Each card should contain:

- Icon
- Path name
- Short description
- Approximate learning stages
- "Explore Roadmap" button

Keep the cards visually consistent with the existing ABTalks design.

━━━━━━━━━━━━━━━━━━━━━━
ROADMAP CARD EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━

Frontend Developer

"Build modern, responsive web experiences and become confident with the frontend ecosystem."

Backend Developer

"Learn APIs, databases, authentication and scalable server-side development."

Full-Stack Developer

"Build complete applications from frontend to backend."

AI / ML Engineer

"Learn Python, machine learning fundamentals and build intelligent applications."

Data Science

"Turn data into insights using statistics, Python and machine learning."

DSA & Competitive Programming

"Build strong problem-solving skills and prepare for technical interviews."

These are only starting descriptions.
Keep them concise.

━━━━━━━━━━━━━━━━━━━━━━
ROADMAP DETAIL
━━━━━━━━━━━━━━━━━━━━━━

When a user selects a roadmap, show a detailed roadmap.

Example:

FULL-STACK DEVELOPER

Progress:
32%

8 / 25 milestones completed

Then show stages:

01 — Foundations
✓ HTML & CSS
✓ JavaScript Fundamentals

02 — Frontend
✓ React
○ Advanced React
○ TypeScript

03 — Backend
○ Node.js
○ Express
○ MongoDB

04 — Advanced
○ Authentication
○ APIs
○ Real-time applications

05 — Production
○ Docker
○ Deployment
○ CI/CD

06 — Projects
○ Full-Stack Project
○ Portfolio Project

Use a vertical roadmap/timeline style.

Completed milestones should be visually different from locked/upcoming milestones.

━━━━━━━━━━━━━━━━━━━━━━
PERSONALIZED FEEL
━━━━━━━━━━━━━━━━━━━━━━

The user should feel that this is THEIR roadmap.

Show:

"Your Full-Stack Journey"

"You're currently working on React."

"Next milestone: Advanced React"

The exact wording should dynamically depend on progress.

Do not hardcode:

32%
8 / 25

These should come from the roadmap progress state.

━━━━━━━━━━━━━━━━━━━━━━
PROGRESS
━━━━━━━━━━━━━━━━━━━━━━

Create a roadmap progress model that can track completed milestones.

Conceptually:

roadmapProgress = {
  fullstack: {
    completedMilestones: [...]
  }
}

However, inspect the existing application architecture first.

Do not create conflicting state-management systems.

Persist the selected roadmap and completed milestones using the existing localStorage approach.

After refreshing the browser, the selected roadmap and progress must remain.

━━━━━━━━━━━━━━━━━━━━━━
CONNECT IT TO ABTALKS
━━━━━━━━━━━━━━━━━━━━━━

This is VERY IMPORTANT.

The roadmap should connect to the existing 60-day challenge.

Add a CTA:

"Start a 60-Day Challenge"

or:

"Continue Your Challenge"

If the user already has an active challenge, show:

"Continue Day X"

and navigate to:

/day/X

If they haven't started yet:

"Start Day 1"

and navigate to:

/day/1

Do not create a separate challenge system.

Reuse the existing challenge/progress state.

━━━━━━━━━━━━━━━━━━━━━━
ROADMAP → CHALLENGE
━━━━━━━━━━━━━━━━━━━━━━

Where appropriate, roadmap milestones can have:

"Practice with ABTalks"

or:

"Build this"

button.

Clicking it should take the user into the existing challenge flow.

Do NOT create dozens of new challenge routes.

Reuse:

/day/:dayNumber

where appropriate.

━━━━━━━━━━━━━━━━━━━━━━
ROADMAP SELECTION
━━━━━━━━━━━━━━━━━━━━━━

Allow the user to change their selected roadmap.

Example:

Current path:

Full-Stack Developer

Button:

"Change Path"

This returns them to the roadmap selection screen.

Do not delete their existing challenge/proof-of-work progress when changing roadmap.

The roadmap selection and 60-day challenge progress should be treated as related but separate concepts.

━━━━━━━━━━━━━━━━━━━━━━
EMPTY / FIRST-TIME STATE
━━━━━━━━━━━━━━━━━━━━━━

If the user has never selected a roadmap:

Show:

"What's your goal?"

"Choose a path and start building toward it."

Then show the 6 roadmap cards.

Do not show fake progress for a brand-new user.

━━━━━━━━━━━━━━━━━━━━━━
DARK MODE
━━━━━━━━━━━━━━━━━━━━━━

Use the EXISTING ABTalks dark mode.

Do not create a new theme.

Dark mode should use the existing dark backgrounds and yellow/golden accent system.

Light mode should use the existing light design.

Check:

- cards
- text
- borders
- progress bars
- timeline
- buttons
- icons

Everything must remain readable in both modes.

━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVENESS
━━━━━━━━━━━━━━━━━━━━━━

The application is mobile-first.

At 390px:

- no horizontal scrolling
- cards stack cleanly
- roadmap timeline remains readable
- buttons fit the screen
- progress indicators do not overflow
- text wraps naturally

Also verify tablet and desktop layouts.

━━━━━━━━━━━━━━━━━━━━━━
DESIGN DIRECTION
━━━━━━━━━━━━━━━━━━━━━━

The feature should feel:

- premium
- motivating
- modern
- student-focused
- clean
- consistent with ABTalks

Avoid making it look like a generic LMS or admin dashboard.

Use the existing ABTalks visual language.

Use lucide-react icons.

Avoid excessive animations.

Use subtle hover and transition effects only where appropriate.

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT DATA RULE
━━━━━━━━━━━━━━━━━━━━━━

Do not hardcode user progress into the UI.

For example, do NOT permanently render:

"32%"
"8 / 25"
"React completed"

unless those values actually exist in the user's roadmap progress.

Create sensible initial mock roadmap data, but keep user progress dynamic.

━━━━━━━━━━━━━━━━━━━━━━
ROUTES
━━━━━━━━━━━━━━━━━━━━━━

Add:

/roadmap

If a separate detail route is useful, you may use:

/roadmap/:roadmapId

Otherwise keep the entire experience within /roadmap.

Do not break existing routes:

/
/dashboard
/day/:dayNumber

━━━━━━━━━━━━━━━━━━━━━━
TESTING
━━━━━━━━━━━━━━━━━━━━━━

Test:

1. Fresh user opens /roadmap
2. User sees 6 roadmap choices
3. User selects Full-Stack Developer
4. Full-Stack roadmap opens
5. Progress starts correctly
6. User completes a milestone
7. Progress updates
8. Refresh browser
9. Progress remains
10. Change roadmap
11. Existing challenge progress remains intact
12. Click Continue Challenge
13. Correct /day/:dayNumber opens
14. Test light mode
15. Test dark mode
16. Test 390px mobile
17. Confirm no horizontal overflow
18. Confirm existing Dashboard still works
19. Confirm existing Proof of Work timeline still works
20. Confirm existing streak system still works

Do not modify unrelated components.