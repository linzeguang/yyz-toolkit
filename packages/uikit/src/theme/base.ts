import { Breakpoints, MediaQueries } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 1080,
  xl: 1440,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.xs}px) and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.sm}px) and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.md}px) and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.lg}px) and (max-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
};

export default {
  siteWidth: 1290,
  breakpoints,
  mediaQueries,
};
