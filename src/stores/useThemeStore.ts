import create from 'zustand';
import { persist } from 'zustand/middleware';

import type {
  I_ThemeModes,
  I_ThemeDefinitionScss,
} from '@/providers/theming/colors.module.scss';
import { getTheme } from '@/providers/theming/utils';

import { THEME_TYPES } from '../constants';

interface ThemeState {
  theme: I_ThemeDefinitionScss;
  mode: I_ThemeModes;
  setTheme: (theme: I_ThemeDefinitionScss) => void;
  toggleTheme: (mode?: I_ThemeModes) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;
const initialMode = THEME_LIGHT;
const initialTheme = getTheme(initialMode);

export const useThemeStore = create<ThemeState>((set) => ({
  // initial state
  theme: initialTheme ?? {},
  mode: initialMode,

  // methods for manipulating state
  setTheme: (theme) => set(() => ({ theme })),
  toggleTheme: (mode) =>
    set((state) => ({
      mode: mode ?? (state.mode === THEME_LIGHT ? THEME_DARK : THEME_LIGHT),
      theme: getTheme(mode),
    })),
}));

export default useThemeStore;
