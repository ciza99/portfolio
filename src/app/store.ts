import { create } from "zustand";
import { SectionIdType } from "./types";

type Store = {
  activeSection: SectionIdType;
  setActiveSection: (section: SectionIdType) => void;
};

export const useStore = create<Store>((set) => ({
  activeSection: "about",
  setActiveSection: (section) => set({ activeSection: section }),
}));
