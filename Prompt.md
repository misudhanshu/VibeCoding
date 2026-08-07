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

━━━━━━━━━━━━━━━━━━━━━━
2. STREAK + PROGRESS SUMMARY
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

━━━━━━━━━━━━━━━━━━━━━━
3. TODAY'S CHALLENGE
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

━━━━━━━━━━━━━━━━━━━━━━
4. PROOF OF WORK
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

━━━━━━━━━━━━━━━━━━━━━━
5. OVERALL CHALLENGE PROGRESS
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

━━━━━━━━━━━━━━━━━━━━━━
6. ACHIEVEMENTS
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

━━━━━━━━━━━━━━━━━━━━━━
7. RECENT ACTIVITY
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

━━━━━━━━━━━━━━━━━━━━━━
8. EDGE CASE DESIGN
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