export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function getStoredTheme() {
  return (localStorage.getItem("theme") ?? Theme.LIGHT) as Theme;
}

export function setStoredTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
}
