import { darkColors, lightColors } from "./color";
import { ToggleTheme } from "./toggletypes";

export const light: ToggleTheme = {
  handleBackground: lightColors.card,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.card,
};