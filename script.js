let circle = document.getElementById("circle");
let circleCount = 0;
let greetings = document.getElementById("greetings");
let grayArea = document.getElementById("grayArea");
let pea = document.getElementById("pea");
let fullName = document.getElementById('FullName')
let buttonContainer = document.getElementById("buttonContainer");
let submit = document.getElementById('submit');




circle.addEventListener("click", function () {
  // circle.style.width = "20em";
  // circle.style.height = "20em";
  // circleCount = 1;block
  circleCount += 1;
  console.log(circleCount);

  if (circleCount === 3) {
    circle.style.width = "83em";
    circle.style.height = "83em";
    greetings.style.display = "block";
    grayArea.style.display = "block";
    start();
  } else if (circleCount === 2) {
    circle.style.width = "30em";
    circle.style.height = "30em";
  } else if (circleCount === 1) {
    circle.style.width = "20em";
    circle.style.height = "20em";
  }
});

function start() {
  circle.addEventListener("animationend", function () {});
  grayArea.addEventListener("animationend", function () {
    grayArea.style.backgroundColor = "white";
    grayArea.style.width = "11em";
    grayArea.style.display = "flex";
    grayArea.style.justifyContent = "center";
    grayArea.style.alignItems = "center";
    pea.style.display = "block";
  });
}

grayArea.addEventListener("click", function () {
  grayArea.style.boxShadow =
    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    greetings.style.top = "1em"
    greetings.style.position = "absolute";
    greetings.innerText = "Who U?"
    greetings.style.transition = "0.2s";
    grayArea.style.position = "absolute";
    grayArea.style.width = "24em";
    grayArea.style.height = "20em"
    grayArea.style.top = "15em"
    grayArea.style.animation = "unset";
    grayArea.style.transition = "0.2s";
    pea.style.display = "none";
    fullName.style.display = "block";
    submit.style.display = "block";

    grayArea.style.display = "flex";
    grayArea.style.justifyContent = "center";
    grayArea.style.alignItems = "center";
    grayArea.style.flexDirection = "column";

});
function validateInput(){
    let nameInput = fullName.value;

    if(nameInput === "cholocutie"){
        // alert(`greetings ${nameInput}`);
        greetings.style.color = "red";
    }
}