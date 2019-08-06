// Your code here
function moveDodgerLeft() {
  let position = parseInt(dodger.style.left.replace("px", ""));
  let newPosition = `${position - 10}px`;
  dodger.style.left = newPosition;
}
function moveDodgerRight() {
  let position = parseInt(dodger.style.left.replace("px", ""));
  let newPosition = `${position + 10}px`;
  dodger.style.left = newPosition;
}

let dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "hotpink";
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
