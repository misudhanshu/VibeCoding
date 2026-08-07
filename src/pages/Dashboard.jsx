import React from "react";
import { Link } from "react-router"; // Fixed routing using standard v6/v7 'react-router'
import { Flame, Clock, Signal, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

const MOCK_TODAY = {
  day: 12,
  title: "Build a Habit Tracker",
  difficulty: "Intermediate",
  time: "2–3 hours",
  description:
    "Build a habit tracker where users can create habits, mark them complete, and view their weekly progress.",
};

const MOCK_ACTIVITY = [
  { day: 11, title: "Built a weather dashboard" },
  { day: 10, title: "Built a search & filter app" },
  { day: 9, title: "Built a currency converter" },
];

const MOCK_ACHIEVEMENTS = [
  {
    title: "First 7 Days",
    desc: "Completed your first week",
    icon: "🔥",
    unlocked: true,
  },
  {
    title: "10 Day Streak",
    desc: "Stayed consistent for 10 days",
    icon: "🚀",
    unlocked: true,
  },
  {
    title: "First Project",
    desc: "Submitted your first project",
    icon: "💻",
    unlocked: true,
  },
  {
    title: "Halfway Hero",
    desc: "Unlocks at Day 30",
    icon: "🏆",
    unlocked: false,
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━
// REUSABLE COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━

const StreakCard = ({ user }) => (
  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-transform hover:-translate-y-1 duration-300">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0 shadow-inner">
        <Flame className="h-7 w-7 text-orange-500" />
      </div>
      <div>
        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
          {user.streak} Day Streak
        </h2>
        <p className="text-sm text-gray-500 font-medium mt-0.5">
          Longest: {user.longestStreak} days
        </p>
      </div>
    </div>
    <div className="bg-indigo-50/80 rounded-xl px-4 py-3 sm:text-right border border-indigo-100/50 hidden sm:block md:hidden lg:block w-full sm:w-auto">
      <p className="text-sm font-bold text-indigo-900">
        You're building momentum.
      </p>
      <p className="text-xs text-indigo-700 mt-0.5">
        Keep showing up. You've got this!
      </p>
    </div>
  </div>
);

const TodayChallenge = ({ today, track }) => (
  <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-gray-100 overflow-hidden relative transition-transform hover:-translate-y-1 duration-300">
    {/* Accent bar */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    <div className="p-5 sm:p-6 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
          Due Today
        </span>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {track}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        Day {today.day} — {today.title}
      </h2>

      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 mb-4 font-medium">
        <div className="flex items-center gap-1.5">
          <Signal className="h-4 w-4 text-amber-500" /> {today.difficulty}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-blue-500" /> {today.time}
        </div>
      </div>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {today.description}
      </p>

      <div className="border-t border-gray-100 pt-5 mt-auto">
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

const ProofOfWork = () => (
  <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 mb-4">
      Today's Proof of Work
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* GitHub Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition-colors hover:bg-gray-50/80">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            <FaGithub className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">GitHub</p>
            <p className="text-xs font-medium text-gray-500">
              Repository / commit
            </p>
          </div>
        </div>
        <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/20">
          Pending
        </span>
      </div>

      {/* LinkedIn Block */}
      <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition-colors hover:bg-gray-50/80">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <FaLinkedin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">LinkedIn</p>
            <p className="text-xs font-medium text-gray-500">
              Share your progress
            </p>
          </div>
        </div>
        <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/20">
          Pending
        </span>
      </div>
    </div>
  </div>
);

const OverallProgress = ({ user }) => (
  <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 mb-4">
      Your 60-Day Journey
    </h3>
    <div className="flex justify-between items-end mb-2">
      <div>
        <p className="text-3xl font-black text-indigo-600">
          {user.currentDay}
          <span className="text-sm font-semibold text-gray-400"> / 60</span>
        </p>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
          {user.totalDays - user.currentDay} Remaining
        </p>
      </div>
      <p className="text-sm font-bold text-gray-900">{user.progress}%</p>
    </div>

    {/* Progress Bar */}
    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
        style={{ width: `${user.progress}%` }}
      ></div>
    </div>

    {/* Activity Matrix */}
    <div className="grid grid-cols-10 sm:grid-cols-12 gap-1.5 sm:gap-2">
      {Array.from({ length: user.totalDays }).map((_, i) => {
        const dayNum = i + 1;
        let stateClass = "bg-gray-100 hover:bg-gray-200"; // Upcoming
        let ringClass = "";

        if (dayNum < user.currentDay) {
          // Completed
          stateClass =
            "bg-green-500 hover:bg-green-400 shadow-sm shadow-green-200/50";
        } else if (dayNum === user.currentDay) {
          // Current (Today)
          stateClass =
            "bg-indigo-500 animate-pulse outline-none ring-2 ring-indigo-200 ring-offset-1 shadow-sm shadow-indigo-300/50";
        }

        return (
          <div
            key={dayNum}
            className={`aspect-square rounded-[3px] sm:rounded-sm transition-all duration-300 cursor-pointer ${stateClass} ${ringClass}`}
            title={
              dayNum === user.currentDay
                ? `Today (Day ${dayNum})`
                : `Day ${dayNum}`
            }
          />
        );
      })}
    </div>
  </div>
);

const Achievements = ({ achievements }) => (
  <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 mb-4">Achievements</h3>
    <div className="flex flex-col gap-3">
      {achievements.map((ach, i) => (
        <div
          key={i}
          className={`group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
            ach.unlocked
              ? "border-gray-100 bg-white hover:bg-gray-50 hover:shadow-sm"
              : "border-dashed border-gray-200 bg-gray-50/50 opacity-75"
          }`}
        >
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
              ach.unlocked
                ? "bg-indigo-50/80 text-2xl"
                : "bg-gray-100 grayscale hover:grayscale-0"
            }`}
          >
            {ach.icon}
          </div>
          <div>
            <p
              className={`text-sm font-bold ${ach.unlocked ? "text-gray-900" : "text-gray-500"}`}
            >
              {ach.title}
            </p>
            <p className="text-xs font-medium text-gray-500 mt-0.5">
              {ach.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ActivityTimeline = ({ activity }) => (
  <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] ring-1 ring-gray-100 p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-300">
    <h3 className="text-base font-bold text-gray-900 mb-6">Recent Activity</h3>
    <div className="relative border-l-2 border-indigo-100 ml-3 space-y-8 pb-2">
      {activity.map((act) => (
        <div key={act.day} className="relative pl-6 group">
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-500 ring-4 ring-white shadow-sm transition-transform group-hover:scale-110"></span>
          <p className="text-xs font-extrabold text-indigo-600 tracking-wide uppercase mb-1">
            Day {act.day}
          </p>
          <p className="text-sm font-bold text-gray-900 mb-2">{act.title}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <CheckCircle2 className="h-4 w-4 text-green-500" /> GitHub
              submitted
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <CheckCircle2 className="h-4 w-4 text-green-500" /> LinkedIn
              shared
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Header */}
      <header className="bg-white border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-gray-100/50">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-gray-900 transition-opacity hover:opacity-80"
          >
            ABTalks<span className="text-indigo-600">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right mr-1">
            <p className="text-sm font-bold text-gray-900">
              Good evening, {MOCK_USER.name.split(" ")[0]} 👋
            </p>
          </div>
          <button
            type="button"
            className="rounded-full transition-transform hover:scale-105 hover:ring-2 hover:ring-indigo-600 hover:ring-offset-2"
          >
            <img
              src={MOCK_USER.avatar}
              className="h-9 w-9 rounded-full shadow-sm"
              alt={`${MOCK_USER.name} Avatar`}
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
            <StreakCard user={MOCK_USER} />
            <TodayChallenge today={MOCK_TODAY} track={MOCK_USER.track} />
            <ProofOfWork today={MOCK_TODAY} />
            <ActivityTimeline activity={MOCK_ACTIVITY} />
          </div>

          {/* Right / Sidebar Column */}
          <div className="space-y-6 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <OverallProgress user={MOCK_USER} />
            <Achievements achievements={MOCK_ACHIEVEMENTS} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
