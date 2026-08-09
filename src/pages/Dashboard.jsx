import React from "react";
import { Link } from "react-router"; // Fixed routing using standard v6/v7 'react-router'
import { Flame, Clock, Signal, Sun, Moon, Sprout, Zap, ArrowRight, CalendarDays, Trophy, GitCommit, Check, Compass } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useProgress, calculateCurrentStreak } from "../context/ProgressContext";
import { getRoadmapById } from "../data/roadmapData";

// ━━━━━━━━━━━━━━━━━━━━━━
// MOCKED DATA
// ━━━━━━━━━━━━━━━━━━━━━━
const MOCK_USER = {
  name: "Aarav Sharma",
  avatar:
    "https://ui-avatars.com/api/?name=Aarav+Sharma&background=6366f1&color=fff",
  track: "MERN Stack",
  currentDay: 12,
  totalDays: 60,
  streak: 12,
  longestStreak: 12,
  progress: 20,
};

const getChallengeData = (day) => {
  if (day === 13) return { title: "Responsive Weather Dashboard", diff: "Intermediate", time: "2-3 hours", desc: "Fetch data from a real weather API and display it beautifully." };
  if (day === 12) return { title: "Build a Habit Tracker", diff: "Intermediate", time: "2-3 hours", desc: "Build a habit tracker where users can create habits, mark them complete, and view their weekly progress." };
  if (day === 11) return { title: "Build a Search & Filter App", diff: "Intermediate", time: "2-3 hours", desc: "Create a list of items and build a search and filter system." };
  if (day === 10) return { title: "Weather Dashboard", diff: "Beginner", time: "1-2 hours", desc: "Use a public API to show the weather for a given city." };
  if (day === 9) return { title: "Currency Converter", diff: "Beginner", time: "1-2 hours", desc: "Convert between different currencies using a live exchange rate API." };
  if (day === 2) return { title: "Build a Todo App", diff: "Beginner", time: "1-2 hours", desc: "Learn state management by building a functional todo list." };
  if (day === 1) return { title: "Start Your Journey", diff: "Beginner", time: "1 hour", desc: "Set up your development environment and build your first component." };
  return { title: `Challenge for Day ${day}`, diff: "Beginner", time: "1-2 hours", desc: `Complete the task for Day ${day} and share your progress.` };
};

// ━━━━━━━━━━━━━━━━━━━━━━
// REUSABLE COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━

const HackathonDemoBar = () => {
  const { progress, toggleSimulateMissedDay, resetToDefault } = useProgress();
  const isDay8Missed = progress.missedDays?.includes(8);
  const isDay8Recovered = progress.recoveredDays?.includes(8);

  return (
    <div className="bg-gray-900 text-white dark:bg-indigo-950 dark:text-indigo-100 border-b border-indigo-500/20 px-4 py-2 text-xs font-medium transition-colors">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/30">
            ⚡ Hackathon Demo Controls
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-slate-300">
            Test the Missed Day + Recovery system with 1-click
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleSimulateMissedDay(8)}
            className={`px-3 py-1 rounded-md font-bold transition-all shadow-sm ${
              isDay8Missed
                ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
                : isDay8Recovered
                ? "bg-emerald-600 text-white hover:bg-emerald-500"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            {isDay8Missed
              ? "✓ Day 8 Missed (Click to Undo)"
              : isDay8Recovered
              ? "✓ Day 8 Recovered (Click to Toggle Missed)"
              : "⚡ Simulate Day 8 Missed"}
          </button>
          <button
            onClick={resetToDefault}
            className="px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] font-semibold transition-colors"
          >
            Reset Demo State
          </button>
        </div>
      </div>
    </div>
  );
};

const MissedDayRecoveryCard = ({ missedDay }) => {
  if (!missedDay) return null;
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 rounded-2xl p-5 sm:p-6 shadow-md ring-1 ring-amber-200 dark:ring-amber-800/60 transition-transform hover:-translate-y-0.5 duration-300 border-l-4 border-l-amber-500">
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
        <div className="flex items-start gap-3.5">
          <div className="h-10 w-10 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Zap className="h-5 w-5 fill-amber-500" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-200/70 dark:bg-amber-900/60 px-2.5 py-0.5 rounded-md">
                Recovery Card
              </span>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                Day {missedDay} Missed
              </span>
            </div>
            <p className="text-gray-900 dark:text-white font-extrabold text-lg mb-1">
              You're one step away from getting back on track.
            </p>
            <p className="text-gray-600 dark:text-slate-300 text-sm font-medium">
              "Consistency isn't about never missing. It's about getting back on track."
            </p>
          </div>
        </div>
        <Link
          to={`/day/${missedDay}`}
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 px-6 py-3 text-sm font-bold text-white dark:text-gray-900 transition-all active:scale-95 shadow-md shadow-amber-600/20"
        >
          Recover Day {missedDay} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const SmartMotivationCard = ({ currentDay, streak, completedDays, missedDay }) => {
  const isFirstDay = currentDay === 1 && streak === 0 && completedDays.length === 0;
  const isRecovery = missedDay || (completedDays.length > 0 && streak === 0);
  const isActiveStreak = streak > 0 && !missedDay;

  if (isFirstDay) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-green-500">
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-green-600 dark:text-green-400 tracking-widest uppercase mb-1.5 flex items-center gap-2">
              <Sprout className="h-4 w-4" /> Your Journey Starts Here
            </h3>
            <p className="text-gray-900 dark:text-white font-bold text-lg mb-1">Everyone starts somewhere.</p>
            <p className="text-gray-600 dark:text-slate-400 text-sm">Complete your first challenge and start building your public proof of work.</p>
          </div>
          <Link
            to="/day/1"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Start Day 1
          </Link>
        </div>
      </div>
    );
  }

  if (isRecovery) {
    const targetDay = missedDay || currentDay;
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-amber-500">
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-1.5 flex items-center gap-2">
              <Zap className="h-4 w-4" /> Get Back on Track
            </h3>
            <p className="text-gray-900 dark:text-white font-bold text-lg mb-1">You missed Day {targetDay}. That's okay.</p>
            <p className="text-gray-600 dark:text-slate-400 text-sm mb-3">One missed day doesn't erase your progress. Complete the challenge and keep moving forward.</p>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-600/20">
               Recovery available: Complete Day {targetDay} challenge to restore your streak momentum.
            </div>
          </div>
          <Link
            to={`/day/${targetDay}`}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 px-5 py-2.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Recover Day {targetDay}
          </Link>
        </div>
      </div>
    );
  }

  if (isActiveStreak) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-orange-500">
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-orange-600 dark:text-orange-500 tracking-widest uppercase mb-1.5 flex items-center gap-2">
              <Flame className="h-4 w-4" /> {streak} Day Streak
            </h3>
            <p className="text-gray-900 dark:text-white font-bold text-lg mb-1">You're building momentum.</p>
            <p className="text-gray-600 dark:text-slate-400 text-sm">{streak} days of showing up. Keep the streak alive.</p>
          </div>
          <Link
            to={`/day/${currentDay}`}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Continue Challenge
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

const NextUpCard = ({ currentDay, completedDays, totalDays }) => {
  const isCurrentCompleted = completedDays.includes(currentDay);
  
  if (currentDay === totalDays && isCurrentCompleted) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-yellow-500 text-center">
        <div className="mx-auto h-16 w-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
          <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 className="text-sm font-extrabold text-yellow-600 dark:text-yellow-500 tracking-widest uppercase mb-2">
          🏆 Challenge Complete
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">You completed the 60-day challenge.</p>
        <p className="text-gray-600 dark:text-slate-400 text-sm mb-6 max-w-md mx-auto">
          You've built consistency, shipped projects, and grown immensely over these 60 days.
        </p>
        <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md">
          View Your Journey
        </button>
      </div>
    );
  }

  if (!isCurrentCompleted) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-indigo-500">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4" /> Action Required
            </h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">Finish today's challenge first</p>
            <p className="text-gray-600 dark:text-slate-400 text-sm">
              You must complete Day {currentDay} before unlocking what's next.
            </p>
          </div>
          <Link
            to={`/day/${currentDay}`}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Continue Day {currentDay} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const nextDay = currentDay + 1;
  const nextChallenge = getChallengeData(nextDay);

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-green-500 relative overflow-hidden">
      {/* Accent Graphic */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-green-500/10 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-sm font-extrabold text-green-600 dark:text-green-400 tracking-widest uppercase mb-2 flex items-center gap-2">
            <CalendarDays className="h-4 w-4" /> Next Up
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Day {nextDay}</p>
          <p className="text-gray-600 dark:text-slate-400 text-sm font-medium mb-5">Keep the momentum going. You finished today's work. Here's what's waiting for you next.</p>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 ring-1 ring-gray-100 dark:ring-gray-700/50">
            <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">{nextChallenge.title}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">{nextChallenge.desc}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500 dark:text-slate-400">
              <span className="flex items-center gap-1"><Signal className="h-3 w-3 text-amber-500 dark:text-amber-400" /> {nextChallenge.diff}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-blue-500 dark:text-blue-400" /> {nextChallenge.time}</span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto shrink-0 flex items-center sm:h-full sm:pt-14">
          <Link
            to={`/day/${nextDay}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-6 py-3.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md"
          >
            Preview Day {nextDay} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const StreakCard = ({ user, recoveryStatus }) => (
  <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 dark:ring-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-transform hover:-translate-y-1 duration-300">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 shadow-inner">
        <Flame className="h-7 w-7 text-orange-500 dark:text-orange-400" />
      </div>
      <div>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          {user.streak} Day Streak
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium mt-0.5">
          Longest: {user.longestStreak} days
        </p>
      </div>
    </div>
    <div className="flex flex-col items-start sm:items-end gap-1">
      <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
        Recovery Status
      </span>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold ${
          recoveryStatus?.type === "missed"
            ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30"
            : recoveryStatus?.type === "recovered"
            ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30"
            : "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-1 ring-green-500/30"
        }`}
      >
        {recoveryStatus?.label || "✓ On Track"}
      </span>
    </div>
  </div>
);

const TodayChallenge = ({ today, track }) => (
  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden relative transition-transform hover:-translate-y-1 duration-300">
    {/* Accent bar */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    <div className="p-5 sm:p-6 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 dark:bg-indigo-900/40 px-2 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-600/20 dark:ring-indigo-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
          Due Today
        </span>
        <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
          {track}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Day {today.day} — {today.title}
      </h2>

      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-slate-300 mb-4 font-medium">
        <div className="flex items-center gap-1.5">
          <Signal className="h-4 w-4 text-amber-500 dark:text-amber-400" />{" "}
          {today.difficulty}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />{" "}
          {today.time}
        </div>
      </div>

      <p className="text-gray-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
        {today.description}
      </p>

      <div className="border-t border-gray-100 dark:border-gray-800 pt-5 mt-auto">
        <Link
          to={`/day/${today.day}`}
          className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
        >
          Continue Challenge
        </Link>
      </div>
    </div>
  </div>
);

const ProofOfWork = ({ githubSubmitted, linkedinSubmitted }) => (
  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
      Today's Proof of Work
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* GitHub Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 p-4 transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
            <FaGithub className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              GitHub
            </p>
            <p className="text-xs font-medium text-gray-500 dark:text-slate-400">
              Repository / commit
            </p>
          </div>
        </div>
        {githubSubmitted ? (
          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-semibold text-green-800 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
            Submitted ✓
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20">
            Pending
          </span>
        )}
      </div>

      {/* LinkedIn Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 p-4 transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <FaLinkedin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              LinkedIn
            </p>
            <p className="text-xs font-medium text-gray-500 dark:text-slate-400">
              Share your progress
            </p>
          </div>
        </div>
        {linkedinSubmitted ? (
          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-semibold text-green-800 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
            Shared ✓
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20">
            Pending
          </span>
        )}
      </div>
    </div>
  </div>
);

const OverallProgress = ({ user, completedDays, missedDays = [], recoveredDays = [] }) => (
  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
      Your 60-Day Journey
    </h3>
    <div className="flex justify-between items-end mb-2">
      <div>
        <p className="text-3xl font-black text-indigo-600 dark:text-yellow-400">
          {user.currentDay}
          <span className="text-sm font-semibold text-gray-400 dark:text-slate-500">
            {" "}
            / 60
          </span>
        </p>
        <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mt-1">
          {user.totalDays - user.currentDay} Remaining
        </p>
      </div>
      <p className="text-sm font-bold text-gray-900 dark:text-white">
        {user.progress}%
      </p>
    </div>

    {/* Progress Bar */}
    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-6">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-yellow-500 transition-all duration-1000 ease-out"
        style={{ width: `${user.progress}%` }}
      ></div>
    </div>

    {/* Activity Matrix */}
    <div className="grid grid-cols-10 sm:grid-cols-12 gap-1.5 sm:gap-2">
      {Array.from({ length: user.totalDays }).map((_, i) => {
        const dayNum = i + 1;
        let stateClass =
          "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"; // Upcoming
        let ringClass = "";
        let titleText = `Day ${dayNum}`;

        if (recoveredDays.includes(dayNum)) {
          stateClass =
            "bg-emerald-500 hover:bg-emerald-400 ring-2 ring-emerald-300 dark:ring-emerald-500/50 shadow-sm";
          titleText = `Day ${dayNum} (Recovered)`;
        } else if (missedDays.includes(dayNum)) {
          stateClass =
            "bg-amber-500 hover:bg-amber-400 animate-pulse ring-2 ring-amber-300 dark:ring-amber-500/50 shadow-sm";
          titleText = `Day ${dayNum} (Missed - Recovery Available)`;
        } else if (completedDays.includes(dayNum)) {
          stateClass =
            "bg-green-500 hover:bg-green-400 shadow-sm shadow-green-200/50 dark:shadow-none";
          titleText = `Day ${dayNum} (Completed)`;
        } else if (dayNum === user.currentDay) {
          stateClass =
            "bg-indigo-500 dark:bg-yellow-500 animate-pulse outline-none ring-2 ring-indigo-200 dark:ring-yellow-400/50 ring-offset-1 dark:ring-offset-gray-900 shadow-sm shadow-indigo-300/50 dark:shadow-none";
          titleText = `Today (Day ${dayNum})`;
        }

        return (
          <Link
            key={dayNum}
            to={`/day/${dayNum}`}
            className={`aspect-square rounded-[3px] sm:rounded-sm transition-all duration-300 cursor-pointer ${stateClass} ${ringClass}`}
            title={titleText}
          />
        );
      })}
    </div>
  </div>
);

const Achievements = ({ achievements }) => (
  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
      Achievements
    </h3>
    <div className="flex flex-col gap-3">
      {achievements.map((ach, i) => (
        <div
          key={i}
          className={`group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
            ach.unlocked
              ? "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm"
              : "border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 opacity-75"
          }`}
        >
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
              ach.unlocked
                ? "bg-indigo-50/80 dark:bg-indigo-900/30 text-2xl"
                : "bg-gray-100 dark:bg-gray-800 grayscale hover:grayscale-0"
            }`}
          >
            {ach.icon}
          </div>
          <div>
            <p
              className={`text-sm font-bold ${ach.unlocked ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-600"}`}
            >
              {ach.title}
            </p>
            <p className="text-xs font-medium text-gray-500 dark:text-slate-400 mt-0.5">
              {ach.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PersonalizedRoadmapWidget = ({ pData }) => {
  const selectedId = pData.selectedRoadmapId;
  const roadmap = getRoadmapById(selectedId);

  if (!roadmap) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-indigo-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-yellow-400 shrink-0">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-yellow-400">
              Career Roadmap
            </h3>
            <p className="text-sm font-bold text-gray-900 dark:text-white">Choose Your Path</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 dark:text-slate-400 mb-4">
          Select a career track (Frontend, Backend, Full-Stack, AI/ML, Data Science, DSA) to unlock structured learning milestones.
        </p>
        <Link
          to="/roadmap"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-yellow-400 dark:hover:bg-yellow-300 px-4 py-2.5 text-xs font-bold text-white dark:text-gray-900 transition-all active:scale-95 shadow-sm"
        >
          Explore Roadmaps <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    );
  }

  const completedMilestones = pData.roadmapProgress?.[roadmap.id]?.completedMilestones || [];
  const allMilestones = roadmap.stages.flatMap((s) => s.milestones);
  const totalCount = allMilestones.length;
  const doneCount = completedMilestones.length;
  const percent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
  const currentWorking = allMilestones.find((m) => !completedMilestones.includes(m.id)) || allMilestones[allMilestones.length - 1];

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-indigo-500">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-yellow-400 shrink-0">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">
              Active Track
            </span>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
              {roadmap.title}
            </h3>
          </div>
        </div>
        <span className="text-sm font-black text-indigo-600 dark:text-yellow-400">
          {percent}%
        </span>
      </div>

      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-indigo-600 dark:bg-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs text-gray-600 dark:text-slate-400 mb-4">
        Working on: <span className="font-semibold text-gray-900 dark:text-slate-200">{currentWorking?.title || "Foundations"}</span>
      </p>

      <Link
        to={`/roadmap/${roadmap.id}`}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-indigo-600 dark:bg-white dark:hover:bg-yellow-400 px-4 py-2.5 text-xs font-bold text-white dark:text-gray-900 dark:hover:text-gray-900 transition-all active:scale-95 shadow-sm"
      >
        View Full Roadmap <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
};

const ProofOfWorkTimeline = ({ completedDays, currentDay, githubSubmitted, linkedinSubmitted, pData }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const sortedDays = [...completedDays].sort((a, b) => b - a);
  const isCurrentDayCompleted = completedDays.includes(currentDay);
  
  const generateMockDate = (d) => {
    const baseDate = new Date();
    const diff = currentDay > 0 ? currentDay - d : 0;
    baseDate.setDate(baseDate.getDate() - diff);
    return baseDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const entries = [];
  
  if (!isCurrentDayCompleted && currentDay > 0) {
    entries.push({
      id: `in-progress-${currentDay}`,
      day: currentDay,
      title: getChallengeData(currentDay).title,
      isCompleted: false,
      github: githubSubmitted,
      linkedin: linkedinSubmitted,
      date: "In Progress",
    });
  }

  const missedDaysList = pData?.missedDays || [];
  const recoveredDaysList = pData?.recoveredDays || [];

  missedDaysList.forEach((day) => {
    if (!entries.some((e) => e.day === day)) {
      entries.push({
        id: `missed-${day}`,
        day: day,
        title: getChallengeData(day).title,
        isCompleted: false,
        isMissed: true,
        github: false,
        linkedin: false,
        date: "Missed Day",
      });
    }
  });

  sortedDays.forEach((day) => {
    const dayProof = pData?.proofOfWork?.[day] || { githubSubmitted: true, linkedinSubmitted: true };
    const isRecoveredDay = recoveredDaysList.includes(day);
    entries.push({
      id: `completed-${day}`,
      day: day,
      title: getChallengeData(day).title,
      isCompleted: true,
      isRecovered: isRecoveredDay,
      github: !!dayProof.githubSubmitted,
      linkedin: !!dayProof.linkedinSubmitted,
      date: generateMockDate(day),
    });
  });

  entries.sort((a, b) => b.day - a.day);

  if (entries.length === 0) {
    return (
      <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 transition-transform hover:-translate-y-1 duration-300 text-center border-t-4 border-t-green-500">
        <h3 className="text-sm font-extrabold text-green-600 dark:text-green-500 tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
          Your Journey Starts Here <Sprout className="h-5 w-5" />
        </h3>
        <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">No proof of work yet.</p>
        <p className="text-gray-600 dark:text-slate-400 text-sm mb-6 max-w-sm mx-auto">
          Complete your first challenge and your progress will appear here.
        </p>
        <Link
          to="/day/1"
          className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-8 py-3.5 text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md"
        >
          Start Day 1
        </Link>
      </div>
    );
  }

  const visibleEntries = isExpanded ? entries : entries.slice(0, 5);
  const hasMore = entries.length > 5;

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
      <div className="mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
          PROOF OF WORK
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">
          Your journey, one day at a time.
        </p>
      </div>

      <div className="relative border-l-2 border-indigo-100 dark:border-gray-800 ml-3 space-y-8 pb-2">
        {visibleEntries.map((entry) => (
          <div key={entry.id} className="relative pl-6 group">
            {entry.isMissed ? (
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-[#111827] shadow-sm flex items-center justify-center text-[10px] text-white font-black">
                !
              </span>
            ) : entry.isRecovered ? (
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#111827] shadow-sm transition-transform group-hover:scale-110 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
            ) : entry.isCompleted ? (
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-500 ring-4 ring-white dark:ring-[#111827] shadow-sm transition-transform group-hover:scale-110 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
            ) : (
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white dark:bg-[#111827] border-2 border-indigo-400 ring-4 ring-white dark:ring-[#111827] shadow-sm"></span>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <p className={`text-xs font-extrabold tracking-wide uppercase mb-1 ${
                  entry.isMissed
                    ? "text-amber-600 dark:text-amber-400"
                    : entry.isRecovered
                    ? "text-emerald-600 dark:text-emerald-400"
                    : entry.isCompleted
                    ? "text-green-600 dark:text-green-500"
                    : "text-indigo-600 dark:text-indigo-400"
                }`}>
                  {entry.isMissed
                    ? `⚠ Day ${entry.day} (Missed)`
                    : entry.isRecovered
                    ? `✓ Day ${entry.day} (Recovered)`
                    : entry.isCompleted
                    ? `✓ Day ${entry.day}`
                    : `○ In Progress (Day ${entry.day})`}
                </p>
                <p className={`text-base font-bold ${entry.isCompleted ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                  {entry.title}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-gray-800/50 px-2.5 py-1 rounded-md ring-1 ring-gray-100 dark:ring-gray-700/50 w-fit">
                <CalendarDays className="h-3.5 w-3.5" />
                {entry.date}
              </div>
            </div>

            {entry.isMissed ? (
              <div className="mt-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    Recovery Available
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                    Consistency isn't about never missing. Complete this challenge to get back on track.
                  </p>
                </div>
                <Link
                  to={`/day/${entry.day}`}
                  className="shrink-0 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3.5 py-2 shadow-sm transition-all active:scale-95"
                >
                  Recover Day {entry.day}
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-3">
                <div className={`flex items-center gap-2 text-sm font-medium ${entry.github ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                  <GitCommit className={`h-4 w-4 ${entry.github ? "text-gray-900 dark:text-white" : ""}`} />
                  {entry.github ? "GitHub Commit Added" : "GitHub Pending"}
                  {entry.github && (
                    <span className="ml-2 text-xs text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">View Commit</span>
                  )}
                </div>
                <div className={`flex items-center gap-2 text-sm font-medium ${entry.linkedin ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                  <FaLinkedin className={`h-4 w-4 ${entry.linkedin ? "text-blue-600 dark:text-blue-400" : ""}`} />
                  {entry.linkedin ? "LinkedIn Post Shared" : "LinkedIn Pending"}
                  {entry.linkedin && (
                    <span className="ml-2 text-xs text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">View Post</span>
                  )}
                </div>
              </div>
            )}

            {!entry.isCompleted && !entry.isMissed && (
              <div className="mt-4">
                <Link
                  to={`/day/${entry.day}`}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  Continue Challenge
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && !isExpanded && (
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            View Full Journey →
          </button>
        </div>
      )}
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━

const Dashboard = () => {
  const { isDark, toggleTheme } = useTheme();
  const { progress: pData } = useProgress();

  const missedDaysList = pData.missedDays || [];
  const recoveredDaysList = pData.recoveredDays || [];
  const hasActiveMissed = missedDaysList.length > 0;
  const activeMissedDay = hasActiveMissed ? missedDaysList[0] : null;

  let recoveryStatus = { type: "on_track", label: "✓ On Track" };
  if (hasActiveMissed) {
    recoveryStatus = { type: "missed", label: `⚠️ Recovery Available (Day ${activeMissedDay})` };
  } else if (recoveredDaysList.length > 0) {
    const lastRecovered = recoveredDaysList[recoveredDaysList.length - 1];
    recoveryStatus = { type: "recovered", label: `✓ Day ${lastRecovered} Recovered` };
  }

  const calculateLongestStreak = (days) => {
    if (!days || days.length === 0) return 0;
    let longest = 1;
    let current = 1;
    const sorted = [...days].sort((a,b) => a - b);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i-1] + 1) {
        current++;
        longest = Math.max(longest, current);
      } else if (sorted[i] !== sorted[i-1]) {
        current = 1;
      }
    }
    return Math.max(longest, calculateCurrentStreak(pData.completedDays));
  };

  const calculatedProgress = Math.round((pData.completedDays.length / 60) * 100);

  const activeUser = {
    ...MOCK_USER,
    currentDay: pData.currentDay,
    streak: calculateCurrentStreak(pData.completedDays),
    longestStreak: calculateLongestStreak(pData.completedDays),
    progress: calculatedProgress,
  };

  const currentAchievements = [
    {
      title: "First 7 Days",
      desc: "Completed your first week",
      icon: "🔥",
      unlocked: pData.completedDays.length >= 7,
    },
    {
      title: "10 Day Streak",
      desc: "Stayed consistent for 10 days",
      icon: "🚀",
      unlocked: activeUser.streak >= 10,
    },
    {
      title: "First Project",
      desc: "Submitted your first project",
      icon: "💻",
      unlocked: pData.completedDays.length > 0,
    },
    {
      title: "Halfway Hero",
      desc: "Unlocks at Day 30",
      icon: "🏆",
      unlocked: pData.completedDays.length >= 30,
    },
  ];

  const challengeData = getChallengeData(activeUser.currentDay);
  const currentTodayMock = {
    day: activeUser.currentDay,
    title: challengeData.title,
    difficulty: challengeData.diff,
    time: challengeData.time,
    description: challengeData.desc,
  };

  const currentDayProof = pData.proofOfWork?.[pData.currentDay] || {};
  const isGithubSubmitted = !!currentDayProof.githubSubmitted;
  const isLinkedinSubmitted = !!currentDayProof.linkedinSubmitted;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1020] font-sans pb-20 overflow-x-hidden selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      <HackathonDemoBar />

      {/* 1. Header */}
      <header className="bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-gray-100/50 dark:shadow-none transition-colors duration-300">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-opacity hover:opacity-80"
          >
            ABTalks
            <span className="text-indigo-600 dark:text-purple-400">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/roadmap"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-yellow-400/10 px-3.5 py-1.5 text-xs font-bold text-indigo-600 dark:text-yellow-400 ring-1 ring-inset ring-indigo-600/20 dark:ring-yellow-400/30 hover:bg-indigo-100 dark:hover:bg-yellow-400/20 transition-colors mr-1"
          >
            <Compass className="h-3.5 w-3.5" /> Roadmap
          </Link>
          <div className="hidden sm:block text-right mr-1">
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              Good evening, {activeUser.name.split(" ")[0]} 👋
            </p>
          </div>
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="mr-2 inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 dark:text-yellow-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-yellow-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            {!isDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="rounded-full transition-transform hover:scale-105 hover:ring-2 hover:ring-indigo-600 hover:ring-offset-2"
          >
            <img
              src={activeUser.avatar}
              className="h-9 w-9 rounded-full shadow-sm"
              alt={`${activeUser.name} Avatar`}
            />
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left / Main Column */}
          <div className="space-y-6 lg:col-span-7 xl:col-span-8">
            <StreakCard user={activeUser} recoveryStatus={recoveryStatus} />
            {hasActiveMissed && <MissedDayRecoveryCard missedDay={activeMissedDay} />}
            <SmartMotivationCard 
              currentDay={pData.currentDay} 
              streak={pData.currentStreak} 
              completedDays={pData.completedDays} 
              missedDay={activeMissedDay}
            />
            <TodayChallenge today={currentTodayMock} track={activeUser.track} />
            <NextUpCard 
              currentDay={pData.currentDay} 
              completedDays={pData.completedDays}
              totalDays={activeUser.totalDays}
            />
            <ProofOfWork 
              githubSubmitted={isGithubSubmitted} 
              linkedinSubmitted={isLinkedinSubmitted} 
            />
            <ProofOfWorkTimeline 
              completedDays={pData.completedDays}
              currentDay={pData.currentDay}
              githubSubmitted={isGithubSubmitted}
              linkedinSubmitted={isLinkedinSubmitted}
              pData={pData}
            />
          </div>

          {/* Right / Sidebar Column */}
          <div className="space-y-6 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <PersonalizedRoadmapWidget pData={pData} />
            <OverallProgress 
              user={activeUser} 
              completedDays={pData.completedDays} 
              missedDays={pData.missedDays}
              recoveredDays={pData.recoveredDays}
            />
            <Achievements achievements={currentAchievements} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
