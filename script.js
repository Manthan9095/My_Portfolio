let navSection = document.getElementById("nav_toggle");
let navShow = true;

function nav_toggle(){
  if (navShow) {
    navSection.style.display = "flex";
    navShow = false;
  }
  else{
    navSection.style.display = "none";
    navShow = true;
  }
  return navShow;
}

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