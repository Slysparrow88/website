export default function createMenu() {
    const imgMenu = document.querySelector('#img-menu');
    const shape = document.querySelector('.shape');
    const ul = document.createElement('ul');
        
    document.querySelector('#btn-menu').onclick = () => {

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
            imgMenu.alt = 'open';
            imgMenu.id = 'img-menu-open';
            imgMenu.src = '../src/img/cross_wt.png';
            shape.className = 'shape-open';
            setTimeout(() => { showMenu() }, 500);
        } else if (imgMenu.alt === 'open') {
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
                }
            }, 500);
            ul.innerHTML = '';
        };
    };
};