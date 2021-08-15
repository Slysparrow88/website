export default function createMenu() {
    const imgMenu = document.querySelector('#img-menu');
    const shape = document.querySelector('.shape');
    const ul = document.createElement('ul');

    document.querySelector('#btn-menu').onclick = () => {

        function showMenu() {
            const array = ['Home', 'Mountains', 'Oceans', 'Night cities'];
            array.forEach(element => {
                const li = document.createElement('li');
                const a = document.createElement('a');

                a.className = 'list';
                a.innerHTML = element;
                if (a.textContent === 'Home') {
                    a.id = 'home';
                } else if (a.textContent === 'Mountains') {
                    a.id = 'mountains';
                } else if (a.textContent === 'Oceans') {
                    a.id = 'oceans';
                } else if (a.textContent === 'Night cities') {
                    a.id = 'night_cities';
                }

                li.append(a);
                ul.append(li);
                ul.style.display = 'block';

            });
            shape.append(ul);
        }

        if (imgMenu.alt === 'close') {
            document.querySelector('.menu-button button').style.background = '#000';
            imgMenu.alt = 'open';
            imgMenu.id = 'img-menu-open';
            imgMenu.src = '../src/img/cross_wt.png';
            shape.className = 'shape-open';
            setTimeout(() => { showMenu() }, 500);
        } else if (imgMenu.alt === 'open') {
            ul.innerHTML = '';
            imgMenu.alt = 'close';
            imgMenu.id = 'img-menu';
            imgMenu.src = '../src/img/par_wt_b.png';
            shape.className = 'shape-closed';

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