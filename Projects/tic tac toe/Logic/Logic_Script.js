a = "O";
function check() {
  // first horizontal line
  if (document.getElementById("1-1").innerHTML == "O" &&
    document.getElementById("1-2").innerHTML == "O" &&
    document.getElementById("1-3").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
    document.querySelectorAll(".game-btn").removeAttribute("onclick");
    console.log("first line");
  }
  else if (document.getElementById("1-1").innerHTML == "X" &&
    document.getElementById("1-2").innerHTML == "X" &&
    document.getElementById("1-3").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // second horizontal line
  else if (document.getElementById("2-1").innerHTML == "O" &&
    document.getElementById("2-2").innerHTML == "O" &&
    document.getElementById("2-3").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("2-1").innerHTML == "X" &&
    document.getElementById("2-2").innerHTML == "X" &&
    document.getElementById("2-3").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // third horizontal line
  else if (document.getElementById("3-1").innerHTML == "O" &&
    document.getElementById("3-2").innerHTML == "O" &&
    document.getElementById("3-3").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("3-1").innerHTML == "X" &&
    document.getElementById("3-2").innerHTML == "X" &&
    document.getElementById("3-3").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // first vertical line
  else if (document.getElementById("1-1").innerHTML == "O" &&
    document.getElementById("2-1").innerHTML == "O" &&
    document.getElementById("3-1").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("1-1").innerHTML == "X" &&
    document.getElementById("2-1").innerHTML == "X" &&
    document.getElementById("3-1").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // second vertical line
  else if (document.getElementById("1-2").innerHTML == "O" &&
    document.getElementById("2-2").innerHTML == "O" &&
    document.getElementById("3-2").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("1-2").innerHTML == "X" &&
    document.getElementById("2-2").innerHTML == "X" &&
    document.getElementById("3-2").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // third vertical line
  else if (document.getElementById("1-3").innerHTML == "O" &&
    document.getElementById("2-3").innerHTML == "O" &&
    document.getElementById("3-3").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("1-3").innerHTML == "X" &&
    document.getElementById("2-3").innerHTML == "X" &&
    document.getElementById("3-3").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // l to r diagonal
  else if (document.getElementById("1-1").innerHTML == "O" &&
    document.getElementById("2-2").innerHTML == "O" &&
    document.getElementById("3-3").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("1-1").innerHTML == "X" &&
    document.getElementById("2-2").innerHTML == "X" &&
    document.getElementById("3-3").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  // r to l diagonal
  else if (document.getElementById("1-3").innerHTML == "O" &&
    document.getElementById("2-2").innerHTML == "O" &&
    document.getElementById("3-1").innerHTML == "O") {
    document.getElementById("msg").innerHTML = "O - Wins";
  }
  else if (document.getElementById("1-3").innerHTML == "X" &&
    document.getElementById("2-2").innerHTML == "X" &&
    document.getElementById("3-1").innerHTML == "X") {
    document.getElementById("msg").innerHTML = "X - Wins";
  }
  else {
    trn_change()
  }
}
function trn_change() {
  if (a == "O") {
    a = "X";
  }
  else if (a == "X") {
    a = "O";
  }
  return a;
}
function one_one() {
  document.getElementById("1-1").innerHTML = a;
  document.getElementById("one-one").removeAttribute("onclick");
  return a;
}
function one_two() {
  document.getElementById("1-2").innerHTML = a;
  document.getElementById("one-two").removeAttribute("onclick");
  return a;
}
function one_three() {
  document.getElementById("1-3").innerHTML = a;
  document.getElementById("one-three").removeAttribute("onclick");
  return a;
}
function two_one() {
  document.getElementById("2-1").innerHTML = a;
  document.getElementById("two-one").removeAttribute("onclick");
  return a;
}
function two_two() {
  document.getElementById("2-2").innerHTML = a;
  document.getElementById("two-two").removeAttribute("onclick");
  return a;
}
function two_three() {
  document.getElementById("2-3").innerHTML = a;
  document.getElementById("two-three").removeAttribute("onclick");
  return a;
}
function three_one() {
  document.getElementById("3-1").innerHTML = a;
  document.getElementById("three-one").removeAttribute("onclick");
  return a;
}
function three_two() {
  document.getElementById("3-2").innerHTML = a;
  document.getElementById("three-two").removeAttribute("onclick");
  return a;
}
function three_three() {
  document.getElementById("3-3").innerHTML = a;
  document.getElementById("three-three").removeAttribute("onclick");
  return a;
}