import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "./alert";
import { dark as darkButton } from "./button";
import { dark as darkCard } from "./card";
import { dark as darkRadio } from "./radio";
import { dark as darkToggle } from "./toggle";
import { dark as darkNav } from "./nav";
import { dark as darkModal } from "./modal";
import base from "./base";
import { darkColors } from "./color";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  button: darkButton,
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: darkRadio,
};

export default darkTheme;