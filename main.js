const imgMenu = document.querySelector('#img-menu');
const shape = document.querySelector('.shape');
const ul = document.createElement('ul');

document.querySelector('button').onclick = () => {

    function showMenu() {
        const array = ['Home', 'Work', 'Services', 'Journal', 'Contact'];
        array.forEach(element => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.className = 'list';
            a.innerHTML = element;

            li.append(a);
            ul.append(li);
            ul.style.display = 'block';

        });
        shape.append(ul);
    }
    ///////////////////////////////////////////////////////////////////////////

    if (imgMenu.alt === 'close') {
        document.querySelector('#first-conteiner').style.opacity = '0';
        document.querySelector('#second-conteiner').style.opacity = '0';
        document.querySelector('.menu-button button').style.background = '#000';
        imgMenu.src = './img/cross_wt.png';
        imgMenu.alt = 'open';
        imgMenu.id = 'img-menu-open';
        shape.className = 'shape-open';
        setTimeout(() => { showMenu() }, 500);
    } else if (imgMenu.alt === 'open') {

        imgMenu.src = './img/par_wt_b.png';
        imgMenu.alt = 'close';
        imgMenu.id = 'img-menu';
        shape.className = 'shape-closed';
        setTimeout(() => {
            document.querySelector('#first-conteiner').style.opacity = '1';
            document.querySelector('#second-conteiner').style.opacity = '1';
            shape.className = 'shape';
            if (document.querySelector('section').id === 'mast') {
                document.querySelector('.menu-button button').style.background = 'rgb(30, 30, 30)';
            } else if (document.querySelector('section').id === 'mast-down') {
                document.querySelector('.menu-button button').style.background = '#E8B370';
            }
        }, 500);
        ul.innerHTML = '';
    }
}


const menuOverlay = document.querySelector('.menu-overlay');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        document.querySelector('section').id = 'mast-down';
        if (imgMenu.alt === 'close') {
            document.querySelector('.menu-button button').style.background = '#E8B370';
        }
    } else if (window.pageYOffset < 500) {
        document.querySelector('section').id = 'mast';
        document.querySelector('.menu-button button').style.background = 'rgb(30, 30, 30)';
    }
});

// const div2 = document.createElement('div');

// document.querySelector('#app').append(div2);

// div2.style.background = '#fff'
// div2.style.width = '100%'
// div2.style.height = '1000px'
// div2.style.margin = '50px 0 0 0'

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});