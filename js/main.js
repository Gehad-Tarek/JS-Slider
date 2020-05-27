let prevImg = document.querySelector('.prev'),
    nextImg = document.querySelector('.next');

class Move {

    constructor (direction){
        this.direction = direction;
        this.slides = document.getElementsByClassName('item');
        this.slidesNumber = this.slides.length;
        this.index = 0;
    }
    
    moveTo() {  
        if (this.direction == "next") {
            this.index++; 
           if (this.index == this.slidesNumber) {
            this.index = 0;
           }
        } else {
            if (this.index == 0) {
                this.index = this.slidesNumber - 1;
            } else {
                this.index--;
            }
        }
        for (let i = 0; i < this.slidesNumber; i++) {
            this.slides[i].classList.remove("active");
        }
        this.slides[this.index].classList.add("active");
    }
    
}
let prevObj = new Move("prev");
//will be implemented by clicking on the prevBtn
prevImg.onclick =  () => {
    prevObj.moveTo();
} 

let nextObj = new Move("next");
//will be implemented by clicking on the prevBtn 
nextImg.onclick =  () => {
    nextObj.moveTo();
} 