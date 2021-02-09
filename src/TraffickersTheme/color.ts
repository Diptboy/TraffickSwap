import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#B9C97B",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#B9C97B",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#B9C97B",
  textDisabled: "#BDC2C4",
  textSubtle: "#B9C97B",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#B9C97B",
  textDisabled: "#666171",
  textSubtle: "#B9C97B",
  borderColor: "#524B63",
  card: "#27262c",
};