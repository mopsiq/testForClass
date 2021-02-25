class Slider {

  constructor(mainBlock, wrapperBlock) {
    this.mainBlock = mainBlock;
    this.wrapperBlock = wrapperBlock
    this.renderArrows(mainBlock)
    

    this.countSlider = 0;
    this.currentSlide = this.wrapperBlock.children[this.countSlider]
    this._maxSlide = wrapperBlock.childElementCount;

    this.renderSlide()
    // this.hiddenSlide();
  }

  renderArrows(block) {
    let nextArrow = document.createElement('a'), prevArrow = document.createElement('a');
    nextArrow.classList.add('block__arrows')
    nextArrow.classList.add('next')

    prevArrow.classList.add('block__arrows')
    prevArrow.classList.add('prev')

    nextArrow.innerHTML = "&#9658"
    prevArrow.innerHTML = "&#9668;"

    nextArrow.addEventListener('click', () => this.nextSlide() )
    prevArrow.addEventListener('click', () => this.prevSlide() )
    block.append(nextArrow, prevArrow);
  }

  hiddenSlide() {
    for(let i = 0; i < this.wrapperBlock.childElementCount; i++) {
      // if(this.currentSlide !== this.wrapperBlock.children[i]) {
      //   this.wrapperBlock.children[i].classList.remove('active')  
      //   this.wrapperBlock.children[i].classList.add('hidden')
      // } else {
      //   this.wrapperBlock.children[i].classList.add('active') 
      //   this.wrapperBlock.children[i].classList.remove('hidden') 
      // }
    }
  }

  renderSlide() {
    
    this.currentSlide = this.wrapperBlock.children[this.countSlider]
    this.currentSlide.classList.add('active')

  }

  nextSlide() {
    this.currentSlide.classList.remove('active')
    this.countSlider += 1;
    if(this.countSlider >= this._maxSlide) {
      this.countSlider = 0;
    }
    this.renderSlide()
    console.log(this.countSlider)
    console.log(this.currentSlide)

    // if(this.countSlider + 1 < this._maxSlide) {
    //   this.countSlider += 1;
    //   this.renderSlide()
    // } 

  }

  prevSlide() {

    // if(this.countSlider - 1 !== -1) {
    //   this.countSlider -= 1;
    //   this.renderSlide()
    // } 
    // return false;

  }

};

export {Slider as Slider};