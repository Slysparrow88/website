function searchScroll(item, final, ul, imgMenu, shape) {
    item.onclick = () => {
        final.scrollIntoView({ block: "center", behavior: "smooth" });
        close(ul, imgMenu, shape);
    };
};
function open(imgMenu, shape) {
    document.querySelector('.menu-button button').style.background = '#000';
    imgMenu.alt = 'open';
    imgMenu.id = 'img-menu-open';
    imgMenu.src = '../src/img/cross_wt.png';
    shape.className = 'shape-open';    
};
function close(ul, imgMenu, shape) {
    ul.innerHTML = '';
    imgMenu.alt = 'close';
    imgMenu.id = 'img-menu';
    imgMenu.src = '../src/img/par_wt_b.png';
    shape.className = 'shape-closed';
};

export { searchScroll, open, close }