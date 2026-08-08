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