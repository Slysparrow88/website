export default function changeHeader() {
    const imgMenu = document.querySelector('#img-menu');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 500) {
            document.querySelector('section').id = 'mast-down';
            if (imgMenu.alt === 'close') {
                document.querySelector('#btn-menu').style.background = '#E8B370';
            }
        } else if (window.pageYOffset < 500) {
            document.querySelector('section').id = 'mast';
            document.querySelector('#btn-menu').style.background = 'rgb(30, 30, 30)';
        }
    });
};