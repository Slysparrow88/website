export default function changeHeader() {
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
};