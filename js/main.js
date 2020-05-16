// VARIABLES

let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;


function menus(){
    let desplazamientoActual =  window.pageYOffset;

    if(desplazamientoActual <= 400)
    {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '700ms';
        menu.style.top = '70px';
        abrir.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '700ms';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', menus);

window.addEventListener('click', function(e){
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll', menus);

window.addEventListener('resize', function(){
    if(screen.width >= 700)
    {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', apertura);


























