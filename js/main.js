//-- burger menu functionality
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    document.querySelector('nav').style.position = 'none';
    document.querySelector('#nav_overlay').classList.toggle('slide');
});

//-- Intersection Observer 
const slidesUp = document.querySelectorAll('.slide-up');
const slidesInRight = document.querySelectorAll('.slide-in-right');
const slidesInLeft = document.querySelectorAll('.slide-in-left');

const options = {
    threshold: 0.6
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target); //-- stop observing for intersection!
        } else {
            return;
        }
    })
}, options)
//---iterating through all elements, initiating the observer.
slidesUp.forEach(slider => {
    appearOnScroll.observe(slider);
});
slidesInRight.forEach(slider => {
    appearOnScroll.observe(slider);
});
slidesInLeft.forEach(slider => {
    appearOnScroll.observe(slider);
});