import { create } from 'zustand';

type State = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useThemeStore = create<State>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
