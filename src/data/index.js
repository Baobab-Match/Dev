import { COUNTRIES_BASE } from "./countries.base.js";
import { COUNTRIES_SCORES } from "./countries.scores.js";

export const COUNTRIES = Object.fromEntries(
  Object.entries(COUNTRIES_BASE).map(([id, base]) => [
    id,
    { ...base, ...(COUNTRIES_SCORES[id] ?? {}) },
  ])
);