import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "./alert";
import { light as lightButton } from "./button";
import { light as lightCard } from "./card";
import { light as lightRadio } from "./radio";
import { light as lightToggle } from "./toggle";
import { light as lightNav } from "./nav";
import { light as lightModal } from "./modal";
import base from "./base";
import { lightColors } from "./color";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  button: lightButton,
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  nav: lightNav,
  modal: lightModal,
  radio: lightRadio,
};

export default lightTheme;
