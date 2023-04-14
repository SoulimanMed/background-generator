var firstColor = document.querySelector(".Color1");
var secondColor = document.querySelector(".Color2");
var CSS = document.querySelector("h3");
var body = document.getElementById("ourBody");
var randomButton = document.querySelector("#setRandomColour");

            // Call lineargradient function once to set initial background color
lineargradient();
            // get the colours picked by the user to the lineargradient function 
function lineargradient(){
    body.style.background = "linear-gradient(to right, "+firstColor.value+", "+secondColor.value+")"; 
    CSS.textContent = body.style.background +";";
}
            // pick a random colour
function setRandomColors() {
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    
    // Pad the resulting strings with leading zeros if necessary
    randomColor1 = "#" + "0".repeat(6 - randomColor1.length) + randomColor1;
    randomColor2 = "#" + "0".repeat(6 - randomColor2.length) + randomColor2;
    firstColor.value = randomColor1;
    secondColor.value = randomColor2;
    lineargradient();
  }
firstColor.addEventListener("input", lineargradient);
secondColor.addEventListener("input", lineargradient);
randomButton.addEventListener("click", setRandomColors);
