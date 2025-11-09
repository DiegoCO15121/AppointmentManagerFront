import type { ModalType } from "../types";
import type { StateCreator } from "zustand";

export type ModalSlice = {
  modal: ModalType;
  isOpen: boolean;
  openModal: (type: ModalType) => void;
  setIsOpen: () => void;
  clearModal: () => void;
};

export const createModalSlice: StateCreator<ModalSlice> = (set, get) => ({
  modal: null,
  isOpen: false,
  openModal: (type) => {
    set(() => ({
      modal: type,
    }));
  },
  setIsOpen: () => {

    set(() => ({
      isOpen: !get().isOpen,
    }));
  },
  clearModal: () => {
    set(() => ({
      modal: null,
    }));
  },
});
