export default function changeColorSide() {
    const imgMenu = document.querySelector('#img-menu');
    const side = document.querySelector('#app');
    const gritCity = document.querySelector('#city');

    window.addEventListener('scroll', function () {

        // console.log(window.pageYOffset);

        if (window.pageYOffset > 2000) {
            document.querySelector('section').id = 'mast-black';

            document.querySelector('.text-city').style.color = '#fff';
            side.id = 'app-black';
            gritCity.id = 'city-black'
            if (imgMenu.alt === 'close') {
                document.querySelector('#btn-menu').style.background = '#8B00ff';
            }
        } else if (window.pageYOffset < 2000 && window.pageYOffset > 500) {

            document.querySelector('.text-city').style.color = '#000';
            document.querySelector('section').id = 'mast-down';
            side.id = 'app';
            gritCity.id = 'city';
        }
    });
};