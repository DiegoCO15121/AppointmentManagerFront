import type { StateCreator } from "zustand";
import type { BossType } from "../types";

export type BossSliceType = {
  currentBoss: BossType | null;
  setCurrentBoss: (currentBoss: BossType) => void;
  deleteCurrentBoss: () => void;
};

export const createBossSlice: StateCreator<BossSliceType> = (set) => ({
  currentBoss: null,

  setCurrentBoss: (currentBoss) => {
    set(() => ({
      currentBoss,
    }));
  },

  deleteCurrentBoss: () => {
    set(() => ({
      currentBoss: null,
    }));
  },
});
