import colors, {
  I_ThemeModes,
  I_ThemeDefinitionScss,
} from './colors.module.scss';

export const themeModes: I_ThemeModes[] = ['light', 'dark'];

export const getTheme = (
  mode: I_ThemeModes = 'light'
): I_ThemeDefinitionScss => {
  const prefix = `sds_theme_${mode}_`;
  return Object.keys(colors).reduce<I_ThemeDefinitionScss>(
    (themeValues: I_ThemeDefinitionScss, tKey: string) => {
      if (tKey.startsWith(prefix)) {
        const trimmedKey: string = tKey.replace(prefix, '');
        return { ...themeValues, [trimmedKey]: colors[tKey] };
      }
      return themeValues;
    },
    {}
  );
};
