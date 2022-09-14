//initialization of slider 1
let sliderNumber = 1;
let maxSlides = 4;
let output= document.getElementById("output");
function previousSlide() {
    if(sliderNumber>1){
    sliderNumber -= 1;
    //.log(sliderNumber) 
    output.src= "images/"+ sliderNumber +".png";
    output.classList.add("animate");
     setTimeout(() => {
        output.classList.remove("animate");
     },2000);
     document.getElementById("right-arrow").removeAttribute("disabled");
    }
    if(sliderNumber === 1) {
        document.getElementById("left-arrow").setAttribute("disabled",true);
    }
    }


function nextSlide() {
    if(sliderNumber < 3){
    sliderNumber += 1;
    //console.log(sliderNumber) 
    output.src= "images/"+ sliderNumber +".png";
    output.classList.add("animate");
     setTimeout(() => {
        output.classList.remove("animate");
     },2000);
        document.getElementById("left-arrow").removeAttribute("disabled");
    }
    if(sliderNumber === 3) {
        document.getElementById("right-arrow").setAttribute("disabled",true);
    }
}