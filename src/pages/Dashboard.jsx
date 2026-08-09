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
    <div className="bg-gray-900 text-white dark:bg-indigo-950 dark:text-indigo-100 border-b border-indigo-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 text-xs font-medium transition-colors">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-extrabold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/30 text-[9px] sm:text-xs shrink-0">
            ⚡ DEMO
          </span>
          <span className="text-[10px] sm:text-xs text-gray-300 dark:text-slate-300 font-medium truncate">
            Test Missed Day + Recovery
          </span>
        </div>
        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => toggleSimulateMissedDay(8)}
            className={`flex-1 sm:flex-initial px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-bold text-[10px] sm:text-xs transition-all shadow-sm text-center ${
              isDay8Missed
                ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
                : isDay8Recovered
                ? "bg-emerald-600 text-white hover:bg-emerald-500"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            {isDay8Missed
              ? "✓ Day 8 Missed"
              : isDay8Recovered
              ? "✓ Day 8 Recovered"
              : "Simulate Day 8 Missed"}
          </button>
          <button
            onClick={resetToDefault}
            className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 text-[10px] sm:text-xs font-semibold transition-colors shrink-0"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const MissedDayRecoveryCard = ({ missedDay }) => {
  if (!missedDay) return null;
  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 rounded-2xl p-3.5 sm:p-5 shadow-md ring-1 ring-amber-200 dark:ring-amber-800/60 border-l-4 border-l-amber-500 transition-transform hover:-translate-y-0.5 duration-300">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-center justify-between">
        <div className="flex items-start gap-2.5 sm:gap-3.5">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-500 text-amber-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-200/70 dark:bg-amber-900/60 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                ⚡ DAY {missedDay} MISSED
              </span>
            </div>
            <p className="text-gray-900 dark:text-white font-extrabold text-sm sm:text-base leading-snug mb-0.5">
              You're one step away from getting back on track.
            </p>
            <p className="text-gray-600 dark:text-slate-300 text-xs font-medium leading-relaxed">
              Complete the challenge to restore your streak momentum.
            </p>
          </div>
        </div>
        <Link
          to={`/day/${missedDay}`}
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-all active:scale-95 shadow-md shadow-amber-600/20"
        >
          Recover Day {missedDay} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </div>
  );
};

const SmartMotivationCard = ({ currentDay, streak, completedDays, missedDay }) => {
  if (missedDay) return null; // Avoid duplicate recovery card when a day is missed!

  const isFirstDay = currentDay === 1 && streak === 0 && completedDays.length === 0;
  const isActiveStreak = streak > 0;

  if (isFirstDay) {
    return (
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl p-3.5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-green-500">
        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-green-600 dark:text-green-400 tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Sprout className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Your Journey Starts Here
            </h3>
            <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-lg mb-0.5">Everyone starts somewhere.</p>
            <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">Complete your first challenge and start building your public proof of work.</p>
          </div>
          <Link
            to="/day/1"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Start Day 1
          </Link>
        </div>
      </div>
    );
  }

  if (isActiveStreak) {
    return (
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl p-3.5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-orange-500">
        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 items-start sm:items-center justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-orange-600 dark:text-orange-500 tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {streak} Day Streak
            </h3>
            <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-lg mb-0.5">You're building momentum.</p>
            <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">{streak} days of showing up. Keep the streak alive.</p>
          </div>
          <Link
            to={`/day/${currentDay}`}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
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
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-4 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-yellow-500 text-center">
        <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-3">
          <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 className="text-xs sm:text-sm font-extrabold text-yellow-600 dark:text-yellow-500 tracking-widest uppercase mb-1.5">
          🏆 Challenge Complete
        </h3>
        <p className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5">You completed the 60-day challenge.</p>
        <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm mb-5 max-w-md mx-auto">
          You've built consistency, shipped projects, and grown immensely over these 60 days.
        </p>
        <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-6 py-3 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md">
          View Your Journey
        </button>
      </div>
    );
  }

  if (!isCurrentCompleted) {
    return (
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-indigo-500">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-5">
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Action Required
            </h3>
            <p className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-0.5">Finish today's challenge first</p>
            <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">
              You must complete Day {currentDay} before unlocking what's next.
            </p>
          </div>
          <Link
            to={`/day/${currentDay}`}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Continue Day {currentDay} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const nextDay = currentDay + 1;
  const nextChallenge = getChallengeData(nextDay);

  return (
    <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-8 transition-transform hover:-translate-y-1 duration-300 border-t-4 border-t-green-500 relative overflow-hidden">
      {/* Accent Graphic */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-green-500/10 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
        <div className="flex-1 min-w-0 w-full">
          <h3 className="text-xs sm:text-sm font-extrabold text-green-600 dark:text-green-400 tracking-widest uppercase mb-1 flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Next Up
          </h3>
          <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-0.5">Day {nextDay}</p>
          <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm font-medium mb-3">Keep the momentum going. You finished today's work. Here's what's waiting for you next.</p>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 sm:p-4 ring-1 ring-gray-100 dark:ring-gray-700/50">
            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1">{nextChallenge.title}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-2.5">{nextChallenge.desc}</p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-gray-500 dark:text-slate-400">
              <span className="flex items-center gap-1"><Signal className="h-3 w-3 text-amber-500 dark:text-amber-400" /> {nextChallenge.diff}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-blue-500 dark:text-blue-400" /> {nextChallenge.time}</span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto shrink-0 flex items-center sm:h-full sm:pt-14">
          <Link
            to={`/day/${nextDay}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md"
          >
            Preview Day {nextDay} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const StreakCard = ({ user, recoveryStatus }) => (
  <div className="w-full bg-white dark:bg-[#111827] rounded-2xl p-3.5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 dark:ring-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-transform hover:-translate-y-1 duration-300">
    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
      <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 shadow-inner">
        <Flame className="h-6 w-6 sm:h-7 sm:w-7 text-orange-500 dark:text-orange-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-1.5 leading-tight">
          {user.streak} Day Streak
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-0.5">
          Longest: {user.longestStreak} days
        </p>
      </div>
    </div>
    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 pt-2.5 border-t border-gray-100 dark:border-gray-800/80 sm:border-0 sm:pt-0 w-full sm:w-auto">
      <span className="text-[10px] sm:text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest shrink-0">
        Recovery Status
      </span>
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-extrabold shrink-0 ${
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
  <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden relative transition-transform hover:-translate-y-1 duration-300">
    {/* Accent bar */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    <div className="p-3.5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-600/20 dark:ring-indigo-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
          Due Today
        </span>
        <span className="text-[10px] sm:text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
          {track}
        </span>
      </div>

      <h2 className="text-base sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
        Day {today.day} — {today.title}
      </h2>

      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-slate-300 mb-3 font-medium">
        <div className="flex items-center gap-1.5">
          <Signal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-500 dark:text-amber-400" />{" "}
          {today.difficulty}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500 dark:text-blue-400" />{" "}
          {today.time}
        </div>
      </div>

      <p className="text-gray-600 dark:text-slate-400 mb-4 text-xs sm:text-sm leading-relaxed">
        {today.description}
      </p>

      <div className="border-t border-gray-100 dark:border-gray-800 pt-3.5 mt-auto">
        <Link
          to={`/day/${today.day}`}
          className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
        >
          Continue Challenge
        </Link>
      </div>
    </div>
  </div>
);

const ProofOfWork = ({ githubSubmitted, linkedinSubmitted }) => (
  <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-xs sm:text-base font-bold text-gray-900 dark:text-white mb-3">
      Today's Proof of Work
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
      {/* GitHub Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 p-3 sm:p-4 transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/50">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              GitHub
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-slate-400">
              Repository / commit
            </p>
          </div>
        </div>
        {githubSubmitted ? (
          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-green-800 dark:text-green-300 ring-1 ring-inset ring-green-600/20 shrink-0">
            Submitted ✓
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-amber-800 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20 shrink-0">
            Pending
          </span>
        )}
      </div>

      {/* LinkedIn Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 p-3 sm:p-4 transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/50">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              LinkedIn
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-slate-400">
              Share progress
            </p>
          </div>
        </div>
        {linkedinSubmitted ? (
          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-green-800 dark:text-green-300 ring-1 ring-inset ring-green-600/20 shrink-0">
            Shared ✓
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-amber-800 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20 shrink-0">
            Pending
          </span>
        )}
      </div>
    </div>
  </div>
);

const OverallProgress = ({ user, completedDays, missedDays = [], recoveredDays = [] }) => (
  <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-xs sm:text-base font-bold text-gray-900 dark:text-white mb-2.5 sm:mb-4">
      Your 60-Day Journey
    </h3>
    <div className="flex justify-between items-end mb-2">
      <div>
        <p className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-yellow-400">
          {user.currentDay}
          <span className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-slate-500">
            {" "}
            / 60
          </span>
        </p>
        <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
          {user.totalDays - user.currentDay} Remaining
        </p>
      </div>
      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
        {user.progress}%
      </p>
    </div>

    {/* Progress Bar */}
    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-4 sm:mb-5">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-yellow-500 transition-all duration-1000 ease-out"
        style={{ width: `${user.progress}%` }}
      ></div>
    </div>

    {/* Activity Matrix */}
    <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
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
            className={`aspect-square rounded-[2px] sm:rounded-sm transition-all duration-300 cursor-pointer ${stateClass} ${ringClass}`}
            title={titleText}
          />
        );
      })}
    </div>

    {/* Legend */}
    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mt-3.5 pt-2.5 border-t border-gray-100 dark:border-gray-800 text-[9px] sm:text-[11px] text-gray-500 dark:text-slate-400 font-medium">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-sm bg-green-500"></span> Completed
      </div>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-sm bg-emerald-500"></span> Recovered
      </div>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-sm bg-amber-500"></span> Missed
      </div>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-sm bg-indigo-500 dark:bg-yellow-500"></span> Current
      </div>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-sm bg-gray-200 dark:bg-gray-800"></span> Locked
      </div>
    </div>
  </div>
);

const Achievements = ({ achievements }) => (
  <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-xs sm:text-base font-bold text-gray-900 dark:text-white mb-2.5 sm:mb-4">
      Achievements
    </h3>
    <div className="flex flex-col gap-2 sm:gap-3">
      {achievements.map((ach, i) => (
        <div
          key={i}
          className={`group flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-3 rounded-xl border transition-all duration-300 ${
            ach.unlocked
              ? "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm"
              : "border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 opacity-75"
          }`}
        >
          <div
            className={`h-9 w-9 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
              ach.unlocked
                ? "bg-indigo-50/80 dark:bg-indigo-900/30 text-lg sm:text-2xl"
                : "bg-gray-100 dark:bg-gray-800 grayscale hover:grayscale-0"
            }`}
          >
            {ach.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={`text-xs sm:text-sm font-bold ${ach.unlocked ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-600"}`}
            >
              {ach.title}
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-slate-400 mt-0.5 truncate">
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
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-indigo-500">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-yellow-400 shrink-0">
            <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <h3 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-yellow-400">
              Career Roadmap
            </h3>
            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Choose Your Path</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 dark:text-slate-400 mb-3.5 leading-relaxed">
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
    <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300 border-l-4 border-l-indigo-500">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-yellow-400 shrink-0">
            <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-yellow-400 block">
              Active Track
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight truncate">
              {roadmap.title}
            </h3>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-black text-indigo-600 dark:text-yellow-400 shrink-0">
          {percent}%
        </span>
      </div>

      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-indigo-600 dark:bg-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs text-gray-600 dark:text-slate-400 mb-3.5">
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
      <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-4 sm:p-8 transition-transform hover:-translate-y-1 duration-300 text-center border-t-4 border-t-green-500">
        <h3 className="text-xs sm:text-sm font-extrabold text-green-600 dark:text-green-500 tracking-widest uppercase mb-3 flex items-center justify-center gap-1.5">
          Your Journey Starts Here <Sprout className="h-4 w-4 sm:h-5 sm:w-5" />
        </h3>
        <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-lg mb-1.5">No proof of work yet.</p>
        <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm mb-5 max-w-sm mx-auto">
          Complete your first challenge and your progress will appear here.
        </p>
        <Link
          to="/day/1"
          className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white px-6 py-3 text-xs sm:text-sm font-bold text-white dark:text-gray-900 transition-transform hover:-translate-y-0.5 active:scale-95 shadow-md"
        >
          Start Day 1
        </Link>
      </div>
    );
  }

  const visibleEntries = isExpanded ? entries : entries.slice(0, 5);
  const hasMore = entries.length > 5;

  return (
    <div className="w-full bg-white dark:bg-[#111827] rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 dark:ring-gray-800 p-3.5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
      <div className="mb-4 sm:mb-5 border-b border-gray-100 dark:border-gray-800 pb-3 sm:pb-4">
        <h3 className="text-xs sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
          PROOF OF WORK
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-0.5">
          Your journey, one day at a time.
        </p>
      </div>

      <div className="relative border-l-2 border-indigo-100 dark:border-gray-800 ml-2 sm:ml-3 space-y-5 sm:space-y-8 pb-1">
        {visibleEntries.map((entry) => (
          <div key={entry.id} className="relative pl-4 sm:pl-6 group">
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
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 mb-1.5">
              <div>
                <p className={`text-[10px] sm:text-xs font-extrabold tracking-wide uppercase mb-0.5 ${
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
                <p className={`text-xs sm:text-base font-bold ${entry.isCompleted ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                  {entry.title}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-gray-800/50 px-2 py-0.5 rounded-md ring-1 ring-gray-100 dark:ring-gray-700/50 w-fit">
                <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                {entry.date}
              </div>
            </div>

            {entry.isMissed ? (
              <div className="mt-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    Recovery Available
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                    Complete this challenge to restore your streak momentum.
                  </p>
                </div>
                <Link
                  to={`/day/${entry.day}`}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3 py-1.5 shadow-sm transition-all active:scale-95"
                >
                  Recover Day {entry.day}
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-1 sm:gap-2 mt-2.5">
                <div className={`flex items-center gap-1.5 text-xs font-medium ${entry.github ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                  <GitCommit className={`h-3.5 w-3.5 ${entry.github ? "text-gray-900 dark:text-white" : ""}`} />
                  {entry.github ? "GitHub Commit Added" : "GitHub Pending"}
                  {entry.github && (
                    <span className="ml-1 text-[11px] text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">View Commit</span>
                  )}
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${entry.linkedin ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                  <FaLinkedin className={`h-3.5 w-3.5 ${entry.linkedin ? "text-blue-600 dark:text-blue-400" : ""}`} />
                  {entry.linkedin ? "LinkedIn Post Shared" : "LinkedIn Pending"}
                  {entry.linkedin && (
                    <span className="ml-1 text-[11px] text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">View Post</span>
                  )}
                </div>
              </div>
            )}

            {!entry.isCompleted && !entry.isMissed && (
              <div className="mt-2.5">
                <Link
                  to={`/day/${entry.day}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 px-3.5 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  Continue Challenge
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && !isExpanded && (
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
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
    recoveryStatus = { type: "recovered", label: "✓ On Track" };
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
      <header className="bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-gray-100/50 dark:shadow-none transition-colors duration-300">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-opacity hover:opacity-80"
          >
            ABTalks
            <span className="text-indigo-600 dark:text-purple-400">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-indigo-50 dark:bg-yellow-400/10 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-xs font-bold text-indigo-600 dark:text-yellow-400 ring-1 ring-inset ring-indigo-600/20 dark:ring-yellow-400/30 hover:bg-indigo-100 dark:hover:bg-yellow-400/20 transition-colors"
          >
            <Compass className="h-3.5 w-3.5" /> <span className="hidden xs:inline">Roadmap</span>
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
            className="inline-flex items-center justify-center rounded-full p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 dark:text-yellow-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 dark:focus-visible:ring-yellow-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            {!isDark ? (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>

          <button
            type="button"
            className="rounded-full transition-transform hover:scale-105 shrink-0"
          >
            <img
              src={activeUser.avatar}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full shadow-sm"
              alt={`${activeUser.name} Avatar`}
            />
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-3.5 sm:mt-8 w-full">
        <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-12 lg:gap-8 items-start w-full">
          {/* Left / Main Column Container */}
          <div className="contents lg:block lg:col-span-7 xl:col-span-8 lg:space-y-6">
            <div className="order-1 lg:order-none lg:mb-6 w-full">
              <StreakCard user={activeUser} recoveryStatus={recoveryStatus} />
            </div>
            
            {hasActiveMissed && (
              <div className="order-2 lg:order-none lg:mb-6 w-full">
                <MissedDayRecoveryCard missedDay={activeMissedDay} />
              </div>
            )}

            {!hasActiveMissed && (
              <div className="order-2 lg:order-none lg:mb-6 w-full">
                <SmartMotivationCard 
                  currentDay={pData.currentDay} 
                  streak={activeUser.streak} 
                  completedDays={pData.completedDays} 
                  missedDay={activeMissedDay}
                />
              </div>
            )}

            <div className="order-3 lg:order-none lg:mb-6 w-full">
              <TodayChallenge today={currentTodayMock} track={activeUser.track} />
            </div>

            <div className="order-4 lg:order-none lg:mb-6 w-full">
              <NextUpCard 
                currentDay={pData.currentDay} 
                completedDays={pData.completedDays}
                totalDays={activeUser.totalDays}
              />
            </div>

            <div className="order-4 lg:order-none lg:mb-6 w-full">
              <ProofOfWork 
                githubSubmitted={isGithubSubmitted} 
                linkedinSubmitted={isLinkedinSubmitted} 
              />
            </div>

            <div className="order-4 lg:order-none w-full">
              <ProofOfWorkTimeline 
                completedDays={pData.completedDays}
                currentDay={pData.currentDay}
                githubSubmitted={isGithubSubmitted}
                linkedinSubmitted={isLinkedinSubmitted}
                pData={pData}
              />
            </div>
          </div>

          {/* Right / Sidebar Column Container */}
          <div className="contents lg:block lg:col-span-5 xl:col-span-4 lg:space-y-6 lg:sticky lg:top-24">
            <div className="order-5 lg:order-none lg:mb-6 w-full">
              <OverallProgress 
                user={activeUser} 
                completedDays={pData.completedDays} 
                missedDays={pData.missedDays}
                recoveredDays={pData.recoveredDays}
              />
            </div>

            <div className="order-6 lg:order-none lg:mb-6 w-full">
              <Achievements achievements={currentAchievements} />
            </div>

            <div className="order-7 lg:order-none w-full">
              <PersonalizedRoadmapWidget pData={pData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
