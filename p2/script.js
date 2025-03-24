console.log("p2 js connected");
let hand2 = document.getElementById("hand2");
let cube = document.getElementById("cube");
let mabuhay = document.getElementById("mabuhay");
let cholodev = document.getElementById("cholodev");
let circle = document.getElementById("circle");
let projects = document.getElementById("projects");
let profile = document.getElementById("profile");
let glass = document.getElementById("glass");
let grabhand = document.getElementById('grabhand')

cube.addEventListener("mouseenter", function () {
  hand2.style.left = "-9em";
});
cube.addEventListener("mouseout", function () {
  hand2.style.left = "-59em";
});
cube.addEventListener("click", function () {
  mabuhay.style.opacity = "0";
  cholodev.style.opacity = "1";
  cube.style.opacity = "0";
  hand2.style.left = "19em";
  //   projects.style.opacity = "1";
  //   profile.style.opacity = "1";
  if (hand2.style.left === "19em") {
    cube.style.opacity = "0";
    setTimeout(() => {
      cube.style.display = "none";
    }, 1000);
    setTimeout(() => {
      hand2.style.display = "none";
    }, 3000);
  }
  //ayaw gumana ng na sa below
  //   if (glass.style.right === "10em") {
  //     profile.style.opacity = "1";
  //   }
  //   if (glass.style.right === "65") {
  //     projects.style.opacity = "1";
  //   }
setTimeout(()=>{
  projects.style.left = "0";
  profile.style.right = "0";
  grabhand.style.left = '-8em';
  projects.style.opacity = '1'
},100)
  
  setTimeout(()=>{
    grabhand.style.left = 'none';
  }, 200)
  grabhand.style.display = 'block';
  setTimeout(()=>{
    grabhand.style.left = '-57em';
   
  }, 1000)
  setTimeout(()=>{
    grabhand.style.display = 'none';
  }, 2000)
});
