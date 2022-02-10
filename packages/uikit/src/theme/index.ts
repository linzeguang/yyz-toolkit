import { Breakpoints, MediaQueries } from "./types";

export interface PancakeTheme {
  isDark: boolean;
  siteWidth: number;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
}

export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
