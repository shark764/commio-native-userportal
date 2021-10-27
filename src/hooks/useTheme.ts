import { ThemeState, useThemeStore } from '@/stores/useThemeStore';

const themeSelector = (state: ThemeState) => state.theme;
const modeSelector = (state: ThemeState) => state.mode;
const setModeSelector = (state: ThemeState) => state.setMode;
const toggleThemeSelector = (state: ThemeState) => state.toggleTheme;

export function useTheme () {
  const mode = useThemeStore(modeSelector);
  const theme = useThemeStore(themeSelector);
  const setMode = useThemeStore(setModeSelector);
  const toggleTheme = useThemeStore(toggleThemeSelector);

  return { mode, theme, setMode, toggleTheme };
}
