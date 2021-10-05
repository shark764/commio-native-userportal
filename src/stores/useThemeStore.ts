import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type {
  I_ThemeModes,
  I_ThemeDefinitionScss,
} from '@/providers/theming/colors.module.scss';
import { getTheme } from '@/providers/theming/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { THEME_TYPES } from '../constants';

interface ThemeState {
  theme: I_ThemeDefinitionScss;
  mode: I_ThemeModes;
  setTheme: (theme: I_ThemeDefinitionScss) => void;
  setMode: (mode: I_ThemeModes) => void;
  toggleTheme: () => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;
const initialMode = THEME_LIGHT;
const initialTheme = getTheme(initialMode);

const store = (set: SetState<ThemeState>, get: GetState<ThemeState>) => ({
  // initial state
  theme: initialTheme ?? {},
  mode: initialMode,

  // methods for manipulating state
  setTheme: (theme: I_ThemeDefinitionScss) => set(() => ({ theme })),
  setMode: (mode: I_ThemeModes) => set(() => ({ mode, theme: getTheme(mode) })),
  toggleTheme: () =>
    set((state) => {
      const mode = state.mode === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
      return {
        mode,
        theme: getTheme(mode),
      };
    }),
});

export const useThemeStore = create<ThemeState>(
  devtools(
    persist(store, {
      name: 'theme-storage', // unique name
      getStorage: () => AsyncStorage, // Add this here!
    }),
    { name: 'ThemeStore' }
  )
);

export default useThemeStore;
