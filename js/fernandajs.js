// Menú Hamburguesa
const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close');

 // Mostrar el menú
if(navToogle) {
    navToogle.addEventListener('click', () => {
     navMenu.classList.add('show-menu');   });
}

// Ocultar menú
if(navClose) {
    navClose.addEventListener('click', () => {
     navMenu.classList.remove('show-menu');   });
}

// Cerrar menú al hacer click
const navLink =document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction ));

// Filtrar los proyectos
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

//  Filtros de trabajo
const linkWork =document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
     });

     this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

