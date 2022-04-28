//copie colorblock

colorBlock1.addEventListener("click",function(){
  navigator.clipboard.writeText(inputBg.value);
  colorBlock1.innerHTML = "<p class=\"addP\">Copied!</p>";
  setTimeout(function(){
    colorBlock1.innerHTML = "";
  }, 1000);
});

colorBlock2.addEventListener("click",function(){
  navigator.clipboard.writeText(inputBgSecond.value);
  colorBlock2.innerHTML = "<p class=\"addP\">Copied!</p>";
  setTimeout(function(){
    colorBlock2.innerHTML = "";
  }, 1000);
});

colorBlock3.addEventListener("click",function(){
  navigator.clipboard.writeText(inputSecondary.value);
  colorBlock3.innerHTML = "<p class=\"addP\">Copied!</p>";
  setTimeout(function(){
    colorBlock3.innerHTML = "";
  }, 1000);
});

colorBlock4.addEventListener("click",function(){
  navigator.clipboard.writeText(inputPrimary.value);
  colorBlock4.innerHTML = "<p class=\"addP\">Copied!</p>";
  setTimeout(function(){
    colorBlock4.innerHTML = "";
  }, 1000);
});

colorBlock5.addEventListener("click",function(){
  navigator.clipboard.writeText(inputText.value);
  colorBlock5.innerHTML = "<p class=\"addP\">Copied!</p>";
  setTimeout(function(){
    colorBlock5.innerHTML = "";
  }, 1000);
});


//copie hexacode 

textText1.addEventListener("click",function(){
  navigator.clipboard.writeText(inputBg.value);
  textText1.innerHTML = "<i class=\"fa-solid fa-copy\"></i>";
  textText1.style.backgroundColor = "#4FD74B";
  textText1.style.color = "#fff";
  setTimeout(function(){
    textText1.textContent = inputText.value.toUpperCase();
    textText1.style.backgroundColor = "";
    textText1.style.color = "";
  }, 1000);
});

textText2.addEventListener("click",function(){
  navigator.clipboard.writeText(inputBgSecond.value);
  textText2.innerHTML = "<i class=\"fa-solid fa-copy\"></i>";
  textText2.style.backgroundColor = "#4FD74B";
  textText2.style.color = "#fff";
  setTimeout(function(){
    textText2.textContent = inputBg.value.toUpperCase();
    textText2.style.backgroundColor = "";
    textText2.style.color = "";
  }, 1000);
});

textText3.addEventListener("click",function(){
  navigator.clipboard.writeText(inputSecondary.value);
  textText3.innerHTML = "<i class=\"fa-solid fa-copy\"></i>";
  textText3.style.backgroundColor = "#4FD74B";
  textText3.style.color = "#fff";
  setTimeout(function(){
    textText3.textContent = inputBgSecond.value.toUpperCase();
    textText3.style.backgroundColor = "";
    textText3.style.color = "";
  }, 1000);
});

textText4.addEventListener("click",function(){
  navigator.clipboard.writeText(inputPrimary.value);
  textText4.innerHTML = "<i class=\"fa-solid fa-copy\"></i>";
  textText4.style.backgroundColor = "#4FD74B";
  textText4.style.color = "#fff";
  setTimeout(function(){
    textText4.textContent = inputPrimary.value.toUpperCase();
    textText4.style.backgroundColor = "";
    textText4.style.color = "";
  }, 1000);
});

textText5.addEventListener("click",function(){
  navigator.clipboard.writeText(inputText.value);
  textText5.innerHTML = "<i class=\"fa-solid fa-copy\"></i>";
  textText5.style.backgroundColor = "#4FD74B";
  textText5.style.color = "#fff";
  setTimeout(function(){
    textText5.textContent = inputSecondary.value.toUpperCase();
    textText5.style.backgroundColor = "";
    textText5.style.color = "";
  }, 1000);
});


//copie code

java.addEventListener("click",function(){
  navigator.clipboard.writeText(code.textContent);
  java.textContent = "Copied !";
  java.style.backgroundColor= "#4FD74B";
  setTimeout(function(){
    java.textContent = "Copy to Clipboard";
    java.style.backgroundColor= "var(--text)";
  }, 1000);
});


htmlcopy.addEventListener("click",function(){
  navigator.clipboard.writeText(codehtml.textContent);
  htmlcopy.textContent = "Copied !";
  htmlcopy.style.backgroundColor= "#4FD74B";
  setTimeout(function(){
    htmlcopy.textContent = "Copy to Clipboard";
    htmlcopy.style.backgroundColor= "var(--text)";
  }, 1000);
});


csscopy.addEventListener("click",function(){
  navigator.clipboard.writeText(codecss.textContent);
  csscopy.textContent = "Copied !";
  csscopy.style.backgroundColor= "#4FD74B";
  setTimeout(function(){
    csscopy.textContent = "Copy to Clipboard";
    csscopy.style.backgroundColor= "var(--text)";
  }, 1000);
});
