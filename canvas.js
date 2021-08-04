const canvasContainer = document.querySelector(".canvas-container");
const canvas = canvasContainer.getContext("2d");
const canvasWidth = canvasContainer.offsetTop;
const canvasHeight = canvasContainer.offsetWidth;
const canvasLeft = canvasContainer.offsetLeft;
console.log(canvasWidth, canvasHeight);
// lines
canvas.moveTo(0, 0);
canvas.lineTo(canvasLeft, canvasLeft + canvasWidth);
canvas.fillStyle = "#f00";
canvas.strokeStyle = "#f00";
canvas.stroke();
canvas.moveTo(100, 100);
canvas.lineTo(canvasLeft, canvasWidth / 2);

canvas.stroke();
canvas.moveTo(100, 0);
canvas.lineTo(canvasLeft, canvasWidth * 0.4);
canvas.stroke();
canvas.moveTo(0, 100);
canvas.lineTo(canvasLeft * 10 + 100, canvasWidth * 10);
canvas.stroke();

// circle
canvas.beginPath();
canvas.arc(100, 50, 60, 40, 0, 2 * 3.14);
canvas.stroke();
// Text
canvas.font = "20px arial";
canvas.fillText("Welcome", 10, 50);

canvas.strokeText(" TO Our Site !23!@#", 70, 80);
const dataUrl = canvasContainer.toDataURL();
console.log(dataUrl);

// Hashing
hash = 0;
for (var i = 0; i < dataUrl.length; i++) {
  chr = dataUrl.charCodeAt(i);
  hash = (hash << 5) + chr;
}
console.log(hash);
let hashCode = "";
for (var j = 0; j < String(hash).length; j++) {
  console.log();
  hashCode += String.fromCharCode(97 + Number(String(hash)[j]));
}
console.log(hashCode);
