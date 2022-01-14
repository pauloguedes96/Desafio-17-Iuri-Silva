const btnMobile = document.getElementById('btnMobile');

btnMobile.addEventListener('click', toogleMenu);

function toogleMenu () {

    console.log("teste");

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');
}