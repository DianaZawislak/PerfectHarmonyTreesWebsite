import { buildLegacyTheme, defineConfig } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#303030",
  "--my-red": "#780000",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
  "--my-lightgray": "#888888",
  "--my-earthygreen": "#DBE4C6",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-earthygreen"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--my-red"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-lightgray"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-red"],
  "--default-button-danger-color": props["--my-lightgray"],

  /* State */
  "--state-info-color": props["--my-red"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-earthygreen"],
});
