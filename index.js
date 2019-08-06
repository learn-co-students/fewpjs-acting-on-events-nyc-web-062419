// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
dodger.style.bottom;
dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 55}px`;
//   }
// });

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 45}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 45}px`;
  }
}
