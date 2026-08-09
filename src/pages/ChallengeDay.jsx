import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Flame,
  Clock,
  Signal,
  CheckCircle2,
  ArrowDown,
  CheckSquare,
  Square,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useProgress, calculateCurrentStreak } from "../context/ProgressContext";

const INITIAL_TASKS = [
  { id: 1, text: "User can create a habit", done: false },
  { id: 2, text: "User can mark a habit complete", done: false },
  { id: 3, text: "User can delete a habit", done: false },
  { id: 4, text: "Habits persist after refresh", done: false },
  { id: 5, text: "UI works on mobile", done: false },
  { id: 6, text: "Code is pushed to GitHub", done: false },
];

const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "State Management",
  "Local Storage",
  "UI Design",
];

const MISSION_POINTS = [
  "Create a new habit",
  "Mark a habit as completed",
  "View their current habits",
  "Track weekly progress",
  "Remove or edit a habit",
];

const ChallengeDay = () => {
  const { dayId } = useParams();
  const dayNumber = parseInt(dayId || "12", 10);
  const displayDay = dayNumber.toString();
  const { isDark, toggleTheme } = useTheme();
  const { progress, updateSubmission, setProgress, recoverDay, getDayStatus } = useProgress();
  
  const dayStatus = getDayStatus(dayNumber);
  const isMissed = dayStatus === "missed";
  const isRecovered = dayStatus === "recovered";
  
  const dayProof = progress.proofOfWork?.[dayNumber] || {};
  const githubSubmitted = !!dayProof.githubSubmitted;
  const linkedinSubmitted = !!dayProof.linkedinSubmitted;

  const getChallengeData = (day) => {
    if (day === 0) {
      return {
        title: "Start Your Journey",
        difficulty: "Beginner",
        time: "0-1 hours",
        description: "Your journey hasn't started yet. Prepare your workspace and get ready for Day 1.",
        tasks: [{ id: 1, text: "Set up workspace", done: false }],
        skills: ["Preparation"],
        missionPoints: ["Prepare to start"]
      };
    }
    if (day === 12) {
      return {
        title: "Build a Habit Tracker",
        difficulty: "Intermediate",
        time: "2–3 hours",
        description: "Build a habit tracker where users can create habits, mark them complete, and view their weekly progress.",
        tasks: INITIAL_TASKS,
        skills: SKILLS,
        missionPoints: MISSION_POINTS
      };
    }
    return {
      title: `Challenge for Day ${day}`,
      difficulty: "Beginner",
      time: "1-2 hours",
      description: `Complete the daily challenge for day ${day}.`,
      tasks: [{ id: 1, text: "Complete the task", done: false }],
      skills: ["React", "JavaScript"],
      missionPoints: ["Learn basic concepts"]
    };
  };

  const challenge = getChallengeData(dayNumber);
  const currentStreak = calculateCurrentStreak(progress.completedDays);
  const isCompletedDay = progress.completedDays.includes(dayNumber);

  // States
  const [tasks, setTasks] = useState(challenge.tasks);
  const [githubUrl, setGithubUrl] = useState("");
  const [reflection, setReflection] = useState("");
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTasks(challenge.tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayNumber]);

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleGithubSubmit = (e) => {
    e.preventDefault();
    if (githubUrl.includes("github.com")) {
      updateSubmission(dayNumber, "github", true);
    } else {
      alert("Please enter a valid GitHub URL");
    }
  };

  const handleCompleteDay = () => {
    if (githubSubmitted && linkedinSubmitted) {
      setJustCompleted(true);
      if (isMissed) {
        recoverDay(dayNumber);
      } else {
        setProgress((prev) => {
          if (prev.completedDays.includes(dayNumber)) return prev;
          return {
            ...prev,
            day12Completed: dayNumber === 12 ? true : prev.day12Completed,
            completedDays: [...prev.completedDays, dayNumber],
            currentDay: prev.currentDay === dayNumber ? prev.currentDay + 1 : prev.currentDay
          };
        });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1020] font-sans pb-24 overflow-x-hidden selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      {/* 1. TOP HEADER */}
      <header className="bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 sticky top-0 z-30 shadow-sm shadow-gray-100/50 dark:shadow-none transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="group flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-4 text-sm font-bold text-gray-900 dark:text-white">
            <span className="hidden sm:block text-gray-400 dark:text-gray-500 font-medium">
              Day {displayDay} of 60
            </span>
            <div className="flex items-center gap-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-md ring-1 ring-orange-500/20 dark:ring-orange-500/30">
              <Flame className="h-4 w-4 fill-orange-500 dark:fill-orange-400" />
              {currentStreak} Day Streak
            </div>
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 dark:text-yellow-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-yellow-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            >
              {!isDark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* COMPLETED SUCCESS STATE OVERLAY */}
      {isCompletedDay && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-[#0B1020] rounded-3xl p-8 sm:p-12 text-center shadow-2xl text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full max-w-lg bg-indigo-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Animated Icon */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-40 ${justCompleted ? "animate-pulse" : ""}`}></div>
                <div className="h-20 w-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-4xl shadow-xl shadow-yellow-500/30 transform transition-transform hover:scale-110">
                  🔥
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
                Day {displayDay} Complete!
              </h1>
              
              <div className="text-lg sm:text-xl text-indigo-100 dark:text-indigo-200 font-medium mb-10 max-w-lg">
                {dayNumber > 0 ? (
                  <>
                    <p className="mb-2">{dayNumber} days. {dayNumber} commits.</p>
                    <p>You're building something bigger than a project — you're building consistency.</p>
                  </>
                ) : (
                  <p>You've taken the first step. The journey begins now.</p>
                )}
              </div>

              {/* Compact Proof Summary */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm font-semibold w-full max-w-2xl mb-10">
                <div className="flex items-center gap-3 bg-black/20 dark:bg-black/40 px-5 py-3 rounded-xl backdrop-blur-md ring-1 ring-white/10 dark:ring-white/5 flex-1 justify-center whitespace-nowrap">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" /> GitHub Commit Added
                </div>
                <div className="flex items-center gap-3 bg-black/20 dark:bg-black/40 px-5 py-3 rounded-xl backdrop-blur-md ring-1 ring-white/10 dark:ring-white/5 flex-1 justify-center whitespace-nowrap">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" /> LinkedIn Post Shared
                </div>
                {dayNumber > 0 && (
                  <div className="flex items-center gap-3 bg-black/20 dark:bg-black/40 px-5 py-3 rounded-xl backdrop-blur-md ring-1 ring-white/10 dark:ring-white/5 flex-1 sm:col-span-2 justify-center whitespace-nowrap">
                    <Flame className="h-5 w-5 text-orange-400 fill-orange-400 shrink-0" /> {currentStreak} Day Streak Maintained
                  </div>
                )}
              </div>

              <Link
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white dark:bg-yellow-400 px-10 py-4 text-lg font-bold text-gray-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
              >
                Continue to Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}

      {!isCompletedDay && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
          {/* Missed Day Banner */}
          {isMissed && (
            <div className="mb-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 p-5 sm:p-6 text-amber-900 dark:text-amber-200 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-200/50 dark:bg-amber-900/40 px-2.5 py-0.5 rounded-md">
                        Day {displayDay} Missed
                      </span>
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                        Recovery Available
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      You missed yesterday's challenge, but your journey isn't over.
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed font-medium">
                      "Consistency isn't about never missing. It's about getting back on track."
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("proof-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Recover Day {displayDay} <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Recovered Day Banner */}
          {isRecovered && (
            <div className="mb-6 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 p-5 sm:p-6 text-emerald-900 dark:text-emerald-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-200/50 dark:bg-emerald-900/40 px-2.5 py-0.5 rounded-md mb-1 inline-block">
                    Day {displayDay} Recovered
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Back on Track!
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-slate-300 font-medium">
                    You successfully completed and recovered Day {displayDay}. Your streak momentum is alive!
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            {/* LEFT / MAIN COLUMN */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              {/* 2. CHALLENGE HERO */}
              <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 dark:from-indigo-600 dark:via-purple-600 dark:to-yellow-500"></div>
                <div className="p-6 sm:p-8 lg:p-10 relative">
                  <span className="inline-block text-xs font-black tracking-widest text-indigo-600 dark:text-yellow-400 uppercase mb-4 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                    Day {displayDay} {isMissed ? "(Missed)" : isRecovered ? "(Recovered)" : ""}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                    {challenge.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-gray-600 dark:text-slate-400 mb-8">
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-800">
                      <span className="text-gray-400 dark:text-gray-500 uppercase text-xs tracking-wider">
                        Track
                      </span>{" "}
                      <span className="dark:text-slate-300">MERN Stack</span>
                    </div>
                    <div className="flex items-center gap-1.5 dark:text-slate-300">
                      <Signal className="h-4 w-4 text-amber-500 dark:text-amber-400" />{" "}
                      {challenge.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 dark:text-slate-300">
                      <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />{" "}
                      {challenge.time}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                    {challenge.description}
                  </p>
                </div>
              </div>

              {/* 3. TODAY'S MISSION & 4. SKILLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-500 dark:text-yellow-400" />{" "}
                    Today's Mission
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 font-medium">
                    Build a habit tracking application that allows users to:
                  </p>
                  <ul className="space-y-3">
                    {challenge.missionPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm font-medium text-gray-800 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-indigo-500 dark:text-yellow-400" />{" "}
                    What You'll Practice
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. SUCCESS CRITERIA */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Definition of Done
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 font-medium">
                  Use this checklist to verify your work before submitting.
                </p>

                <div className="space-y-3">
                  {tasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors border text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 dark:focus-visible:ring-yellow-400 dark:focus-visible:ring-offset-gray-900 ${
                        task.done
                          ? "bg-indigo-50/50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/50 text-indigo-900 dark:text-indigo-200"
                          : "bg-white dark:bg-gray-800/30 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-gray-800/70"
                      }`}
                    >
                      {task.done ? (
                        <CheckSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      ) : (
                        <Square className="h-5 w-5 text-gray-400 dark:text-gray-500 shrink-0" />
                      )}
                      <span
                        className={`text-sm font-semibold transition-all ${task.done ? "line-through opacity-80" : ""}`}
                      >
                        {task.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. BUILD -> COMMIT -> POST (Mobile flow visualizer) */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left transition-colors duration-300">
                <div className="flex-1">
                  <span className="text-xs font-black text-gray-400 dark:text-gray-500">
                    01
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                    BUILD
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Complete today's project
                  </p>
                </div>
                <ArrowDown className="text-gray-300 dark:text-gray-600 sm:-rotate-90 hidden sm:block mt-4" />
                <ArrowDown className="text-gray-300 dark:text-gray-600 sm:hidden h-4 w-4" />
                <div className="flex-1">
                  <span className="text-xs font-black text-gray-400 dark:text-gray-500">
                    02
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                    COMMIT
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Push your work to GitHub
                  </p>
                </div>
                <ArrowDown className="text-gray-300 dark:text-gray-600 sm:-rotate-90 hidden sm:block mt-4" />
                <ArrowDown className="text-gray-300 dark:text-gray-600 sm:hidden h-4 w-4" />
                <div className="flex-1">
                  <span className="text-xs font-black text-gray-400 dark:text-gray-500">
                    03
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                    POST
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Share your progress on LinkedIn
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT / STICKY COLUMN */}
            <div id="proof-section" className="lg:col-span-5 xl:col-span-4 mt-6 lg:mt-0 space-y-6 lg:sticky lg:top-24">
              {/* 7. GITHUB SUBMISSION */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Submit GitHub Proof
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 font-medium ml-13">
                  Paste the repository or commit URL for Day {displayDay}.
                </p>

                {githubSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <div>
                      <p className="text-sm font-bold text-green-900 dark:text-green-300">
                        Submitted
                      </p>
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-green-700 dark:text-green-400 hover:underline truncate block max-w-[200px]"
                      >
                        {githubUrl}
                      </a>
                    </div>
                    <button
                      onClick={() => updateSubmission(dayNumber, "github", false)}
                      className="ml-auto text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 focus:outline-none"
                    >
                      Undo
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleGithubSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="github-url" className="sr-only">
                        GitHub URL
                      </label>
                      <input
                        id="github-url"
                        type="url"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        placeholder="https://github.com/..."
                        required
                        className="w-full rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border dark:text-white dark:placeholder-gray-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Submit GitHub
                    </button>
                  </form>
                )}
              </div>

              {/* 8. LINKEDIN SUBMISSION */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <FaLinkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Share on LinkedIn
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 font-medium ml-13">
                  Share what you built today and let your progress become
                  visible.
                </p>

                {linkedinSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <div>
                      <p className="text-sm font-bold text-green-900 dark:text-green-300">
                        Post Shared ✓
                      </p>
                      <p className="text-xs text-green-700 dark:text-green-400">
                        Your network can see your progress.
                      </p>
                    </div>
                    <button
                      onClick={() => updateSubmission(dayNumber, "linkedin", false)}
                      className="ml-auto text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 focus:outline-none"
                    >
                      Undo
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => updateSubmission(dayNumber, "linkedin", true)}
                    className="w-full flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-sm shadow-blue-500/20"
                  >
                    Share Progress
                  </button>
                )}
              </div>

              {/* 10. REFLECTION IDEA */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-colors duration-300">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  Reflection Code Editor
                </h3>
                <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block font-medium">
                  What did you learn today? Write it as a comment:
                </label>
                <div className="relative">
                  <textarea
                    value={reflection}
                    onChange={(e) =>
                      setReflection(e.target.value.slice(0, 280))
                    }
                    placeholder="// Today I learned how to use local storage to persist React state cross-sessions..."
                    className="w-full rounded-xl border border-gray-200 dark:border-[#181a1f] bg-gray-50 dark:bg-[#282c34] text-gray-900 dark:text-[#abb2bf] font-sans dark:font-mono p-4 text-sm h-32 resize-none focus:border-indigo-500 dark:focus:border-[#61afef] focus:ring-1 focus:ring-indigo-500 dark:focus:ring-[#61afef] transition-colors"
                  />
                  <div className="absolute bottom-3 right-3 text-xs font-medium text-gray-400 dark:text-[#5c6370] bg-gray-50 dark:bg-[#282c34] px-1 rounded">
                    {reflection.length} / 280
                  </div>
                </div>
              </div>

              {/* 9. COMPLETE DAY */}
              <div className={`bg-white dark:bg-[#111827] rounded-2xl shadow-md ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 border-t-4 ${isMissed ? "border-t-amber-500" : "border-t-indigo-500"} transition-colors duration-300`}>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                  {isMissed ? `Recover Day ${displayDay}?` : `Ready to complete Day ${displayDay}?`}
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 font-medium">
                  Submit both proofs of work to {isMissed ? "recover this challenge and get back on track." : "mark today's challenge complete."}
                </p>

                <button
                  onClick={handleCompleteDay}
                  disabled={!githubSubmitted || !linkedinSubmitted}
                  className={`w-full py-4 rounded-xl text-base font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                    githubSubmitted && linkedinSubmitted
                      ? isMissed
                        ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-500/20 active:scale-95"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isMissed ? `Complete & Recover Day ${displayDay}` : `Complete Day ${displayDay}`}
                </button>

                {!(githubSubmitted && linkedinSubmitted) && (
                  <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4 font-medium">
                    Submit GitHub and LinkedIn links to unlock
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ChallengeDay;
