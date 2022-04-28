
//color picker 

const randomArray = [
  {bg: '#041C32', bgSecond: '#04293A', secondary: '#064663', primary: '#ECB365', text: '#ffffff' },
  {bg: '#082032', bgSecond: '#2c394b', secondary: '#334756', primary: '#ff4c29', text: '#ffffff' },
  {bg: '#1A1A40', bgSecond: '#270082', secondary: '#7A0BC0', primary: '#FA58B6', text: '#ffffff' },
  {bg: '#040303', bgSecond: '#461111', secondary: '#A13333', primary: '#B3541E', text: '#ffffff' },
  {bg: '#000000', bgSecond: '#3E065F', secondary: '#700B97', primary: '#8E05C2', text: '#ffffff' },
];

let randomColor = document.getElementById("random");
let defaultColor = document.getElementById("default");


let inputBg = document.getElementsByTagName("input")[0];
let inputBgSecond = document.getElementsByTagName("input")[1];
let inputSecondary = document.getElementsByTagName("input")[2];
let inputPrimary = document.getElementsByTagName("input")[3];
let inputText = document.getElementsByTagName("input")[4];


let textText1 = document.getElementById("text1");
let textText2 = document.getElementById("text2");
let textText3 = document.getElementById("text3");
let textText4 = document.getElementById("text4");
let textText5 = document.getElementById("text5");

let colorBlock1 = document.getElementById("color1");
let colorBlock2 = document.getElementById("color2");
let colorBlock3 = document.getElementById("color3");
let colorBlock4 = document.getElementById("color4");
let colorBlock5 = document.getElementById("color5");

let code = document.getElementsByClassName("JavaScript")[0];
let codehtml = document.getElementById("html");
let codecss = document.getElementById("css");

let java = document.getElementById("java");
let html = document.getElementById("htmlcopy");
let css = document.getElementById("csscopy");

let arrow = document.getElementById("arrow");
let contentcode = document.getElementById("contentcode");
let btnDisplay = document.getElementById("buttondisplay");

btnDisplay.addEventListener("click", function(){
  contentcode.classList.toggle("contentcode")
  if(contentcode.classList.contains("contentcode")){
    arrow.style.transform = null;
  } else {
    arrow.style.transform = "rotate(90deg)";
  }
});

let i;

function majI(){
  i = `
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
  root.style.setProperty('--bg', '${inputBg.value}');
  root.style.setProperty('--bg-second', '${inputBgSecond.value}');
  root.style.setProperty('--text', '${inputText.value}');
  root.style.setProperty('--primary', '${inputPrimary.value}');
  root.style.setProperty('--secondary', '${inputSecondary.value}');
};

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
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
    console.log(document.getElementById("div"));
    document.getElementById("div").style.transform = "scale(0.5)";
    document.getElementById("div").style.bottom = "-20px";
    document.getElementById("div").style.right = "-20px";
  } else{
    document.getElementById("div").style.transform = "scale(0.5)";
  };
};
`;
};

function majHilight(){
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
};

majI();

code.textContent = i;

//on window load
window.addEventListener("load", start);

function start() {

  /*LANDING*/

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  
  inputBg.value = "#082032";
  inputBgSecond.value = "#2C394B";
  inputPrimary.value = "#FF4C29";
  inputSecondary.value = "#334756";
  inputText.value = "#ffffff";
  
  majI();

  textText1.textContent = inputBg.value.toUpperCase();
  textText2.textContent = inputBgSecond.value.toUpperCase();
  textText3.textContent = inputSecondary.value.toUpperCase();
  textText4.textContent = inputPrimary.value.toUpperCase();
  textText5.textContent = inputText.value.toUpperCase();

  colorBlock1.style.backgroundColor = inputBg.value;
  colorBlock2.style.backgroundColor = inputBgSecond.value;
  colorBlock3.style.backgroundColor = inputSecondary.value;
  colorBlock4.style.backgroundColor = inputPrimary.value;
  colorBlock5.style.backgroundColor = inputText.value;

};

//default color button

defaultColor.addEventListener("click", function(){
  start();
  majI();
  code.textContent = i;
  majHilight();
});

//random coolor button

Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

randomColor.addEventListener("click", function(){
  let palette = randomArray.sample();

  while (palette.bg === inputBg.value){
    palette = randomArray.sample();
  };

    inputBg.value = palette.bg;
    inputBgSecond.value = palette.bgSecond;
    inputPrimary.value = palette.primary;
    inputSecondary.value = palette.secondary;
    inputText.value = palette.text;
    
    majI();
    code.textContent = i;
    majHilight();
        
    textText1.textContent = inputBg.value.toUpperCase();
    textText2.textContent = inputBgSecond.value.toUpperCase();
    textText3.textContent = inputSecondary.value.toUpperCase();
    textText4.textContent = inputPrimary.value.toUpperCase();
    textText5.textContent = inputText.value.toUpperCase();

    colorBlock1.style.backgroundColor = inputBg.value;
    colorBlock2.style.backgroundColor = inputBgSecond.value;
    colorBlock3.style.backgroundColor = inputSecondary.value;
    colorBlock4.style.backgroundColor = inputPrimary.value;
    colorBlock5.style.backgroundColor = inputText.value;

    if (document.body.classList.contains("dark-theme")){
      backgroundMaj();
    };
    

});



//input color
inputBg.addEventListener("change",function(){
  textText1.textContent = inputBg.value;
  majI();
  code.textContent = i;
  majHilight();
  colorBlock1.style.backgroundColor = inputBg.value;
  if (document.body.classList.contains("dark-theme")){
    backgroundMaj();
  };
});
inputBgSecond.addEventListener("change",function(){
  textText2.textContent = inputBgSecond.value;
  majI();
  code.textContent = i;
  majHilight();
  colorBlock2.style.backgroundColor = inputBgSecond.value;
  if (document.body.classList.contains("dark-theme")){
    backgroundMaj();
  };
});
inputSecondary.addEventListener("change",function(){
  textText3.textContent = inputSecondary.value;
  majI();
  code.textContent = i;
  majHilight();
  colorBlock3.style.backgroundColor = inputSecondary.value;
  if (document.body.classList.contains("dark-theme")){
    backgroundMaj();
  };
});
inputPrimary.addEventListener("change",function(){
  textText4.textContent = inputPrimary.value;
  majI();
  code.textContent = i;
  majHilight();
  colorBlock4.style.backgroundColor = inputPrimary.value;
  if (document.body.classList.contains("dark-theme")){
    backgroundMaj();
  };
});
inputText.addEventListener("change",function(){
  textText5.textContent = inputText.value;
  majI();
  code.textContent = i;
  majHilight();
  colorBlock5.style.backgroundColor = inputText.value;
  if (document.body.classList.contains("dark-theme")){
    backgroundMaj();
  };
});

