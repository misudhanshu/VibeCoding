import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  Layout,
  Server,
  Layers,
  Sparkles,
  BarChart3,
  Code2,
  CheckCircle2,
  Circle,
  ArrowRight,
  RotateCcw,
  Compass,
  Trophy,
  Flame,
  Sun,
  Moon,
  Zap,
  Check,
  ChevronRight,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useProgress } from "../context/ProgressContext";
import { ROADMAPS, getRoadmapById } from "../data/roadmapData";

const ICON_MAP = {
  Layout,
  Server,
  Layers,
  Sparkles,
  BarChart3,
  Code2,
};

const MobileRoadmapHeaderMenu = ({
  isOpen,
  onClose,
  onChangePath,
  isDark,
  toggleTheme,
  showChangePath = true,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-xs sm:hidden"
        onClick={onClose}
      />

      {/* Dropdown Menu */}
      <div className="fixed top-16 right-4 left-4 z-50 bg-white dark:bg-[#111827] rounded-2xl p-5 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 space-y-3 sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
            Roadmap Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3">
          {showChangePath && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onChangePath();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-50 dark:bg-yellow-400/10 text-indigo-700 dark:text-yellow-400 text-sm font-bold border border-indigo-100 dark:border-yellow-400/20 active:scale-95 transition-transform cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <RotateCcw className="h-4 w-4" />
                Change Path
              </span>
              <ChevronRight className="h-4 w-4 text-indigo-400 dark:text-yellow-400" />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              toggleTheme();
            }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-slate-200 text-sm font-bold active:scale-95 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              {!isDark ? (
                <>
                  <Moon className="h-4 w-4 text-indigo-600" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4 text-yellow-400" />
                  Light Mode
                </>
              )}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white dark:bg-gray-700 text-gray-600 dark:text-slate-300">
              {isDark ? "Dark" : "Light"}
            </span>
          </button>

          <Link
            to="/dashboard"
            onClick={onClose}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-slate-300 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <Compass className="h-4 w-4 text-gray-500" />
              Go to Dashboard
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>
        </div>
      </div>
    </>
  );
};

const RoadmapPage = () => {
  const { roadmapId: urlRoadmapId } = useParams();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { progress, setSelectedRoadmap, toggleRoadmapMilestone } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selected roadmap logic: URL param takes priority, else context state
  const activeRoadmapId = urlRoadmapId || progress.selectedRoadmapId;
  const activeRoadmap = getRoadmapById(activeRoadmapId);

  useEffect(() => {
    // If URL has roadmapId and it differs from context, sync context
    if (urlRoadmapId && urlRoadmapId !== progress.selectedRoadmapId) {
      if (getRoadmapById(urlRoadmapId)) {
        setSelectedRoadmap(urlRoadmapId);
      }
    }
  }, [urlRoadmapId, progress.selectedRoadmapId, setSelectedRoadmap]);

  const handleSelectRoadmap = (id) => {
    setSelectedRoadmap(id);
    navigate(`/roadmap/${id}`);
  };

  const handleChangePath = () => {
    setSelectedRoadmap(null);
    navigate("/roadmap");
  };

  const currentDay = progress.currentDay || 1;
  const completedDays = progress.completedDays || [];
  const hasStartedChallenge = completedDays.length > 0 || currentDay > 1;

  // Render Selection View if no active roadmap selected
  if (!activeRoadmap) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B1020] text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/50 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-gray-100/50 dark:shadow-none transition-colors duration-300">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-opacity hover:opacity-80"
            >
              ABTalks
              <span className="text-indigo-600 dark:text-purple-400">.</span>
            </Link>
            <span className="hidden sm:inline-block h-4 w-px bg-gray-300 dark:bg-gray-700" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-yellow-400 bg-indigo-50 dark:bg-yellow-400/10 px-2.5 py-1 rounded-full border border-indigo-100 dark:border-yellow-400/20">
              <Compass className="h-3.5 w-3.5" /> Career Roadmaps
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-gray-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-yellow-400 transition-colors"
            >
              Dashboard
            </Link>
            {/* Desktop Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="hidden sm:inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 dark:text-yellow-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-yellow-400"
            >
              {!isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main menu"
              className="sm:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        <MobileRoadmapHeaderMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onChangePath={handleChangePath}
          isDark={isDark}
          toggleTheme={toggleTheme}
          showChangePath={false}
        />

        {/* Selection Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-yellow-400/10 text-indigo-700 dark:text-yellow-400 text-xs font-bold tracking-wide uppercase mb-4 ring-1 ring-inset ring-indigo-600/20 dark:ring-yellow-400/30">
              <Sparkles className="h-3.5 w-3.5" />
              What's your goal?
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
              Choose Your Path
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              Tell us what you want to become. We'll help you build the skills and projects to get there.
            </p>

            {/* Loop Indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-800 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-gray-500 dark:text-slate-400">
              <span className="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs">
                Roadmap
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
              <span className="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs">
                Daily Challenge
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
              <span className="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs">
                Build & Submit
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
              <span className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-800 shadow-xs">
                Proof of Work
              </span>
            </div>
          </div>

          {/* 6 Roadmap Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ROADMAPS.map((roadmap) => {
              const IconComp = ICON_MAP[roadmap.iconName] || Layout;
              const totalMilestones = roadmap.stages.reduce(
                (acc, stage) => acc + stage.milestones.length,
                0
              );
              const stageCount = roadmap.stages.length;

              return (
                <div
                  key={roadmap.id}
                  className="group bg-white dark:bg-[#111827] rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] dark:shadow-none ring-1 ring-gray-200/80 dark:ring-gray-800 hover:ring-indigo-500 dark:hover:ring-yellow-400/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle top accent gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${roadmap.color}`}
                  />

                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-13 w-13 rounded-2xl bg-indigo-50 dark:bg-gray-800/80 flex items-center justify-center text-indigo-600 dark:text-yellow-400 ring-1 ring-indigo-100 dark:ring-gray-700 transition-transform group-hover:scale-110 duration-300">
                        <IconComp className="h-7 w-7" />
                      </div>
                      <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-slate-300">
                        {roadmap.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors">
                      {roadmap.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                      {roadmap.shortDescription}
                    </p>
                  </div>

                  {/* Stage Summary & CTA */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80">
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5 text-indigo-500 dark:text-yellow-400" />
                        {stageCount} Stages
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Trophy className="h-3.5 w-3.5 text-amber-500" />
                        {totalMilestones} Milestones
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectRoadmap(roadmap.id)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-indigo-600 dark:bg-white dark:hover:bg-yellow-400 px-5 py-3 text-sm font-bold text-white dark:text-gray-900 dark:hover:text-gray-900 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      Explore Roadmap
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  // Calculate detailed dynamic state for selected roadmap
  const IconComp = ICON_MAP[activeRoadmap.iconName] || Layout;
  const userRoadmapProg =
    progress.roadmapProgress?.[activeRoadmap.id]?.completedMilestones || [];

  // All milestones flattened
  const allMilestones = activeRoadmap.stages.flatMap((stage) => stage.milestones);
  const totalMilestonesCount = allMilestones.length;
  const completedCount = userRoadmapProg.length;
  const progressPercent =
    totalMilestonesCount > 0
      ? Math.round((completedCount / totalMilestonesCount) * 100)
      : 0;

  // Identify current working & next milestone
  const currentWorkingMilestone =
    allMilestones.find((m) => !userRoadmapProg.includes(m.id)) ||
    allMilestones[allMilestones.length - 1];

  const currentWorkingIndex = allMilestones.findIndex(
    (m) => m.id === currentWorkingMilestone?.id
  );
  const nextMilestone =
    currentWorkingIndex >= 0 && currentWorkingIndex < allMilestones.length - 1
      ? allMilestones[currentWorkingIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1020] text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/50 pb-20 transition-colors duration-300">
      {/* Navbar */}
      <header className="bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-gray-100/50 dark:shadow-none transition-colors duration-300">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-opacity hover:opacity-80"
          >
            ABTalks
            <span className="text-indigo-600 dark:text-purple-400">.</span>
          </Link>
          <span className="h-4 w-px bg-gray-300 dark:bg-gray-700 hidden sm:inline-block" />
          <Link
            to="/roadmap"
            onClick={handleChangePath}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-yellow-400 transition-colors"
          >
            Roadmaps
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400 hidden sm:inline-block" />
          <span className="text-xs font-bold text-gray-900 dark:text-white truncate max-w-[140px] sm:max-w-none">
            {activeRoadmap.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop Change Path */}
          <button
            type="button"
            onClick={handleChangePath}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-yellow-400 hover:underline bg-indigo-50 dark:bg-yellow-400/10 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-yellow-400/20 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Change Path
          </button>

          {/* Desktop Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="hidden sm:inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 dark:text-yellow-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-yellow-400"
          >
            {!isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* Mobile Hamburger Button (390px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open main menu"
            className="sm:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <MobileRoadmapHeaderMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onChangePath={handleChangePath}
        isDark={isDark}
        toggleTheme={toggleTheme}
        showChangePath={true}
      />

      {/* Main Roadmap Container */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Dynamic Header & Personalized Banner */}
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] ring-1 ring-gray-200/80 dark:ring-gray-800 mb-8 sm:mb-12 relative overflow-hidden">
          {/* Accent Background Glow */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-indigo-500/10 dark:bg-yellow-400/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-yellow-400">
                  <IconComp className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">
                    {activeRoadmap.badge}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Your {activeRoadmap.title} Journey
                  </h1>
                </div>
              </div>

              {/* Dynamic status sentence */}
              <div className="mt-4 space-y-1">
                {completedCount === totalMilestonesCount ? (
                  <p className="text-base font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                    <Trophy className="h-5 w-5" /> Congratulations! You have completed all milestones for this roadmap.
                  </p>
                ) : (
                  <>
                    <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-slate-200">
                      You're currently working on{" "}
                      <span className="text-indigo-600 dark:text-yellow-400 underline decoration-indigo-300 dark:decoration-yellow-400/50">
                        {currentWorkingMilestone?.title || "Foundations"}
                      </span>
                      .
                    </p>
                    {nextMilestone && (
                      <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-slate-400">
                        Next milestone:{" "}
                        <span className="font-semibold text-gray-700 dark:text-slate-300">
                          {nextMilestone.title}
                        </span>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Challenge CTA Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100 dark:border-gray-800">
              <Link
                to={`/day/${hasStartedChallenge ? currentDay : 1}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-yellow-400 dark:hover:bg-yellow-300 px-6 py-3.5 text-sm font-bold text-white dark:text-gray-900 shadow-md shadow-indigo-600/20 dark:shadow-none transition-all active:scale-95"
              >
                <Flame className="h-4 w-4" />
                {hasStartedChallenge ? `Continue Day ${currentDay}` : "Start Day 1"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Dynamic Progress Indicator */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/80">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
              <span className="text-gray-700 dark:text-slate-300 flex items-center gap-2">
                Overall Progress
                <span className="text-xs font-normal text-gray-500 dark:text-slate-400">
                  ({completedCount} / {totalMilestonesCount} milestones completed)
                </span>
              </span>
              <span className="text-indigo-600 dark:text-yellow-400 font-extrabold text-base sm:text-lg">
                {progressPercent}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-500 dark:to-amber-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stages Timeline */}
        <div className="space-y-10 sm:space-y-12">
          {activeRoadmap.stages.map((stage) => {
            const stageMilestones = stage.milestones;
            const stageCompletedCount = stageMilestones.filter((m) =>
              userRoadmapProg.includes(m.id)
            ).length;
            const isStageComplete =
              stageMilestones.length > 0 &&
              stageCompletedCount === stageMilestones.length;

            return (
              <div
                key={stage.id}
                className="relative bg-white dark:bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] ring-1 ring-gray-200/80 dark:ring-gray-800 transition-all duration-300"
              >
                {/* Stage Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 text-base font-black tracking-wider ${
                        isStageComplete
                          ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                          : "bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-yellow-400 ring-1 ring-indigo-100 dark:ring-gray-700"
                      }`}
                    >
                      {stage.stageNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {stage.title}
                        </h2>
                        {isStageComplete && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                            <Check className="h-3 w-3" /> Stage Complete
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-0.5">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-xs font-bold text-gray-500 dark:text-slate-400">
                      {stageCompletedCount} / {stageMilestones.length} done
                    </span>
                  </div>
                </div>

                {/* Vertical Timeline Items inside Stage */}
                <div className="mt-6 space-y-4 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none" />

                  {stageMilestones.map((milestone) => {
                    const isCompleted = userRoadmapProg.includes(milestone.id);
                    const isWorking = milestone.id === currentWorkingMilestone?.id;

                    return (
                      <div
                        key={milestone.id}
                        className={`group relative flex items-start gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                          isCompleted
                            ? "bg-green-50/40 dark:bg-green-950/20 border-green-200/80 dark:border-green-800/40"
                            : isWorking
                            ? "bg-indigo-50/50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/60 ring-2 ring-indigo-500/20 dark:ring-yellow-400/20"
                            : "bg-white dark:bg-[#111827] border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                        }`}
                      >
                        {/* Checkbox / Node Toggle */}
                        <button
                          type="button"
                          onClick={() =>
                            toggleRoadmapMilestone(activeRoadmap.id, milestone.id)
                          }
                          aria-label={
                            isCompleted
                              ? `Mark ${milestone.title} as incomplete`
                              : `Mark ${milestone.title} as completed`
                          }
                          className="relative z-10 mt-0.5 h-6 w-6 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 fill-green-100 dark:fill-green-950" />
                          ) : isWorking ? (
                            <Circle className="h-6 w-6 text-indigo-600 dark:text-yellow-400 animate-pulse stroke-[2.5]" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-300 dark:text-gray-700 group-hover:text-gray-400" />
                          )}
                        </button>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3
                              onClick={() =>
                                toggleRoadmapMilestone(activeRoadmap.id, milestone.id)
                              }
                              className={`text-sm sm:text-base font-bold cursor-pointer transition-colors ${
                                isCompleted
                                  ? "text-gray-900 dark:text-white line-through opacity-80"
                                  : isWorking
                                  ? "text-indigo-900 dark:text-yellow-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {milestone.title}
                            </h3>

                            {/* Status Tag */}
                            <div className="flex items-center gap-2">
                              {isCompleted && (
                                <span className="text-[11px] font-extrabold uppercase tracking-wide text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md">
                                  Completed
                                </span>
                              )}
                              {!isCompleted && isWorking && (
                                <span className="text-[11px] font-extrabold uppercase tracking-wide text-indigo-700 dark:text-yellow-400 bg-indigo-100 dark:bg-yellow-400/20 px-2 py-0.5 rounded-md">
                                  In Progress
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 mt-1 font-normal leading-relaxed">
                            {milestone.description}
                          </p>

                          {/* Action Button linking to challenge */}
                          {milestone.dayLink && (
                            <div className="mt-3">
                              <Link
                                to={`/day/${milestone.dayLink}`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-yellow-400 hover:text-indigo-700 dark:hover:text-yellow-300 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-gray-700 shadow-xs hover:shadow-sm transition-all"
                              >
                                <Zap className="h-3.5 w-3.5" />
                                Practice with ABTalks (Day {milestone.dayLink})
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default RoadmapPage;
