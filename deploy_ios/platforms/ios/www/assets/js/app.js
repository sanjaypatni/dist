let idx = 0
let panels = document.querySelectorAll('.panel')
let interval = setInterval(run, 5000)
let activeSlideIndex = 0
let sliderContainer = document.querySelector('.slider-container')
let slideRight = document.querySelector('.right-slide')
let slideLeft = document.querySelector('.left-slide')
let slidesLength = slideRight.querySelectorAll('div').length
let  sliderHeight = sliderContainer.clientHeight
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

function run() {
    idx++
    changeImage()
    var leftBtn = document.getElementById('left')
    var rightBtn = document.getElementById('right')
}

function changeImage() {
   const imgs = document.getElementById('imgs')
   const img = document.querySelectorAll('#imgs img')
    if(idx > img.length -1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

function changeSlideUp() {
    let sliderContainer = document.querySelector('.slider-container')
    let slideRight = document.querySelector('.right-slide')
    let slideLeft = document.querySelector('.left-slide')
    let slidesLength = slideRight.querySelectorAll('div').length
    let  sliderHeight = sliderContainer.clientHeight

    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
         activeSlideIndex = 0
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}
function changeSlideDown() {
    let sliderContainer = document.querySelector('.slider-container')
    let slideRight = document.querySelector('.right-slide')
    let slideLeft = document.querySelector('.left-slide')
    let slidesLength = slideRight.querySelectorAll('div').length
    let  sliderHeight = sliderContainer.clientHeight
    activeSlideIndex--
    if(activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}

