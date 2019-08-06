// Your code here

const dodger = document.querySelector("div#dodger");

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    console.log("wtf");
    currentPos = parseInt(dodger.style.left);
    dodger.style.left = `${currentPos - 1}px`;
  } else if (e.key === "ArrowRight") {
    console.log("wtf");
    rightPos = parseInt(dodger.style.right);
    dodger.style.left = `${rightPos - 1}px`;
  }
});
