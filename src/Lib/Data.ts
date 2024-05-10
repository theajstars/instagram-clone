export const ColorBlue = "#3797EF";
export const getColorOpacity = (opacity: number, color: "white" | "black") => {
  return color === "white"
    ? `rgba(255 ,255, 255, ${opacity})`
    : `rgba(0 ,0, 0, ${opacity})`;
};
