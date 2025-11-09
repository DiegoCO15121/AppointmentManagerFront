import { createModalSlice, type ModalSlice } from "./modalSlice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAppStore = create<ModalSlice>()(
  devtools((...a) => ({
    ...createModalSlice(...a),
  }))
);
