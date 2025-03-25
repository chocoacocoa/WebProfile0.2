console.log("p2 js connected");
let hand2 = document.getElementById("hand2");
let cube = document.getElementById("cube");
let mabuhay = document.getElementById("mabuhay");
let cholodev = document.getElementById("cholodev");
let circle = document.getElementById("circle");
let projects = document.getElementById("projects");
let profile = document.getElementById("profile");
let glass = document.getElementById("glass");
let grabhand = document.getElementById("grabhand");
let grabhand2 = document.getElementById("grabhand2");
let prj = document.getElementById('prj')
let prf = document.getElementById('prf')

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
  setTimeout(() => {
    projects.style.left = "0";
    profile.style.right = "0";
    grabhand.style.left = "-8em";
    grabhand2.style.right = "-8em";
    projects.style.opacity = "1";
    profile.style.opacity = "1";
  }, 100);

  setTimeout(() => {

  }, 200);
  grabhand.style.display = "block";
  grabhand2.style.display = "block";
  setTimeout(() => {
    grabhand.style.left = "-57em";
    grabhand2.style.right = "-57em";
  }, 1000);
  setTimeout(() => {
    grabhand.style.display = "none";
    grabhand2.style.display = "none";
  }, 2000);
  setTimeout(() => {
    profile.style.animation = "profileround 5s infinite both";
    projects.style.animation = "projectsround 5s infinite both";

  }, 1000);
});

anes(profile, projects, "20%", 'https://github.com/chocoacocoa');
anes(projects, profile, "-20%", 'https://github.com/chocoacocoa?tab=repositories');
function anes(a, b, c, d) {
  a.addEventListener("click", function () {
    a.style.animation = "none";
    b.style.animation = "none";
    setTimeout(() => {
      a.style.width = "100vw";
      a.style.height = "100vh";
      a.style.borderRadius = "0";
      a.style.transform = `translateX(${c})`;
      prf.style.display = "none";
      prj.style.display = "none";
      a.style.cursor = 'unset'
      b.style.cursor = 'unset'
      message.style.display = 'none';
    }, 200);
    setTimeout(()=>{
      a.style.backgroundColor = '#2B3137'
      b.style.backgroundColor = '#2B3137'
      window.location.href = `${d}`;
    }, 500)
  });
}

function hover(a, b){
  let message = document.getElementById('message');
  a.addEventListener('mouseenter', function (){
    message.style.opacity = '1';
  })
  a.addEventListener('mouseout', function (){
    message.style.opacity = '0';
  })
  b.addEventListener('mouseenter', function (){
    message.style.opacity = '1';
  })
  b.addEventListener('mouseout', function (){
    message.style.opacity = '0';
  })

}
hover(profile, prf)
hover(projects, prj)

