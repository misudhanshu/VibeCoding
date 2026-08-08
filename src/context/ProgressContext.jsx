import React, { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export const DEFAULT_STATE = {
  currentDay: 12,
  currentStreak: 12,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  githubSubmitted: false,
  linkedinSubmitted: false,
  day12Completed: false,
};

export const FIRST_DAY_STATE = {
  currentDay: 1,
  currentStreak: 0,
  completedDays: [],
  githubSubmitted: false,
  linkedinSubmitted: false,
  day12Completed: false,
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("abtalks-progress");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_STATE;
      }
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("abtalks-progress", JSON.stringify(progress));
  }, [progress]);

  const updateSubmission = (type, value) => {
    setProgress((prev) => ({
      ...prev,
      [type === "github" ? "githubSubmitted" : "linkedinSubmitted"]: value,
    }));
  };

  const completeDay12 = () => {
    setProgress((prev) => {
      if (prev.day12Completed) return prev;
      return {
        ...prev,
        day12Completed: true,
        completedDays: [...prev.completedDays, 12],
        githubSubmitted: true,
        linkedinSubmitted: true,
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
        completeDay12,
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
