let turn = "O";

function move(r, c) {
  document.getElementById(`${r}-${c}`).innerHTML = turn;
  check();
  if (turn === "O") {
    turn = "X"
  }
  else if (turn === "X") {
    turn = "O"
  }
  document.getElementById(`${r}-${c}`).removeAttribute("onclick");
  return turn;
}

let n = document.getElementsByClassName("game-btn");

function check() {
  if ((n[0].innerHTML === "O" && n[1].innerHTML === "O" && n[2].innerHTML === "O") || (n[0].innerHTML === "X" && n[1].innerHTML === "X" && n[2].innerHTML === "X")) {
    win();
  }

  else if ((n[3].innerHTML === "O" && n[4].innerHTML === "O" && n[5].innerHTML === "O") || (n[3].innerHTML === "X" && n[4].innerHTML === "X" && n[5].innerHTML === "X")) {
    win();
  }

  else if ((n[6].innerHTML === "O" && n[7].innerHTML === "O" && n[8].innerHTML === "O") || (n[6].innerHTML === "X" && n[7].innerHTML === "X" && n[8].innerHTML === "X")) {
    win();
  }

  else if ((n[0].innerHTML === "O" && n[3].innerHTML === "O" && n[6].innerHTML === "O") || (n[0].innerHTML === "X" && n[3].innerHTML === "X" && n[6].innerHTML === "X")) {
    win();
  }

  else if ((n[1].innerHTML === "O" && n[4].innerHTML === "O" && n[7].innerHTML === "O") || (n[1].innerHTML === "X" && n[4].innerHTML === "X" && n[7].innerHTML === "X")) {
    win();
  }

  else if ((n[2].innerHTML === "O" && n[5].innerHTML === "O" && n[8].innerHTML === "O") || (n[2].innerHTML === "X" && n[5].innerHTML === "X" && n[8].innerHTML === "X")) {
    win();
  }

  else if ((n[0].innerHTML === "O" && n[4].innerHTML === "O" && n[8].innerHTML === "O") || (n[0].innerHTML === "X" && n[4].innerHTML === "X" && n[8].innerHTML === "X")) {
    win();
  }

  else if ((n[2].innerHTML === "O" && n[4].innerHTML === "O" && n[6].innerHTML === "O") || (n[2].innerHTML === "X" && n[4].innerHTML === "X" && n[6].innerHTML === "X")) {
    win();
  }
}

function win(){
  document.getElementById("msg").innerHTML = `${turn} - wins`;
  for (let r = 1; r <= 3; r++) {
    for (let c = 1; c <= 3; c++) {
      document.getElementById(`${r}-${c}`).removeAttribute("onclick");
    }
  }
}