import { createGlobalStyle } from "styled-components";

//fonts
import black from "../assets/fonts/Merriweather-Black.ttf";
import blackItalic from "../assets/fonts/Merriweather-BlackItalic.ttf";
import bold from "../assets/fonts/Merriweather-Bold.ttf";
import boldItalic from "../assets/fonts/Merriweather-BoldItalic.ttf";
import italic from "../assets/fonts/Merriweather-Italic.ttf";
import light from "../assets/fonts/Merriweather-Light.ttf";
import lightItalic from "../assets/fonts/Merriweather-LightItalic.ttf";
import regular from "../assets/fonts/Merriweather-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "black";
        src: url(${black});
    }

    @font-face {
        font-family: "blackItalic";
        src: url(${blackItalic});
    }

    @font-face {
        font-family: "bold";
        src: url(${bold});
    }

    @font-face {
        font-family: "boldItalic";
        src: url(${boldItalic});
    }

    @font-face {
        font-family: "italic";
        src: url(${italic});
    }

    @font-face {
        font-family: "light";
        src: url(${light});
    }

    @font-face {
        font-family: "lightItalic";
        src: url(${lightItalic});
    }

    @font-face {
        font-family: "regular";
        src: url(${regular});
    }
`;

export const lightMode = {
  headerBackground: "#292929",
  headerColor: "#ebebeb",
  footerBackground: "#555555",
  primaryBackground: "#f1f1f1",
  primaryColor: "#000000",
  secondaryColor: "#a8a8a8",
};

export const darkMode = {
  headerBackground: "#ffffff",
  headerColor: "000000",
  footerBackground: "",
  primaryBackground: "",
  primaryColor: "",
};
