console.log('js connected');
let moon = document.getElementById('moon')
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');

function processor(a){
    a.style.transition = "1s";
    a.addEventListener('mouseover', function(){
        a.style.width  = "30vmin"
    });
    a.addEventListener('mouseout', function(){
        a.style.width  = "unset"
    });
}
processor(pic1);
processor(pic2);
processor(pic3);
