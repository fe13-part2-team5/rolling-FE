export const theme = {
  colors: {
    primary: "#9935FF",
    error: "#DC3A3A",
    surface: "#F6F8FF",

    white: "#FFFFFF",
    black: "#000000",

    purple: {
      100: "#F8F0FF",
      200: "#ECD9FF",
      300: "#DCB9FF",
      400: "#C894FD",
      500: "#AB57FF",
      600: "#9935FF",
      700: "#861DEE",
      800: "#6E0AD1",
      900: "#5603A7",
    },

    beige: {
      100: "#FFF0D6",
      200: "#FFE2AD",
      300: "#FFC583",
      400: "#FFAE65",
      500: "#FF8832",
    },

    blue: {
      100: "#E2F5FF",
      200: "#B1E4FF",
      300: "#7CD2FF",
      400: "#34B9FF",
      500: "#00A2FE",
    },

    green: {
      100: "#E4FBDC",
      200: "#D0F5C3",
      300: "#9BE282",
      400: "#60CF37",
      500: "#2BA600",
    },

    gray: {
      100: "#F6F6F6",
      200: "#EEEEEE",
      300: "#CCCCCC",
      400: "#999999",
      500: "#555555",
      600: "#4A4A4A",
      700: "#3A3A3A",
      800: "#2B2B2B",
      900: "#181818",
    },
  },

  fonts: {
    "28b": {
      fontFamily: "Pretendard",
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "42px",
    },
    "24b": {
      fontFamily: "Pretendard",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "36px",
    },
    "24r": {
      fontFamily: "Pretendard",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    "20b": {
      fontFamily: "Pretendard",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "30px",
    },
    "20r": {
      fontFamily: "Pretendard",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
    },
    "18b": {
      fontFamily: "Pretendard",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    "18r": {
      fontFamily: "Pretendard",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    "16b": {
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "26px",
    },
    "16r": {
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "26px",
    },
    "15b": {
      fontFamily: "Pretendard",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: "22px",
    },
    "15r": {
      fontFamily: "Pretendard",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    "14b": {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
    },
    "14r": {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    "12r": {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
  flexLayout: (direction = "row", justify = "center", align = "center") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};
