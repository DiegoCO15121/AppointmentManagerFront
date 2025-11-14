import { createModalSlice, type ModalSlice } from "./modalSlice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAreaSlice, type AreasSliceType } from "./areasSlice";
import { createBossSlice, type BossSliceType } from "./bossSlice";

export const useAppStore = create<
  ModalSlice & AreasSliceType & BossSliceType
>()(
  devtools((...a) => ({
    ...createModalSlice(...a),
    ...createAreaSlice(...a),
    ...createBossSlice(...a),
  }))
);
