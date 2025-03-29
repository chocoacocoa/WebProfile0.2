let circle = document.getElementById("circle");
let circleCount = 0;
let greetings = document.getElementById("greetings");
let grayArea = document.getElementById("grayArea");
let pea = document.getElementById("pea");
let fullName = document.getElementById("FullName");
let submit = document.getElementById("submit");

circle.addEventListener("click", function () {
  // circle.style.width = "20em";
  // circle.style.height = "20em";
  // circleCount = 1;block
  const maxClicks = 3;
  circleCount+=1;
  console.log(circleCount);
  if (circleCount < 4) {
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
  }else{
    console.log('you reached the max circle clicks')
    circleCount = 3;
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
  greetings.style.top = "1em";

  greetings.innerText = "Who U?";
  greetings.style.transition = "0.2s";

  grayArea.style.width = "24em";
  grayArea.style.height = "20em";

  grayArea.style.animation = "unset";
  grayArea.style.transition = "0.2s";
  pea.style.display = "none";
  fullName.style.display = "block";
  submit.style.display = "block";

  grayArea.style.display = "flex";
  grayArea.style.justifyContent = "center";
  grayArea.style.alignItems = "center";
  grayArea.style.flexDirection = "column";
  grayArea.style.background = 'black';
});

function validateInput() {
  let nameInput = fullName.value.trim();
  grayArea = document.getElementById("grayArea");
  fullName = document.getElementById("FullName");
  if (nameInput === "Cholo") {
    alert(`greetings ${nameInput}`);
    grayArea.style.animation = "none";

    setTimeout(() => {
      grayArea.style.width = "100vw";
      circleCount = 3;
      grayArea.style.height = "200vh";
      grayArea.style.borderRadius = '0';
      grayArea.style.transition = "1s"
      grayArea.style.rotate = '360deg'
      grayArea.style.backgroundColor = "white";
      grayArea.addEventListener('transitionend', function (){
        window.location.href = "/p2/index.html"
      });
    }, 100);
    circleCount = 3;

    grayArea.style.background = "white";
    grayArea.style.pointerEvents = 'none';
    let buttonContainer = document.getElementById('buttonContainer')
    buttonContainer.style.display = "none"

  }else{
    setTimeout(() =>{
     greetings.innerText = "Your not CholoDev!"
    }, 100);
  }
}
