const slides= document.querySelectorAll(".slides img");
let currentIndex = 1;
let interval = null;

document.addEventListener("DOMContentLoaded",initSlider);

function initSlider(){
    if(slides.length>0){
        slides[currentIndex].classList.add("displaySlide");
    }
}


function showSlide(index){
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[index-1].classList.add("displaySlide");

}

function nextSlide(){
    if(currentIndex>slides.length-1){
        currentIndex=1;
    }else{
        currentIndex++;
    }
    console.log(currentIndex);
    console.log(slides.length);
    showSlide(currentIndex);
    
}

function prevSlide(){
    if(currentIndex===1){
        currentIndex=slides.length;
    }else{
        currentIndex--;
    }
    console.log(currentIndex);
    console.log(slides.length);
    showSlide(currentIndex);
}