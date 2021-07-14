const navBtn = document.querySelector('#navbtn');
const navIcon = document.querySelector('.navicon');
const navContent = document.querySelector('.nav-content');

navBtn.addEventListener('click', openNavbar);

function openNavbar() {
    navIcon.classList.toggle('far');
    navIcon.classList.toggle('fas');
    navContent.classList.toggle('show');
}