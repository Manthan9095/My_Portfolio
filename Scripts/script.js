let navSection = document.getElementById("nav_toggle");
let navShow = true;

function nav_toggle() {
  if (navShow) {
    navSection.style.display = "flex";
    document.getElementById("close_icon_img").style.display = "block";
    document.getElementById("menu_icon_img").style.display = "none";
    navShow = false;
  }
  else {
    navSection.style.display = "none";
    document.getElementById("close_icon_img").style.display = "none";
    document.getElementById("menu_icon_img").style.display = "block";
    navShow = true;
  }
  return navShow;
}

var i = 0;
var nameText = "Hello, I'm Manthan Rathod";
let bioText = "I'm passionate about creating beautiful and functional websites that meet the needs of my clients and users. I have just finished my web designing course from 'Krishna Institute of Coding Technology, Ahmedabad'. And i have good knowledge and skills of HTML, CSS & JavaScript. Right now i'm polishing my jQuary & Bootstrap skills. Plus I'm learning C-Language & C++ Language from the same institute.";
var speed = 30;

typeWriting();

function typeWriting() {
  if (i < nameText.length) {
    document.getElementById("my_name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriting, speed);
  }
  else {
    i = 0;
    speed = 1
    typeWriting2();
  }
  // return i;
}

function typeWriting2() {
  console.log(i);
  if (i < bioText.length) {
    document.getElementById("intro_bio").innerHTML += bioText.charAt(i);
    i++;
    setTimeout(typeWriting2, speed);
  }
  // return 0;
}

// let slideNumber = 1;
// showSlide(slideNumber);

// function change(req) {
//   showSlide(slideNumber += req);
// }

// function showSlide(req) {
//   let a;
//   let slide = document.getElementsByClassName("project_img")
//   if (req > slide.length) {
//     slideNumber = 1
//   }
//   else if (req < 1) {
//     slideNumber = slide.length
//   }
//   for (a = 0; a < slide.length; a++) {
//     slide[a].style.display = "none";
//   }
//   slide[slideNumber -1].style.display = "block";

//   console.log("req="+req)
//   console.log("slide="+slide)
//   console.log("slideNumber="+slideNumber)
//   console.log("slide length="+slide.length)
//   console.log("a="+a)
// }

// projectIdAdd()

// function projectIdAdd(){
//   let a = document.getElementsByClassName("project_img_box").length;
//   for (let b = 0; b < a; b++) {
//     console.log(b);
    
//   }
// }

// slide()

// function slide() {
//   let i = document.getElementsByClassName("").
//     console.log(i)
//   for (let a = 0; a < array.length; a++) {

//   }
// }