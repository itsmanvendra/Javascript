'use strict';

///////////////////////////////////////
// Modal window




const showModal = document.querySelectorAll('.btn--show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.btn--close-modal')
const header = document.querySelector('.header')
const operationsContainer = document.querySelector('.operations__tab-container');
const btnContent = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


const openModal = function(e){
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const hideModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// for(let i = 0; i<showModal.length; i++){
//   showModal[i].addEventListener('click', openModal );

// }

showModal.forEach(btn => btn.addEventListener('click', openModal));

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    hideModal();
  }
})

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We used cookie for improved analytics and functionality. <button class="btn btn--close-cookie"> Close! </button>`;

header.append(message);
const btnClose = document.querySelector('.btn--close-cookie');
btnClose.addEventListener('click', function(){
  message.remove();
})

// console.log(message);
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

const section1 = document.querySelector('#section--1');


const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function(e){
  // console.log(section1.getBoundingClientRect());
  // window.scrollTo(section1.getBoundingClientRect().left + window.pageXOffset, section1.getBoundingClientRect().top + window.pageYOffset);
  // console.log(window.pageYOffset)

  // window.scrollTo({
  //   left : section1.getBoundingClientRect().left + window.pageXOffset,
  //   right: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth'});
})


const section = document.querySelector('.nav__links');

section.addEventListener('click', function(e){
  e.preventDefault();
  // console.log(e.target);
  if(e.target.classList.contains('nav__link')){
    // console.log('LINK');
    const xD = e.target.getAttribute('href');
    document.querySelector(xD).scrollIntoView({behavior: 'smooth'});
  }
})



operationsContainer.addEventListener('click', function(e){
  // console.log(e.target.closest('.operations__tab'));

  if(!e.target.closest('.operations__tab')) return;
  const relation = e.target.closest('.operations__tab');
  btnContent.forEach(t => t.classList.remove('operations__tab--active'));
  operationsContent.forEach(t => t.classList.remove('operations__content--active'));
  e.target.closest('.operations__tab').classList.add('operations__tab--active');

  // console.log(relation.dataset.tab);
  document.querySelector(`.operations__content--${relation.dataset.tab}`).classList.add('operations__content--active');
})



const handleHover = function(e, opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(t => {
      if(t!==link){
        t.style.opacity = opacity;
      }
    })
    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover', function(e){
  handleHover(e, 0.5);
})


nav.addEventListener('mouseout', function(e){
  handleHover(e, 1);
})

const navHeight = nav.getBoundingClientRect().height;
const callObsFunc = function(entries, observer){
  if(entries[0].isIntersecting == false){
      nav.classList.add('sticky');
  }
  else{
    nav.classList.remove('sticky');
  }
  // console.log(entries[0].isIntersecting);
  // console.log(`hi`);
}

const callOptions  = {
  root: null,
  threshold : 0,
  rootMargin: `-${navHeight}px`


}


const observer = new IntersectionObserver(callObsFunc, callOptions);
observer.observe(header);


//animation while loading each section

const allSection = document.querySelectorAll('.section');
const secFunct = function(entries, observer){
  if(!entries[0].isIntersecting) return;
  else {
    entries[0].target.classList.remove('section--hidden');
  }
  observer.unobserve(entries[0].target);
  

}
const secObserver = new IntersectionObserver(secFunct, {root: null, threshold: 0.15,});
allSection.forEach(section => {
  secObserver.observe(section);
  console.log(section);
  section.classList.add('section--hidden');
})

const lazyImg = document.querySelectorAll('img[data-src]');

const revalImg = function(entries, observer){
  if(!entries[0].isIntersecting) return;
  else{
    entries[0].target.src = entries[0].target.dataset.src;
    
    entries[0].target.addEventListener('load', function(){
      entries[0].target.classList.remove('lazy-img');
    })
  }
  observer.unobserve(entries[0].target);
}
const imgObserver = new IntersectionObserver(revalImg, {root: null, threshold: 0, rootMargin: '200px'});

lazyImg.forEach(limg => imgObserver.observe(limg));


const slides = document.querySelectorAll('.slide');
let currSlide = 0;
let maxSlide = slides.length;

const Dots = document.querySelector('.dots');
const createDots = function(){
  slides.forEach((slide, i) => {
    Dots.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide = ${i}></button>`);
  })
}
createDots();

const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'))
  document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active');

}




document.querySelector('.slider').style.overflow = "visible";

const goToslide = function(currSlide){
  slides.forEach((slide, i) => {
  
    
    slide.style.transform = `translateX(${120 * (i-currSlide)}%)`;
    
  
  })

}
goToslide(0);
activateDot(0);



const btnRight = document.querySelector('.slider__btn--right');
const nextSlide = function(){

  if(currSlide == maxSlide - 1){
    currSlide = 0;
  }
  else{
    currSlide++;
  }
  goToslide(currSlide);
  activateDot(currSlide);
  
  
}

const btnLeft = document.querySelector('.slider__btn--left');
const prevSlide = function(){
  if(currSlide == 0){
    currSlide = maxSlide-1;
  }
  else{
    currSlide--;
  }
  goToslide(currSlide);
  activateDot(currSlide);
}
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

Dots.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    // console.log(e.target.dataset.slide);
    goToslide(e.target.dataset.slide);
    activateDot(e.target.dataset.slide);
  }
})


document.addEventListener('keydown', function(e){
  console.log(e.key);
  if(e.key === 'ArrowRight'){
    
    nextSlide();
  }
  if(e.key === 'ArrowLeft'){
    prevSlide();
  }
  else{
    return ;
  }
})



