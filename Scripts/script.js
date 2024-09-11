let navSection = document.getElementById("nav_toggle");
let navShow = true;

// mobile view icon toggle function
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
let bioText = "I'm passionate about learning new technologies, which led me to dive into coding. I began by studying HTML, CSS, JavaScript, jQuery, and Bootstrap, laying a strong foundation in web development. In addition, I expanded my skill set by learning C and C++ at the Krishna Institute of Coding Technology (KICT) in Ahmedabad. This diverse skill set has equipped me with a robust understanding of both front-end and back-end programming. Currently, I am focused on refining my skills to produce high-quality work and am committed to continuous improvement in this field. I actively seek out new challenges and projects to apply my knowledge, aiming to stay at the forefront of technological advancements and contribute meaningfully to the industry.";
var speed = 30;

typeWriting();

// code for typing effect on page load
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
  return 0;
}

// code for typing effect on page load
function typeWriting2() {
  console.log(i);
  if (i < bioText.length) {
    document.getElementById("intro_bio").innerHTML += bioText.charAt(i);
    i++;
    setTimeout(typeWriting2, speed);
  }
  return 0;
}

let imgBoxe = document.getElementsByClassName("project_img_box");

// array to give each box a unique id
for (let boxCount = 0; boxCount < imgBoxe.length; boxCount++) {
  imgBoxe[boxCount].id = `box${boxCount}`;
}

// this code allows to show only one image on the page load for each box
for (let boxCount = 0; boxCount < imgBoxe.length; boxCount++) {
  let numberOfChild = document.getElementById(`box${boxCount}`).childElementCount;
  for (let c = 0; c < numberOfChild; c++) {
    document.getElementById(`box${boxCount}`).children[c].style.display = "none";
  }
  document.getElementById(`box${boxCount}`).children[0].style.display = "block";
  document.getElementById(`box${boxCount}`).children[numberOfChild - 2].style.display = "block";
  document.getElementById(`box${boxCount}`).children[numberOfChild - 1].style.display = "block";
}

// function for image changing button
function change(req, boxCount) {
  let numberOfChild = document.getElementById(`box${boxCount}`).childElementCount;
  let imgCount = numberOfChild - 2
  let t = document.getElementById(`box${boxCount}`);
  let currentImg;
  for (let a = 0; a < imgCount; a++) {
    if (t.children[a].style.display == "block") {
      currentImg = a;
    }
  }
  if (req == 1 && currentImg < imgCount - 1) {
    t.children[currentImg].style.display = "none";
    t.children[currentImg + 1].style.display = "block";
    console.log('first')
  }
  else if (req == 1 && currentImg == imgCount - 1) {
    t.children[currentImg].style.display = "none";
    t.children[0].style.display = "block";
    console.log('second')
  }
  else if (req == -1 && currentImg < imgCount && currentImg !== 0) {
    t.children[currentImg].style.display = "none";
    t.children[currentImg - 1].style.display = "block";
    console.log('third')
  }
  else {
    t.children[0].style.display = "none";
    t.children[imgCount -1].style.display = "block";
    console.log('fourth')
  }
}