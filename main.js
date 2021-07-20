////////////////////////////////////////////
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

    if (imgMenu.alt === 'close') {
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

//////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 500,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});