'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btnSlider = document.querySelector('.btn__arrow');
    let count = 1;
    
    function slider() {
        const sliderNumber = document.querySelectorAll('.slider__number');
        const sliderLine = document.querySelector('.slider__line');
        const sliderScroll = sliderLine.querySelector('span');
        const heightScroll = sliderScroll.getBoundingClientRect().height;
        const heightSlider = sliderLine.getBoundingClientRect().height;
        const numberPage = document.querySelector('.number-page')
        if(count < 6){       
            sliderScroll.style.top = `${(heightSlider-heightScroll)/5 * count}px`;
            count++;  
            sliderNumber[0].innerHTML = `0${count}`;    
            numberPage.innerHTML = `0${count}`;    
        }
        
        const pages = document.querySelectorAll('.page');

        pages.forEach(page =>{
            if(page.classList.contains(`page-${count}`)){
                page.classList.remove('display-none');
            } else {
                page.classList.add('display-none');
            }
        });

        const imgs = document.querySelectorAll('.img');

        imgs.forEach(img =>{
            if(img.classList.contains(`img-${count}`)){
                img.classList.remove('display-none');
            } else {
                img.classList.add('display-none');
            }
        });
    }

    btnSlider.addEventListener('click', slider);
    
});