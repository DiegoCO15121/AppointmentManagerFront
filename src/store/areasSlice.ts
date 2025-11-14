import type { AreaType } from "@/types/area/area.types";
import type { StateCreator } from "zustand";

export type AreasSliceType = {
  currentArea: AreaType | null;
  setCurrentArea: (currentArea: AreaType) => void;
  deleteCurrentArea: () => void;
};

export const createAreaSlice: StateCreator<AreasSliceType> = (set) => ({
  currentArea: null,
  setCurrentArea: (currentArea) => {
    set(() => ({
      currentArea,
    }));
  },
  
  deleteCurrentArea: () => {
    set(() => ({
      currentArea: null,
    }));
  },
});
