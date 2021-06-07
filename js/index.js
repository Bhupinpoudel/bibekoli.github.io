const $ = (a) => {
  if (document.querySelectorAll(a).length == 1) return document.querySelector(a);
  else return document.querySelectorAll(a)
}

let navMenu = $(".header .menu ul");
let menuBtn = $(".hamburger");
let content = $(".main, .sidebar, .footer");
let menuWrap = $(".menu");
let menuOpen = false;
let mainLinks = $(".main a, .sidebar a");
let openMenu = () => {
  menuBtn.classList.add("open");
  navMenu.style.width = "200px";
  $(".overlay").style.display = "block";
  $("body").style.overflowY = "hidden";
  $(".overlay").style.zIndex = "1";
  menuOpen = true;
  $(".menu").style.height = "100vh";
  $(".menu").style.width = "100vw";
  mainLinks.forEach(x => {
    x.onclick = (e) => {
      e.preventDefault();
    }
  });
}
let closeMenu = () => {
  menuBtn.classList.remove("open");
  navMenu.style.width = "0px";
  $(".overlay").style.display = "none";
  $("body").style.overflowY = "visible";
  $(".overlay").style.zIndex = "0";
  menuOpen = false;
  $(".menu").style.height = 0;
  $(".menu").style.width = 0;
  mainLinks.forEach(x => {
    x.onclick = () => {
      return true;
    }
  });
}
menuBtn.onclick = () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}
if (!menuOpen) {
  window.onmouseup = (event) => {
    if (event.target.className === "menu") {
      closeMenu();
    }
  }
}