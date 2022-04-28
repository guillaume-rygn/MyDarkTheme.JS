const root = document.querySelector(":root");
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  root.style.setProperty('--bg', inputBg.value);
  root.style.setProperty('--bg-second', inputBgSecond.value);
  root.style.setProperty('--text', inputText.value);
  root.style.setProperty('--primary', inputPrimary.value);
  root.style.setProperty('--secondary', inputSecondary.value);
};

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  root.style.removeProperty('--bg');
  root.style.removeProperty('--bg-second');
  root.style.removeProperty('--text');
  root.style.removeProperty('--primary');
  root.style.removeProperty('--secondary');
};

function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  };
  enableLightMode();
};

document.onload = size();
document.onload = setThemePreference();

function size(){
  if(Number(document.documentElement.clientWidth) < 450){
    document.getElementById("div").style.transform = "scale(0.5)";
    document.getElementById("div").style.bottom = "-20px";
    document.getElementById("div").style.right = "-20px";
  } else{
    document.getElementById("div").style.transform = "scale(0.5)";
  };
};

function backgroundMaj(){
  root.style.setProperty('--bg', inputBg.value);
  root.style.setProperty('--bg-second', inputBgSecond.value);
  root.style.setProperty('--text', inputText.value);
  root.style.setProperty('--primary', inputPrimary.value);
  root.style.setProperty('--secondary', inputSecondary.value);
}


