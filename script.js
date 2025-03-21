let circle = document.getElementById('circle');
let circleCount = 0;
let greetings = document.getElementById('greetings')
let grayArea = document.getElementById('grayArea')
circle.addEventListener('click', function (){
    // circle.style.width = "20em";
    // circle.style.height = "20em";
    // circleCount = 1;block
    circleCount += 1;
    console.log(circleCount);

    if(circleCount === 3){
        circle.style.width = "83em";
        circle.style.height = "83em";
        greetings.style.display = "block";
        grayArea.style.display = "block";
        start();
    }else if(circleCount === 2){
        circle.style.width = "30em";
        circle.style.height = "30em";
    }
    else if(circleCount === 1){
        circle.style.width = "20em";
        circle.style.height = "20em";
    }
});




function start(){
    circle.addEventListener('animationend', function (){

    })
    grayArea.addEventListener('animationend', function (){
        grayArea.style.backgroundColor = "white";
        grayArea.style.width = "11em";
    })
}
