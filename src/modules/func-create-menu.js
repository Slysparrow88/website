import { searchScroll, open, close } from './func-search-scroll.js';

export default function createMenu() {
    const imgMenu = document.querySelector('#img-menu');
    const shape = document.querySelector('.shape');
    const ul = document.createElement('ul');

    document.querySelector('#btn-menu').onclick = () => {

        function showMenu() {

            const array = ['Home', 'Mountains', 'Oceans', 'Night cities', 'Contacts'];
            array.forEach(element => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'list';
                a.innerHTML = element;

                if (a.textContent === 'Home') {
                    searchScroll(a, document.querySelector('.container'), ul, imgMenu, shape);
                } else if (a.textContent === 'Mountains') {
                    searchScroll(a, document.querySelector('#heading-mountains'), ul, imgMenu, shape);
                } else if (a.textContent === 'Oceans') {
                    searchScroll(a, document.querySelector('#heading-oceans'), ul, imgMenu, shape);
                } else if (a.textContent === 'Night cities') {
                    searchScroll(a, document.querySelector('#city'), ul, imgMenu, shape);
                } else if (a.textContent === 'Contacts') {
                    searchScroll(a, document.querySelector('footer'), ul, imgMenu, shape);
                }
                li.append(a);
                ul.append(li);
                ul.style.display = 'block';
            });
            shape.append(ul);
        };

        if (imgMenu.alt === 'close') {
            open(imgMenu, shape);
            setTimeout(() => { showMenu() }, 500);

        } else if (imgMenu.alt === 'open') {
            close(ul, imgMenu, shape);
            setTimeout(() => {
                shape.className = 'shape';
                if (document.querySelector('section').id === 'mast') {
                    document.querySelector('.menu-button button').style.background = 'rgb(30, 30, 30)';
                } else if (document.querySelector('section').id === 'mast-down') {
                    document.querySelector('.menu-button button').style.background = '#E8B370';
                } else if (document.querySelector('section').id === 'mast-black') {
                    document.querySelector('.menu-button button').style.background = '#8B00ff';
                }
            }, 500);
        };
    };
};