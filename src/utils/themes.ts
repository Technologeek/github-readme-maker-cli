export const SUPPORTED_THEMES = [
  "default", "default_repocard", "transparent", "shadow_red", "shadow_green",
  "shadow_blue", "dark", "radical", "merko", "gruvbox", "gruvbox_light",
  "tokyonight", "onedark", "cobalt", "synthwave", "highcontrast", "dracula",
  "prussian", "monokai", "vue", "vue-dark", "shades-of-purple", "nightowl",
  "buefy", "blue-green", "algolia", "great-gatsby", "darcula", "bear",
  "solarized-dark", "solarized-light", "chartreuse-dark", "nord", "gotham",
  "material-palenight", "graywhite", "vision-friendly-dark", "ayu-mirage",
  "midnight-purple", "calm", "flag-india", "omni", "react", "jolly",
  "maroongold", "yeblu", "blueberry", "slateorange", "kacho_ga", "outrun",
  "ocean_dark", "city_lights", "github_dark", "github_dark_dimmed",
  "discord_old_blurple", "aura_dark", "panda", "noctis_minimus", "cobalt2",
  "swift", "aura", "apprentice", "moltack", "codeSTACKr", "rose_pine",
  "catppuccin_latte", "catppuccin_mocha", "date_night", "one_dark_pro",
  "rose", "holi", "neon", "blue_navy", "calm_pink", "ambient_gradient"
] as const;

export type Theme = typeof SUPPORTED_THEMES[number];

export function getRandomTheme(): Theme {
  return SUPPORTED_THEMES[Math.floor(Math.random() * SUPPORTED_THEMES.length)];
}

export function isValidTheme(theme: string): theme is Theme {
  return SUPPORTED_THEMES.includes(theme as Theme);
}
