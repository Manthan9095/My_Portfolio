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

function typeWriting(){
  if (i < nameText.length) {
    document.getElementById("my_name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriting, speed);
  }
  else{
    i = 0;
    speed = 1
    typeWriting2();
  }
  // return i;
}

function typeWriting2(){
  console.log(i);
  if (i < bioText.length) {
    document.getElementById("intro_bio").innerHTML += bioText.charAt(i);
    i++;
    setTimeout(typeWriting2, speed);
  }
  // return 0;
}

// const textEl = document.getElementById('my_name');
// const text = "Hello, I'm Manthan Rathod";
// let idx = 1;
// // let speed = 300 / 5;
// let speed = 45

// writeText()

// function writeText() {
//   textEl.innerText = text.slice(0, idx);
//   idx++;
//   // while (idx<text.length) {
//   //   console.log("fytfcvhuyfv");
//   // }
  
//   setTimeout(writeText, speed);
// }
// test_btn()

// function test_btn() {
//   console.log("Did i came last..?")
// }



// const textEl = document.getElementById('my_name');
// const text = "Hello, I'm Manthan Rathod";
// let idx = 1;
// // let speed = 300 / 5;
// let speed = 60

// writeText()

// function writeText() {
//   textEl.innerText = text.slice(0, idx);
//   idx++;

//   // if (idx > text.length) {
//   //   idx =1;
//   // }

//   setTimeout(writeText, speed);
// }
// test_btn()

// function test_btn(){
//   console.log("Did i came last..?")
// }


// -------------------------------------------------------
// old code for test-------------->


// writeText = () => {
//   while (idx < text.length) {
//     text.innerText = textEl.slice(0, idx);
//     idx++;
//   }

//   return 0;
// }

// function home(){
//   hidecv();
//   return 0;
// }

// function showhome(){
//   document.getElementById("home_page").style = "display: block;";
// }

// function hidecv(){
//   document.getElementById("cv_page").style = "display: none;";
// }

// function test_btn() {
//   document.getElementById("nav_area").style = "display: none";
// }
// function test_btn1() {
//   document.getElementById("nav_area").style = "display: block;"
//   document.getElementById("nav_area").style = "justify-content: center;"
//   ------------ in show and hide method changing display property to block the justify-content is sacrifised, that is why we add it again------------
// }