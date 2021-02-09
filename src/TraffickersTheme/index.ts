import { AlertTheme } from "./alertTypes";
import { ButtonTheme } from "./buttonTypes";
import { CardTheme } from "./cardTypes";
import { RadioTheme } from "./radiotypes";
import { ToggleTheme } from "./toggletypes";
import { NavTheme } from "./navtypes";
import { ModalTheme } from "./modaltypes";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface TraffickersTheme
 {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  button: ButtonTheme;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./color";
export { darkColors } from "./color";