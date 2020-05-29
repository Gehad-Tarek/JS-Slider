class Move {
    prevImg = document.querySelector('.prev');
    nextImg = document.querySelector('.next');

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
   
    moveToPrev() {
        this.prevImg.onclick =  () => {
            this.moveTo();
        }
    }
    
    moveToNext() {
        this.nextImg.onclick =  () => {
            this.moveTo();
        } 
    }
}
let prevObj = new Move("prev");
prevObj.moveToPrev();

let nextObj = new Move("next");
nextObj.moveToNext();
