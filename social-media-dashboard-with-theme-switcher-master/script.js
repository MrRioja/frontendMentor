const html = document.querySelector("html");
const themeSwitcher = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  topBg: getStyle(html, "--top-bg"),
  cardBg: getStyle(html, "--card-bg"),
  textPrimary: getStyle(html, "--text-primary"),
  textSecondary: getStyle(html, "--text-secondary"),
};

const darkMode = {
  bg: "#1e202a",
  topBg: "#1f212e",
  cardBg: "#252a41",
  textPrimary: "#ffffff",
  textSecondary: "#8b97c6",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

themeSwitcher.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
