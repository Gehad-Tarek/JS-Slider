let prevImg = document.querySelector('.prev'),
    nextImg = document.querySelector('.next'),
    slides = document.getElementsByClassName('item'),
    slidesNumber = slides.length,
    index = 0;

//this is implemented by clicking on the prevBtn
prevImg.onclick =  () => {
    moveTo("prev");
}  
//this is implemented by clicking on the prevBtn 
nextImg.onclick =  () => {
    moveTo("next");
} 

// move to the given direction (next or previous slide)
function moveTo(direction) {  
    if (direction == "next") {
       index++; 
       if (index == slidesNumber) {
           index = 0;
       }
    } else {
        if (index == 0) {
            index = slidesNumber - 1;
        } else {
            index--;
        }
    }
    for (i = 0; i < slidesNumber; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
