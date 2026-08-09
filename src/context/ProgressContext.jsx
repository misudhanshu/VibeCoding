/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

export const calculateCurrentStreak = (days) => {
  if (!days || days.length === 0) return 0;
  const sorted = [...new Set(days)].sort((a, b) => a - b);
  let current = 1;
  for (let i = sorted.length - 1; i > 0; i--) {
    if (sorted[i] === sorted[i - 1] + 1) {
      current++;
    } else {
      break;
    }
  }
  return current;
};

const ProgressContext = createContext();

export const DEFAULT_STATE = {
  currentDay: 13,
  currentStreak: 12,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  githubSubmitted: true,
  linkedinSubmitted: true,
  day12Completed: true,
  proofOfWork: {
    12: { githubSubmitted: true, linkedinSubmitted: true }
  },
  selectedRoadmapId: null,
  roadmapProgress: {},
  missedDays: [],
  recoveredDays: []
};

export const FIRST_DAY_STATE = {
  currentDay: 1,
  currentStreak: 0,
  completedDays: [],
  githubSubmitted: false,
  linkedinSubmitted: false,
  day12Completed: false,
  proofOfWork: {},
  selectedRoadmapId: null,
  roadmapProgress: {},
  missedDays: [],
  recoveredDays: []
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("abtalks-progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.proofOfWork) {
          parsed.proofOfWork = {};
        }
        if (!parsed.roadmapProgress) {
          parsed.roadmapProgress = {};
        }
        if (parsed.selectedRoadmapId === undefined) {
          parsed.selectedRoadmapId = null;
        }
        if (!parsed.missedDays) {
          parsed.missedDays = [];
        }
        if (!parsed.recoveredDays) {
          parsed.recoveredDays = [];
        }
        return parsed;
      } catch {
        return DEFAULT_STATE;
      }
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("abtalks-progress", JSON.stringify(progress));
  }, [progress]);

  const updateSubmission = (dayNumber, type, value) => {
    setProgress((prev) => {
      const field = type === "github" ? "githubSubmitted" : "linkedinSubmitted";
      const currentProof = prev.proofOfWork || {};
      const dayProof = currentProof[dayNumber] || { githubSubmitted: false, linkedinSubmitted: false };

      return {
        ...prev,
        proofOfWork: {
          ...currentProof,
          [dayNumber]: {
            ...dayProof,
            [field]: value
          }
        }
      };
    });
  };

  const markDayAsMissed = (dayNumber) => {
    setProgress((prev) => {
      const missed = prev.missedDays || [];
      if (missed.includes(dayNumber)) return prev;
      return {
        ...prev,
        missedDays: [...missed, dayNumber],
        completedDays: (prev.completedDays || []).filter((d) => d !== dayNumber),
        recoveredDays: (prev.recoveredDays || []).filter((d) => d !== dayNumber)
      };
    });
  };

  const recoverDay = (dayNumber, extraProof = {}) => {
    setProgress((prev) => {
      const missed = (prev.missedDays || []).filter((d) => d !== dayNumber);
      const completed = prev.completedDays.includes(dayNumber)
        ? prev.completedDays
        : [...prev.completedDays, dayNumber];
      const recovered = prev.recoveredDays?.includes(dayNumber)
        ? prev.recoveredDays
        : [...(prev.recoveredDays || []), dayNumber];

      const currentProof = prev.proofOfWork || {};
      const dayProof = currentProof[dayNumber] || {};
      const updatedProof = {
        ...currentProof,
        [dayNumber]: {
          ...dayProof,
          githubSubmitted: true,
          linkedinSubmitted: true,
          ...extraProof
        }
      };

      return {
        ...prev,
        missedDays: missed,
        completedDays: completed,
        recoveredDays: recovered,
        proofOfWork: updatedProof
      };
    });
  };

  const getDayStatus = (dayNumber) => {
    const missed = progress.missedDays || [];
    const recovered = progress.recoveredDays || [];
    const completed = progress.completedDays || [];

    if (recovered.includes(dayNumber)) return "recovered";
    if (missed.includes(dayNumber)) return "missed";
    if (completed.includes(dayNumber)) return "completed";
    if (dayNumber === progress.currentDay) return "current";
    if (dayNumber < progress.currentDay) return "pending";
    return "locked";
  };

  const toggleSimulateMissedDay = (dayNumber = 8) => {
    setProgress((prev) => {
      const missed = prev.missedDays || [];
      if (missed.includes(dayNumber)) {
        // Unmark missed, restore
        return {
          ...prev,
          missedDays: missed.filter((d) => d !== dayNumber),
          completedDays: prev.completedDays.includes(dayNumber) ? prev.completedDays : [...prev.completedDays, dayNumber].sort((a,b) => a-b)
        };
      } else {
        // Mark missed
        return {
          ...prev,
          missedDays: [...missed, dayNumber],
          completedDays: (prev.completedDays || []).filter((d) => d !== dayNumber),
          recoveredDays: (prev.recoveredDays || []).filter((d) => d !== dayNumber)
        };
      }
    });
  };

  const completeDay12 = () => {
    setProgress((prev) => {
      if (prev.day12Completed) return prev;
      return {
        ...prev,
        day12Completed: true,
        completedDays: [...prev.completedDays, 12],
        proofOfWork: {
          ...prev.proofOfWork,
          12: { githubSubmitted: true, linkedinSubmitted: true }
        }
      };
    });
  };

  const setSelectedRoadmap = (roadmapId) => {
    setProgress((prev) => ({
      ...prev,
      selectedRoadmapId: roadmapId
    }));
  };

  const toggleRoadmapMilestone = (roadmapId, milestoneId) => {
    if (!roadmapId || !milestoneId) return;
    setProgress((prev) => {
      const roadmapProg = prev.roadmapProgress || {};
      const currentMilestones = roadmapProg[roadmapId]?.completedMilestones || [];
      const exists = currentMilestones.includes(milestoneId);
      const updatedMilestones = exists
        ? currentMilestones.filter((id) => id !== milestoneId)
        : [...currentMilestones, milestoneId];

      return {
        ...prev,
        roadmapProgress: {
          ...roadmapProg,
          [roadmapId]: {
            ...roadmapProg[roadmapId],
            completedMilestones: updatedMilestones
          }
        }
      };
    });
  };

  const resetToFirstDay = () => setProgress(FIRST_DAY_STATE);
  const resetToDefault = () => setProgress(DEFAULT_STATE);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateSubmission,
        markDayAsMissed,
        recoverDay,
        getDayStatus,
        toggleSimulateMissedDay,
        completeDay12,
        setSelectedRoadmap,
        toggleRoadmapMilestone,
        resetToFirstDay,
        resetToDefault,
        setProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);


