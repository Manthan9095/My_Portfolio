let imgBoxe = document.getElementById("ad-slides").childElementCount
console.log(imgBoxe);

for (let boxCount = 0; boxCount < imgBoxe; boxCount++) {
  document.getElementById("ad-slides").children[boxCount].style.display = "none";
  
}
document.getElementById("ad-slides").children[imgBoxe - 1].style.display = "block";
document.getElementById("ad-slides").children[0].style.display = "block";